import React from "react";

const Card = ({ name, email }) => {
  return (
    <div className="bg-light-green dib br3 tc pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${name}?100x100`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
