import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListC from "./ListC";
import "./List.css";

const List = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const itemChange = (event) => {
    setItem(event.target.value);
  };
  const listofItems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });

    setItem("");
  };
  return (
    <div className="mainDiv">
      <div className="centerDiv">
        <h1>My ToDo List</h1>
        <input
          type="text"
          placeholder="Add items"
          value={item}
          onChange={itemChange}
        ></input>
        <Button className="Btn" onClick={listofItems}>
          <AddIcon />
        </Button>
        <ol>
          {newItem.map((val, index) => {
            return <ListC key={index} text={val} />;
          })}
        </ol>
      </div>
    </div>
  );
};
export default List;
