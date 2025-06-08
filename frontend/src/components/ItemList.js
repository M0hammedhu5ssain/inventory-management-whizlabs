import React, { useContext } from 'react';
import axios from 'axios';
import { ItemContext } from '../context/ItemContext';

const ItemList = () => {
  const {
    items,
    fetchItems,
    setEditItem,
    setViewItem
  } = useContext(ItemContext);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      fetchItems();

      // ✅ Scroll to top after delete
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {
      console.error('Error deleting item:', err.message);
    }
  };

  return (
    <div>
      <h2>Inventory Items</h2>
      {items.map((item) => (
        <div key={item._id} className="inventory-item">
          <p><strong>{item.itemName}</strong> ({item.category})</p>
          <p>Qty: {item.quantity} | Price: ₹{item.price}</p>
          <p>{item.description}</p>

          <button onClick={() => setViewItem(item)}>View</button>
          <button onClick={() => setEditItem(item)}>Edit</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
