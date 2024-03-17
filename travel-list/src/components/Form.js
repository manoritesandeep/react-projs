import React from 'react';
import { useState } from 'react';

export default function Form({ onAddItems }) {
  // controlled component
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // moved to parent component as rendiring was in the packing list
  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);  // spread operator... update the array with the new item
  // }
  function handleSubmit(e) {
    e.preventDefault(); //Avoids the page to reload



    // console.log('Form submitted');
    // guard clause
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    // reset the form once add is complete
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>Things needed for the trip!!!</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>);
}
