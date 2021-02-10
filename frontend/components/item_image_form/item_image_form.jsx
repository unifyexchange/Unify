import React from "react";
import { storage } from "./../../../src/firebase";
import MasonryGrid from "./../masonry_grid/masonry_grid";

import "./styles.scss";

export default class ItemImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      images: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
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
        <MasonryGrid images={this.state.images} brakePoints={[350, 500, 750]} />
      </div>
    );

    return (
      <div className="image-upload-container">
        <input
          className="image-upload-input"
          type="file"
          id="file"
          onChange={this.handleChange}
        />
        <label for="file" className="image-upload-label">
          <img
            className="upload-image-icon"
            src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fadd_image_icon.png?alt=media&token=a9771772-7005-424d-85a0-bf43aea20d26"
          />
        </label>
        {this.state.images.length > 0
          ? imageGallerySection()
          : emptyImageSection()}
      </div>
    );
  }
}
