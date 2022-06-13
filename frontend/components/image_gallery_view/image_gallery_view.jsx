import React from "react";
import ReactBnbGallery from "react-bnb-gallery";
import { withRouter } from "react-router-dom";

import "./styles.scss";

class ImageGalleryView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState((prevState) => ({
      galleryOpened: !prevState.galleryOpened,
    }));
  }

  render() {
    const { imageUrls } = this.props;

    let photos = imageUrls.map((image) => {
      return { photo: image, thumbnail: image };
    });

    return (
      <div className="image-gallery-section">
        <img
          className="image-gallery-icon"
          src="https://firebasestorage.googleapis.com/v0/b/unify-309723.appspot.com/o/src%2Fgallery-removebg-preview.png?alt=media&token=517f91d7-30ea-4128-84f3-f6c4eccc0104"
          onClick={this.toggleGallery}
        />
        <p className="image-gallery-button-text">Gallery View</p>
        <ReactBnbGallery
          show={this.state.galleryOpened}
          photos={photos}
          onClose={this.toggleGallery}
        />
      </div>
    );
  }
}

export default withRouter(ImageGalleryView);
