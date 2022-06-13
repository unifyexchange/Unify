import React from "react";
import Masonry from "./masonry";
import Tile from "./tile";

class MasonryGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="masonry-container">
          <Masonry brakePoints={this.props.brakePoints}>
            {this.props.images.map((image, id) => {
              return <Tile src={image} key={id} />;
            })}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default MasonryGrid;
