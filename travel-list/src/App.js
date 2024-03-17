import React from 'react';
import { useState } from 'react';


// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);  // spread operator... update the array with the new item
  }

  function handleDeleteItems(id) {
    console.log('Delete item id: ', id);
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItems(id) {
    console.log('Toggle item id: ', id);
    setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to clear the list?');
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <h1>Travel List</h1> 
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} 
        onToggleItems={handleToggleItems} onClearList={handleClearList}/>
      <Stats items={items} />
    </div>    
  );
}

function Logo() {
  return <h1>🌴 Get away, Far away 🧳</h1>
}

function Form({ onAddItems }) {
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

    const newItem = {description, quantity, packed: false, id: Date.now()};
    console.log(newItem);

    onAddItems(newItem);

    // reset the form once add is complete
    setDescription("");
    setQuantity(1);
  }

  return (
  <form className='add-form' onSubmit={handleSubmit}>
    <h3>Things needed for the trip!!!</h3>
    <select value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))}>
      {Array.from({ length: 20 }, (_, i) => i+1).map
        ((num)=> ( 
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

function PackingList({ items, onDeleteItems, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));

  if(sortBy==="packed") sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul> 
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} key={item.id}/>
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by item description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>);
}

function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input type='checkbox' value={item.packed} onChange={() => onToggleItems(item.id)}/>
      <span style={item.packed ? { textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description} 
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>);
}

function Stats({ items }) {
  if(!items.length)
    return (
      <p className='stats'>
        <em>No items in the list, start by adding some items to your packing list.</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats"> 
      <em>
        {percentage === 100 
          ? "You are all packed and ready to go!!!"
          : `You have ${numItems} items on your list, and you have packed ${numPacked} items ${percentage}%`
        }
      </em>
    </footer>);
}
