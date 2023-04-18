import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);

  function addItem() {
    const newItem = prompt('Enter a new item:');
    setItems([...items, newItem]);
  }

  function removeItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default TodoList;