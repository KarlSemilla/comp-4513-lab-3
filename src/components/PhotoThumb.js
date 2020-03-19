import React from "react";
class PhotoThumb extends React.Component {
  render() {
    const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square150/${this.props.photo.filename}`;
    return (
      <div className="photoBox" onClick={this.handleViewClick}>
        <figure>
          <img
            src={imgURL}
            className="photoThumb"
            title={this.props.photo.title}
            alt={this.props.photo.title}
          />
        </figure>
        <div>
          <h3>{this.props.photo.title}</h3>
          <p>
            {this.props.photo.location.city},{this.props.photo.location.country}
          </p>
          <button onClick={this.handleViewClick}>View</button>
          <button onClick={this.handleFavClick}>❤</button>
        </div>
      </div>
    );
  }

  handleViewClick = () => {
    this.props.showImageDetails(this.props.photo.id);
  };

  handleFavClick = () => {
    const imgURL =
      "https://storage.googleapis.com/funwebdev-3rd-travel/square150/";
    let fav = imgURL + this.props.photo.filename;
    this.props.addToFavorites(fav);
  };
}
export default PhotoThumb;
