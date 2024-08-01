import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        margin: "1rem",
        padding: "1rem",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
