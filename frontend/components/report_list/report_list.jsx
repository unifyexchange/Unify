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
      status: {in_progress: "IN_PROGRESS", resolved: "RESOLVED"},
      updateRec: {item: "", status: ""},
      activepage: 1,
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleTicketSearch = this.handleTicketSearch.bind(this)
  }


  componentDidMount() {

    this.props.fetchReportList(1)
    this.setState({ activepage: 1 })
  }


  handlePageChange(pageNumber){
   this.setState({activepage: pageNumber}, () => {
    this.props.fetchReportList(this.state.activepage)
   })
  }


  handleTicketSearch = (e)=>{
    e.preventDefault();

    if(!this.state.tickedId){
      return alert("Please enter a ticket id");
    }
    this.props.searchByTicketId(this.state.tickedId)
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(
        () => ({ image }),
        () => {
          this.handleUpload();
        }
      );
    }
  };

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.currentTarget.id !== "item-form-submit") {
      return;
    }

    if (!this.state.title || !this.state.body) {
      return alert("Please enter a title and description");
    }

    const itemObject = {
      title: this.state.title,
      body: this.state.body,
      item_id: this.props.item.id,
    };
    const item = Object.assign(
      { user_id: this.props.currentUser.id },
      itemObject
    );
    this.props.createReport(item);
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

  updateStatus = (report, index) =>{
    multipleButtonAlert(report.status).then((value) => {
      switch (value) {
     
        case "progress":
          var val = { reportId: report.id, status: this.state.status.in_progress, index: index }
          this.props.updateReportStatus(val)
          break;
     
        case "resolved":
          var val = { reportId: report.id, status: this.state.status.resolved, index: index }
          this.props.updateReportStatus(val)
          break;
     
        default:
      }
    });
  }


  viewItem = itemId =>{
    
    // this.props.history.push(`/items/${itemId}`)
    this.props.history.push({ pathname: `/items/${itemId}`, item: {} });

  }

  render() {
    var id = 0;

   const { currentUser } = this.props
    return (
      
      <div className="report-list-container">
         <div className="report-header">Reports.</div>
        <div className="details-section">
          <div className="details-info"> {this.state.showMsg ? "Click on a report row to view details here" : "Report details"}</div>
      {Object.keys(this.state.details).length > 0 && 
          <table className="details-table">
            <tbody>
            <tr>
              <th className="details-title">Title:</th>
               <td>{this.state.details.title}</td>
            </tr>
            <tr>
              <th className="details-title">Body:</th>
              <td>{this.state.details.body}</td>
            </tr>
            <tr>
              <th className="details-title">Ticket id:</th>
              <td>{this.state.details.ticket}</td>
            </tr>
            <tr>
              <th className="details-title">Status:</th>
              <td>{this.state.details.status}</td>
            </tr>   
            <tr>
              <th className="details-title">Created:</th>
              <td>{formatDate(new Date(this.state.details.created_at))}</td>
            </tr> 
            <tr>
              <th className="detailsHead">Updated at:</th>
              <td>{formatDate(new Date(this.state.details.updated_at))}</td>
            </tr>            
            </tbody>
           </table>
           } 
          </div>
         <div className="report-list-section">
         <div className="table-section">
         <p className="show-all" onClick={() => this.handlePageChange(1)}>Show all</p>
         <form className="search-form" onSubmit={this.handleTicketSearch}>
           <div className="input-holder">
             <input  type="search" onChange={this.update("tickedId")} onFocus={() => this.setState({ tickedId: "" })} placeholder="Enter Ticked id" id="ticket-input" name="gsearch"/>
             <input type="submit" value="Search"  className={
                    this.props.isLoading
                      ? "update-status-btn search-btn isLoading"
                      : "update-status-btn search-btn "
                  } onClick={this.handleTicketSearch}/>
            </div>      
        </form>

         <div className="table-holder">
          <table className="table-stripped">
            <tbody>
           <tr>
            <th>id</th>
            <th>title</th>
            <th>Status</th>
            {adminEmails.includes(currentUser.email_address) && <th>Edit</th>}
            {adminEmails.includes(currentUser.email_address) && <th>Action</th>}
            <th></th>
          </tr>

         
          {!this.props.isLoading &&
            <tr>
              { this.props.report.length == 0 &&
                <td colSpan="5">No data found</td>
               }
            </tr>
          }
          {this.props.report.map((rep, i) => (
            <tr onClick={()=> this.showDetails(rep)} key={rep.id}>
              <td> {this.state.activepage == 1 ? ++id : ((this.state.activepage * 20) - 20) + 1+i}</td>
               <td>{rep.title}</td>
              <td>{rep.status}</td>
              {adminEmails.includes(currentUser.email_address) &&
                <td>
                  <button
                  id="update-status"
                  className={
                    this.props.isLoading
                      ? "update-status-btn isLoading"
                      : "update-status-btn"
                  }
                  onClick={()=> this.props.history.push(`/item/edit/${rep.product_id}`)}
                  >
                  Edit
                 </button>
                </td> 
               }
              {adminEmails.includes(currentUser.email_address) &&   
              <td><button
                  id="update-status"
                  className={
                    this.props.isLoading
                      ? "update-status-btn isLoading"
                      : "update-status-btn"
                  }
                  onClick={()=> this.updateStatus(rep, i)}
                >
                  Update
                </button></td>
               }
               <td><button
                  id="update-status"
                  className="view-item-btn"
                  onClick={()=> this.viewItem(rep.product_id)}
                >
                  View item
                </button></td> 
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
