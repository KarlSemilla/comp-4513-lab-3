import React from "react";

class FavoriteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.favorite} />
      </div>
    );
  }
}

export default FavoriteItem;
