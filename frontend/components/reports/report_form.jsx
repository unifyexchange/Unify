import React from "react";
import { withRouter } from "react-router-dom";
import { storage } from "../../../src/firebase";
import ImageGalleryView from "../image_gallery_view/image_gallery_view";
import ImageSlider from "../image_slider/image_slider";
import SuccessModalContainer from "../success_modal/success_modal_container";

import "./styles.scss";

class ReportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      image: null,
      url: "",
      images: [],
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (
      Object.keys(this.props.item).length == 0 ||
      this.props.item == undefined
    ) {
      this.props.fetchCurrentItem(this.props.itemId);
    }
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


  viewReports =()=>{

    this.props.history.push("/report/list");
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

  render() {
    const emptyImageSection = () => (
      <div className="empty-images-section">
        <img
          className="empty-images-icon"
          src="https://icon-library.net/images/image-icon/image-icon-1.jpg"
        ></img>
        <p>Images will appear here once you start adding them.</p>
      </div>
    );

    const imageGallerySection = () => (
      <div className="image-gallery-section">
        <ImageSlider images={this.props.item.image_urls} />
        <ImageGalleryView imageUrls={this.props.item.image_urls} />
      </div>
    );

    const imageUploadSection = () => (
      <div className="image-upload-container">
        <input
          className="image-upload-input"
          type="file"
          id="file"
          onChange={this.handleChange}
        />
        <h3 className="item-title">{this.props.item.name}</h3>
        {this.props.item.image_urls.length > 0
          ? imageGallerySection()
          : emptyImageSection()}
      </div>
    );

    return (
      <div className="item-form-container">
        {/* { this.props.item ? renderSuccessModal() : null } */}
        {Object.keys(this.props.item).length > 0 && (
          <form onSubmit={this.handleSubmit} className="item-form-box">
            <label className="item-form-header">Report this item.</label>
            <br />
            <div className="item-form">
              <div className="image-input-section">{imageUploadSection()}</div>
              <div className="text-input-section">
                <div className="header-info-text-section">
                  <p className="view-report-text" onClick={() => this.viewReports()}>View reports</p>
                </div>
                <input
                  list="categories"
                  onFocus={() => this.setState({ category: "" })}
                  value={this.state.title}
                  onChange={this.update("title")}
                  className="item-form-input"
                  placeholder="Title"
                />
                <br className="category-text-break-line" />
                <textarea
                  onChange={this.update("body")}
                  className="description-box item-form-input"
                  rows="100"
                  cols="50"
                  placeholder="Enter description"
                ></textarea>
                <br />
                {this.props.showSuccessModal === true ? (
                  <SuccessModalContainer
                    btnTitle="View report list"
                    message="The report was successfully submitted"
                    navigate={`/report/list`}
                  />
                ) : null}
                {this.renderErrors()}
                <br />
                <button
                  id="item-form-submit"
                  className={
                    this.props.isLoading
                      ? "item-form-submit isLoading"
                      : "item-form-submit"
                  }
                  onClick={this.handleSubmit}
                >
                  Report item
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default withRouter(ReportForm);
