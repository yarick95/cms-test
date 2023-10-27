import React, { useState } from "react";

const DummyList = () => {
  const [list, setList] = useState(["Item 1", "Item 2", "Item 3"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setList([...list, newItem.trim()]);
      setNewItem("");
    }
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        placeholder="Type a new item and press Enter"
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default DummyList;
