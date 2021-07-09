import React from "react";
import { withRouter } from "react-router-dom";
import { storage } from "./../../../src/firebase";
import ImageGalleryView from "./../image_gallery_view/image_gallery_view";
import ImageSlider from "./../image_slider/image_slider";
import SuccessModalContainer from "./../success_modal/success_modal_container";

import "./styles.scss";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      price: "",
      subtitle: "",
      name: "",
      condition: "",
      categories: ["Electronics", "Textbooks", "Apparel", "Tickets", "Sports & Outdoor", "Furniture", "Beauty & Health", "Other"],
      category: "",
      conditions: ["New", "Mint", "Excellent", "Good", "Fair", "Salvage"],
      image: null,
      url: "",
      images: [],
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  
  handleChange = e => {
    if(e.target.files[0]) {
      const image = e.target.files[0]
      this.setState(() => ({image}), () => {
        this.handleUpload();
      });
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            let images = this.state.images;
            images.push(url);

            this.setState({
              images: images,
            });
          });
      }
    );
  };




  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });

  }

  userTyping = (e, field) => {

    if (e.currentTarget.value) {
    if (isNaN(parseInt(e.currentTarget.value.charAt(e.currentTarget.value.length-1)))) {
      if (e.currentTarget.value.length > 1) {
        const price = parseInt(e.currentTarget.value.slice(1, e.currentTarget.value.length));
        this.setState({ [field]: price });
        document.getElementById('price').value = `$${price}`;
      } else {
        console.log("from guard2");
        this.setState({ [field]: null });
        document.getElementById('price').value = '';
      }
      return 
    }
    if (e.currentTarget.value.length > 6) {
      const price = parseInt(e.currentTarget.value.slice(1, 7));
      this.setState({ [field]: price });
      document.getElementById('price').value = `$${price}`;
      return 
    }
  }


    if (e.currentTarget.value.charAt(0) === "$") {

      if (e.currentTarget.value.slice(1)) {
        const price = parseInt(e.currentTarget.value.slice(1));
        this.setState({ [field]: price });
        document.getElementById('price').value = `$${price}`;
      }
      
    } else if (e.currentTarget.value) {
      const price = parseInt(e.currentTarget.value);
      this.setState({ [field]: price });
      document.getElementById('price').value = `$${price}`;
    }
    



 
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.currentTarget.id !== "item-form-submit") {
      return;
    }

    const itemObject = {
      name: this.state.name,
      subtitle: this.state.subtitle,
      description: this.state.description,
      condition: this.state.condition,
      category: this.state.category,
      price: this.state.price,
      images: this.state.images,
    };
    const item = Object.assign(
      { user_id: this.props.currentUser.id },
      itemObject
    );
    this.props.addItem(item);
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
        <ImageSlider images={this.state.images} />
        <ImageGalleryView imageUrls={this.state.images} />
      </div>
    );

    const imageUploadSection = () => (
      <div className="image-upload-container">
      <input className="image-upload-input" type="file" id="file" onChange={this.handleChange} />
      <label htmlFor="file" className="image-upload-label">
        <img className="upload-image-icon" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fadd_image_icon.png?alt=media&token=a9771772-7005-424d-85a0-bf43aea20d26"/>
      </label>
      <h3 className="num-img-uploaded-text">{this.state.images.length} image(s) uploaded</h3>
      {this.state.images.length > 0 ? imageGallerySection() : emptyImageSection()}
    </div>
    )

    return (
      <div className="item-form-container">
        {/* { this.props.item ? renderSuccessModal() : null } */}
        <form onSubmit={this.handleSubmit} className="item-form-box">
          <label className="item-form-header">List an item on Unify.</label>
          <br />
          <div className="item-form">
            <div className="image-input-section">{imageUploadSection()}</div>
            <div className="text-input-section">
              <div className="header-info-text-section">
                <p className="header-info-text">
                  By posting, you confirm that this listing complies with
                  Unify's Commerce Policies and all applicable laws.
                </p>
              </div>
              <input
                list="categories"
                onFocus={() => this.setState({ category: "" })}
                value={this.state.category}
                onChange={this.update("category")}
                className="item-form-input"
                placeholder="Category"
              />
              <datalist id="categories">
                {this.state.categories.map((category, i) => (
                    <option value={category} key={i}/>
                ))}
              </datalist>

              <br className="category-text-break-line" />
              <input
                type="text"
                value={this.state.name}
                onChange={this.update("name")}
                className="item-form-input"
                placeholder="Item name"
              />
              <br />
              <input
                type="text"
                value={this.state.subtitle}
                onChange={this.update("subtitle")}
                className="item-form-input"
                placeholder="Subtitle (put something to catch people's attention here)"
              />
              <br />
              <input
                type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="item-form-input"
                placeholder="Description"
              />
              <br />
              <input
                list="conditions"
                onFocus={() => this.setState({ condition: "" })}
                value={this.state.condition}
                onChange={this.update("condition")}
                className="item-form-input"
                placeholder="Condition"
              />
              <datalist id="conditions">
              {this.state.conditions.map((condition, i) => (
                    <option value={condition} key={i}/>
                ))}
              </datalist>
              <br />
              <input
                type="text"
                id="price"
                // value={this.state.price}
                onChange={ (e) => this.userTyping(e, "price")}
                className="item-form-input price-input"
                placeholder="$0.00"
                // min="0.00"
                // max="10000.00"
                // step="0.01"
              />
              <br />
              {this.props.showSuccessModal === true ? (
                <SuccessModalContainer
                  btnTitle="Start Exploring!"
                  message="Item was successfully submitted"
                  navigate={"/"}
                />
              ) : null}
              {this.renderErrors()}
              <br />
              <button
                id="item-form-submit"
                className="item-form-submit"
                onClick={this.handleSubmit}
              >
                Upload item
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ItemForm);
