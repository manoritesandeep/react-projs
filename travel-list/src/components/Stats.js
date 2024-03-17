import React from 'react';

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>No items in the list, start by adding some items to your packing list.</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are all packed and ready to go!!!"
          : `You have ${numItems} items on your list, and you have packed ${numPacked} items ${percentage}%`}
      </em>
    </footer>);
}
