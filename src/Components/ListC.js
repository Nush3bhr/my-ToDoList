import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./List.css";
const ListC = (props) => {
  const [line, setLine] = useState(false);
  const cutIt = () => {
    setLine(true);
  };
  return (
    <div className="listStyle">
      <span onClick={cutIt}>
        <DeleteIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};
export default ListC;
