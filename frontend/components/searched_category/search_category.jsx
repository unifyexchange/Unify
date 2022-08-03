import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";
import { formatDate } from "../../util/formatDate";
import Pagination from "react-js-pagination";
import { multipleButtonAlert } from "../../util/alerts";
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
      tickedId: "",
      images: [],
      showMsg: true,
      updateRec: {item: "", status: ""},
      activepage: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchMostSearchCategory(1)
  }

  handlePageChange(pageNumber){
    this.setState({activepage: pageNumber}, () => {
     this.props.fetchMostSearchCategory(this.state.activepage)
    })
  }

  renderErrors() {
    return (
      <ul className="error-section">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  showDetails = item =>{
    this.setState({showMsg: false })
    this.setState({details: item})
  }


  render() {
    var id = 0;

   const { currentUser } = this.props
    return (
      
      <div className="report-list-container">
         <div className="report-header">Most search query</div>
        <div className="details-section">
          <div className="details-info"> {this.state.showMsg ? "Click on a row to view here" : "Query details"}</div>
      {Object.keys(this.state.details).length > 0 && 
          <table className="details-table">
            <tbody>
            <tr>
              <th className="details-title">Query:</th>
              <td>{this.state.details.string}</td>
            </tr>
            <tr>
              <th className="details-title">Count (Last 30 days):</th>
              <td>{this.state.details.count}</td>
            </tr>            
            </tbody>
           </table>
           } 
          </div>
         <div className="report-list-section">
         <div className="table-section">

         <div className="table-holder">
          <table className="table-stripped">
            <tbody>
           <tr>
            <th>id</th>
            <th>String</th>
            <th>count</th>
          </tr>

          {!this.props.isLoading &&
            <tr>
              { this.props.searches.length == 0 &&
                <td colSpan="5">No data found</td>
               }
            </tr>
          }
          {this.props.searches.map((search, i) => (
            <tr onClick={()=> this.showDetails(search)} key={i}>
              <td> {this.state.activepage == 1 ? ++id : ((this.state.activepage * 20) - 20) + 1+i}</td>
               <td>{search.string}</td>
              <td>{search.count}</td>
           </tr>
          ))}
          </tbody>
         </table>
         </div>
        </div>
        <Pagination 
          activePage={this.state.activepage} 
          itemsCountPerPage={20} 
          totalItemsCount={this.props.totalPage != undefined ? this.props.totalPage : 0} 
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
        </div>
        </div>
    );
  }
}

export default withRouter(ReportList);
