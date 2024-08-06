import React from "react";

const Card = ({ name, email }) => {
  return (
    <div className="ba b--white bw1 bg-light-green dib br4 tc pa1 ma2 grow shadow-5">
      <img alt="robot" src={`https://robohash.org/${name}?100x100`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
