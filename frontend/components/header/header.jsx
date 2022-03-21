import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchBar from "./../search_bar/search_bar";
import SearchBarWithButton from "./../search_bar/search_bar_with_button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { adminEmails } from "../../util/adminAccount"
import "./styles.scss";
import  firebase  from 'firebase/app';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true,
      width: 0,
      height: 0,
      hasUnreadMessages: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.fetchTheCategories();
    document.addEventListener("mousedown", this.handleClick, false);
    window.addEventListener("resize", this.updateWindowDimensions);

    this.observeConversations(this.props.currentUser);
  }

  getCurrentUserName = (currentUser) => {
    return `${currentUser.first_name} ${currentUser.last_name}`;
  }
  
  observeConversations = async (currentUser) => {
    console.log("in observe", currentUser);
    await firebase.firestore().collection("conversations").where('users', 'array-contains', {id: currentUser.id, name: this.getCurrentUserName(currentUser)})
    .onSnapshot(async querySnapshot => {
      var hasUnreadMessages = false;
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log("SOCKET RELOADED");
        const conversation = doc.data();

        if (this.isUnread(conversation)) {
          hasUnreadMessages = true;
        }

       });

       this.setState({
         hasUnreadMessages: hasUnreadMessages
       });




    });
  }


  isUnread = (conversation) => {
    const lastMessage = conversation.messages[conversation.messages.length-1];
    if (lastMessage.senderID !== this.props.currentUser.id) {
      return !conversation.recipientHasRead;
    }
    return false;
    
  }


  fetchTheCategories() {
    if (Object.keys(this.props.categories).length == 0) {
      this.props.fetchAllCategories();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    // this.setState(
    //   { width: window.innerWidth, height: window.innerHeight },
    //   () => {
    //     {
    //       this.state.width < 1200
    //         ? this.setState({ showMenu: false })
    //         : this.setState({ showMenu: true });
    //     }
    //   }
    // );
  }

  showMenu() {
    const menu = document.getElementsByClassName("account-settings-menu")[0];
    menu.classList.toggle("hidden-menu");
  }

  handleClick(e) {
    const button = document.getElementById("account-button");
    if (
      document
        .getElementsByClassName("account-settings-menu")[0]
        .contains(e.target) ||
      button.contains(e.target)
    ) {
      return;
    }
    this.handleClickOutside();
  }


  handleClickOutside() {
    const menu = document.getElementsByClassName("account-settings-menu")[0];
    if (menu.classList.contains("hidden-menu")) {
    } else {
      menu.classList.toggle("hidden-menu");
    }
  }

  openMenuBar = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  updateCategoryItems = (name) => {
    this.props.selectCategory(name);
    this.props.fetchAllCategoryItems(name);
  };


  moveToMetrics = ()=>{
    this.showMenu()
    this.props.history.push('/report/metrics')
  }

  render() {
    const { categories } = this.props;
    const sessionLinks = () => (
      <nav className="header-links">
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link signup-link" to="/signup">
          Sign up
        </Link>
      </nav>
    );

    const accountSettings = () => (
      <div className="account-settings-menu hidden-menu">
        <div className="account-settings-stats">
          <h3 className="account-settings-name">
            {this.props.currentUser.first_name}{" "}
            {this.props.currentUser.last_name}{" "}
          </h3>
          <h4 className="account-settings-email">
            {this.props.currentUser.email_address}
          </h4>
        </div>

        { adminEmails.includes(this.props.currentUser.email_address) && 
          <div>
           <hr className="account-setting-divider" />
           <ul
            className="account-settings-list"
            onClick={() => this.moveToMetrics()}
            >
           <li className="account-settings-item">Metrics</li>
          </ul>
         </div>
        }
        <hr className="account-setting-divider" />
        <ul
          className="account-settings-list"
          onClick={() => this.props.logout(this.props.currentUser)}
        >
          <li className="account-settings-item">Logout</li>
        </ul>
      </div>
    );

    const unreadDot = () => (
      <span className="unreadDot"></span>
   );

    const accountLinks = () => (
      <div className="link-holder">
        {accountSettings()}

        <hgroup className="header-group">
          <span
            className={`${
              this.state.showMenu ? "show-display" : "no-display "
            } menuHolder`}
          >

            <Link className="link menu-hide" to="/conversations">
              Messages
            </Link>
            {this.state.hasUnreadMessages ? unreadDot() : null}
            <Link className="link menu-hide " to="/items/new">
              <img className="icon" src="/images/new_post.png" alt="plus-sign" width="18px"/>
              Post an Ad
            </Link>
            <Link className="link menu-hide" to="/about-us">
              About
            </Link>
            <button
              id="account-button"
              className="account-button menu-hide link"
              onClick={this.showMenu}
            >
              <img className="icon user-icon" src="/images/user_icon.png" alt="user-icon" width="30px" />
            </button>
          </span>
        </hgroup>

        <button
          onClick={() => this.openMenuBar()}
          id="menu-bar"
          className="menu-bar-responsive"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <SearchBarWithButton
          categories={categories}
          updateItems={this.updateCategoryItems}
        />
      </div>
    );

    return (
      <div className="fixed-nav-bar">
        <div
          onClick={() => this.props.history.push("/")}
          style={{ zIndex: 3000 }}
        >
          <img
            className="logo-img"
            src="https://firebasestorage.googleapis.com/v0/b/unify-309723.appspot.com/o/src%2Ffavicon.png?alt=media&token=eec7cf61-1983-459e-81d5-ec46999eac55"
          />
        </div>
        {this.props.currentUser ? accountLinks() : sessionLinks()}
      </div>
    );
  }
}

export default withRouter(Header);
