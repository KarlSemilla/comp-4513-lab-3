import React from "react";
import FavoriteItem from "./FavoriteItem.js";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favArray: [] };
  }

  render() {
    return (
      <div className="favorites">
        {this.props.favorites.map(f => (
          <FavoriteItem favorite={f}></FavoriteItem>
        ))}
      </div>
    );
  }
}

export default Favorites;
