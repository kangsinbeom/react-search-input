import React from "react";

function Item(props) {
  const { title, contents } = props;

  return (
    <div>
      <h2>{title}</h2>
      <ol>
        <li>{contents}</li>
      </ol>
    </div>
  );
}

export default Item;
