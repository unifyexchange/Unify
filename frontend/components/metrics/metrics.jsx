import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faList, faSearch, 
    faPercent, faMicrochip, 
    faBook, faTshirt, faTicketAlt, faBed 
} from "@fortawesome/free-solid-svg-icons";
import { adminEmails } from "../../util/adminAccount"


class ReportList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      details: {},
      image: null,
      url: "",
      icons: [faMicrochip, faBook, faTshirt, faTicketAlt, faBed],
      tickedId: "",
      images: [],
      metrics: {},
      isLoading: false,
      activepage: 1,
    };
  }

  componentDidMount() {
   this.setState({ isLoading: true }) 
   this.props.fetchMetrics().then((res) => {
       this.setState({ metrics:  res.metrics, isLoading: false})
   });
  }

  componentWillMount(){
    if(!adminEmails.includes(this.props.currentUser.email_address)){
        this.props.history.goBack()
    }
  }
  render() {
    var id = 0;

   const { metrics, isLoading } = this.state

   const loader = () => (
      <span className="cssload-loader">
        <span className="cssload-loader-inner" />
      </span>
    );
   
    return (
    
      <div className="metrics-list-container">

        {isLoading ? loader() : null }


        {(Object.keys(metrics).length > 0 && !isLoading)  &&  
         <div className="row">
            <div className="column">
                <div className="card">
                 <div className="card-body">   
                  <h3 className="card-header">{metrics.listing.allUsers}</h3>
                  <p className="card-text">Total users</p>
                 </div>
                 <div className="icon-style"><FontAwesomeIcon color={"#00b248"} icon={faUser} /></div>

                </div>
            </div>

            <div className="column">
                <div className="card">
                 <div className="card-body">   
                  <h3 className="card-header">{metrics.listing.allListings}</h3>
                  <p className="card-text">Total Listings</p>
                 </div>
                 <div className="icon-style"><FontAwesomeIcon color={"#00b248"} icon={faList} /></div>
                </div>
            </div>
            
            <div className="column">
                <div className="card pointer" onClick={()=> this.props.history.push('/report/most-searched-category')}>
                <div className="card-body"> 
                 <h3 className="card-header">{metrics.listing.mostRecent.length > 0 ? metrics.listing.mostRecent[0].string: "None"  }</h3>
                 <p className="card-text">Trending search ({metrics.listing.mostRecent.length > 0 ? metrics.listing.mostRecent[0].count : 0  })</p>
                 </div>
                 <div className="icon-style"><FontAwesomeIcon color={"#00b248"} icon={faSearch} /></div>
              </div>
            </div>
            
            <div className="column">
                <div className="card">
                <div className="card-body"> 
                 <h3 className="card-header">{metrics.listing.averageListing}</h3>
                 <p className="card-text">Average lisitngs </p>
                 </div>
                 <div className="icon-style"><FontAwesomeIcon color={"#00b248"} icon={faPercent} /></div>
                </div> 
            </div>
        </div>
       } 

     {(Object.keys(metrics).length > 0 && !isLoading) && 

            <div  className="category-container">
                <div className="category-header"><h2>Categories</h2></div>
                <div className="row"> 
                { metrics.listing.categorySearch.map(( category, index)=> (
                    <div key={index} className="category-section">
                        <div className="column">
                            <div className="card">   
                            <h3 className="card-header">{category.name}</h3>
                            <p className="card-text">  {category.count}</p>
                            </div>
                        </div>
                    
                    </div> 
                    ))
                }
                </div>
                </div>
       }
   </div>
    );
  }
}

export default withRouter(ReportList);
