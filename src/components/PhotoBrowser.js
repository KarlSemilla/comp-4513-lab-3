import React from "react";
import PhotoList from "./PhotoList.js";
import EditPhotoDetails from "./EditPhotoDetails.js";
import Favorites from "./Favorites.js";

class PhotoBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPhoto: 1, favoriteArr: [] };
  }

  render() {
    return (
      <div>
        <Favorites favorites={this.state.favoriteArr}></Favorites>
        <section className="container">
          <PhotoList
            photos={this.props.photos}
            showImageDetails={this.showImageDetails}
            addToFavorites={this.addToFavorites}
          />
          <EditPhotoDetails
            photos={this.props.photos}
            currentPhoto={this.state.currentPhoto}
            updatePhoto={this.props.updatePhoto}
          />
        </section>
      </div>
    );
  }

  showImageDetails = id => {
    this.setState({ currentPhoto: id });
  };

  addToFavorites = fav => {
    let tempArr = this.state.favoriteArr;
    tempArr.push(fav);
    console.log(tempArr);
    this.setState({ favoriteArr: tempArr });
  };
}

export default PhotoBrowser;
