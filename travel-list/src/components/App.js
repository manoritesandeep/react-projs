import React from 'react';
import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';


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


