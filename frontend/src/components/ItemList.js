import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const ItemList = () => {
  const {
    items,
    deleteItem,
    setEditItem
  } = useContext(ItemContext);

  return (
    <div>
      <h2>Inventory Items</h2>
      {items.length === 0 && <p>No items found.</p>}
      {items.map((item) => (
        <div key={item._id} className="inventory-item">
          <p><strong>{item.itemName}</strong> ({item.category})</p>
          <p>Qty: {item.quantity} | Price: ₹{item.price}</p>
          <p>{item.description}</p>
          <button onClick={() => setEditItem(item)}>Edit</button>
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
