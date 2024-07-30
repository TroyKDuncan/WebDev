import React, { Component } from "react";

class Card extends Component {
  render() {
    const { id, name, username, email } = this.props;

    return (
      <div className="bg-light-green dib br3 tc pa3 ma2 grow bw2 shadow-5">
        <img alt="robot" src={`https://robohash.org/${name}?200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
