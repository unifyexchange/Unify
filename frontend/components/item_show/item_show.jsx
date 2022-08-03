import React from 'react';

import { withRouter } from 'react-router-dom';
import ImageSlider from './../image_slider/image_slider';
import ImageGalleryView from './../image_gallery_view/image_gallery_view';
import { formatDate } from "../../util/formatDate";
import './styles.scss';
import  {confirmAlert } from '../../util/alerts'
import { adminEmails } from "../../util/adminAccount"

// const firebase = require("firebase/app");
import  firebase  from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'
require('firebase/firestore')
require('firebase/storage')
// require('@firebase/firestore')


class ItemShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: null,
      item: {},
      showModal: false,
      showData: false,
      messageText: "Hi! I saw your item for sale on Unify and was interested in checking it out. Is it still available?",
    };

    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);

    
  }

  test = async () => {
    const x = await firebase.firestore().collection("conversations").where('users', 'array-contains', {id: 1, name: "Admin Admin"}).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
 
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    
  }

  componentDidMount() {
     this.initializePage()
  }



   initializePage = () => {
    if (
      (Object.keys(this.props.item).length > 0 &&
        this.props.item.id != this.props.itemId) ||
      Object.keys(this.props.item).length == 0 || Object.keys(this.props.item).length == undefined
    ) {
      this.props.fetchCurrentItem(this.props.itemId).then((res) => {
        this.setState({ item:  res.item})
      });
    } else {
      this.setState({ item: this.props.item })
    }
    this.props.fetchAllFavoriteItems();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.favorites.length !== nextProps.favorites.length) {
      this.props.fetchAllFavoriteItems();
    }
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleMessageSubmit = async () => {
    const { currentUser } = this.props;
    const { messageText, item } = this.state;


    console.log(item);
    //Ludovico:

    if (messageText && messageText.replace(/\s/g, '').length) {
      //Message is valid
      const senderID = currentUser.id;
      const recipientID = item.user_id;
      const message = {senderID: senderID, message: messageText, timestamp: Date.now()};
      const itemData = item;



      const conversationExists = await this.doesConversationExist(senderID, recipientID);
      if (conversationExists) {
        //Conversation already exists, send message
        await this.sendMessage(senderID, recipientID, message, itemData);
      } else {
        //Create conversation and send message
        const userA = {id: currentUser.id, name: this.getCurrentUserName(currentUser)};
        const userB = {id: item.user_id, name: item.seller_name};

        await this.createConversationWithMessage(userA, userB, message, itemData);
      }


      this.props.history.push("/conversations");
    } 
  }

  getCurrentUserName = (currentUser) => {
    return `${currentUser.first_name} ${currentUser.last_name}`;
  }

  sendMessage = async (userAID, userBID, message, itemData) => {
    const conversationKey = this.createConversationKey(userAID, userBID);

    await firebase.firestore().collection('conversations').doc(conversationKey)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion(message),
        recipientHasRead: false,
        lastTimeStamp: Date.now(),
        item: itemData
      });
  }

  createConversationWithMessage = async (userA, userB, message, item) => {
    console.log(userA, userB, message);
    const conversationKey = this.createConversationKey(userA.id, userB.id);
    await firebase.firestore().collection('conversations').doc(conversationKey)
        .set({
          messages: [message],
          users: [userA, userB],
          recipientHasRead: false,
          lastTimeStamp: Date.now(),
          item: item
        })
  }

  doesConversationExist = async (userAID, userBID) => {
    console.log("doesConvo");
    const conversationKey = this.createConversationKey(userAID, userBID);
    const conversation = await firebase.firestore().collection("conversations").doc(conversationKey).get();
    return conversation.exists;
  }

  createConversationKey = (userAID, userBID) => {
    return [userAID, userBID].sort().join(":")
  }




  
  deleteItem = ()=>{
    confirmAlert().then((willDelete) => {
        if (willDelete) {
           this.props.deleteItem(this.state.item.user_id, this.state.item.id, this.props.history)
        } 
      });
    }


  render() {
    const { favoriteItems, currentUser } = this.props;
    const { item }= this.state
    const { showModal  } = this.state;

    const loader = () => (
      <span className="cssload-loader">
        <span className="cssload-loader-inner" />
      </span>
    );
    const favoriteIds = favoriteItems.map((fav) => fav.id);

    const greenHeart = () => (
      <img
        onClick={() => this.props.deleteFavorite(item.id)}
        className="favorite-heart-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/834px-A_perfect_SVG_heart.svg.png"
      />
    );

    const greyHeart = () => (
      <img
        onClick={() => this.props.addFavorite(item.id)}
        className="favorite-heart-icon"
        src="https://firebasestorage.googleapis.com/v0/b/unify-309723.appspot.com/o/src%2FgreyHeart.png?alt=media&token=35ea9664-714c-4d5b-a3a7-cf9c4f6d48c6"
      />
    );

    const itemInfo = () => (
      <div className="item-show-content">
        <div className="item-show-image-section">
          <div className="item-show-image-content">
            <div className="item-show-image-gallery-section">
              <ImageGalleryView imageUrls={item.image_urls} />
            </div>
            <ImageSlider images={item.image_urls} />
          </div>
        </div>
        <div className="item-show-info-section">
          <div className="item-show-header-section">
            <h4 className="item-show-header-category">{item.category_name}</h4>
            <p className="item-show-header-created-at">
              Uploaded at {formatDate(new Date(item.created_at))}
            </p>
          </div>
          <h1 className="item-show-name">{item.name}</h1>
          <h3 className="item-show-subtitle">{item.subtitle}</h3>
          <h3 className="item-show-price">${item.price.toFixed(2)}</h3>
          <div className="item-show-user-action-section">

          {(currentUser.id == item.user_id || adminEmails.includes(currentUser.email_address)) &&  
            <button className="delete-item-button" onClick={() => this.deleteItem()}>Delete</button>
           }
            {currentUser.id != item.user_id && 
               <button className="message-seller-button" onClick={() => this.setState({ showModal: true })}>Message seller</button>
             }
            <div className="favorite-heart-icon-section">
              {favoriteIds && favoriteIds.includes(item && item.id)
                ? greenHeart()
                : greyHeart()}
            </div>
          </div>

          <br className="item-show-break-line" />

          <div className="item-show-detail-row">
            <h4 className="item-show-detail-row-title">Category</h4>
            <h4 className="item-show-detail-row-value">{item.category_name}</h4>
          </div>

          <div className="item-show-detail-row">
            <h4 className="item-show-detail-row-title">Condition</h4>
            <h4 className="item-show-detail-row-value">
              {item.condition_name}
            </h4>
          </div>

          <div className="item-show-detail-row">
            <h4 className="item-show-detail-row-title">Uploaded by</h4>
            <h4 className="item-show-detail-row-value">{item.seller_name}</h4>
          </div>

          <div className="item-show-detail-row">
            <h4 className="item-show-detail-row-title">Posted on</h4>
            <h4 className="item-show-detail-row-value">
              {formatDate(new Date(item.created_at))}
            </h4>
          </div>
          <br className="item-show-break-line" />
          <div className="item-show-description-section">
            <h4 className="item-show-description-title">Description</h4>
            {item.description}
          </div>
        </div>
      </div>
    );

    const renderMessageModal = () => (
      <div className="message-modal-section">
        <div className="message-modal-content animated fadeInUp">
          <div className="checkmark-section">
            <img
              className="checkmark-icon animated fadeInLeft delay-1s"
              src="https://www.pinclipart.com/picdir/big/201-2016537_send-message-icon-white-clipart-computer-icons-clip.png"
            />
          </div>
          <img
            className="message-modal-cancel-button"
            src="https://firebasestorage.googleapis.com/v0/b/unify-309723.appspot.com/o/src%2Fxmark.png?alt=media&token=073afe08-465d-4600-92ac-5d4ee936a5a6"
            onClick={() => this.setState({ showModal: false })}
          />
          <h2 className="message-modal-header">
            Send a message to {item.seller_name}
          </h2>
          <div className="message-modal-input-section">
            <textarea
              className="message-modal-text-input"
              onChange={this.update("messageText")}
              cols="70"
              rows="3"
              value={this.state.messageText}
            />
          </div>
          <button
            className="message-modal-confirm-button"
            onClick={() => this.handleMessageSubmit()}
          >
            Send
          </button>
        </div>
      </div>
    );

    return (
      <div className="item-show-container">
        {this.props.isLoading ? loader() : null} }
        {(!this.props.isLoading && Object.values(item).length) && 
                   Object.keys(item).length > 0 ? itemInfo() : loader()
        }
         { showModal ? renderMessageModal() : null }
      </div>
    );
  }
}

export default withRouter(ItemShow);
