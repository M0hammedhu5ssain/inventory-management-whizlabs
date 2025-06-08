import React, { useContext, useState } from 'react';
import { ItemContext } from '../context/ItemContext';

const ItemList = () => {
  const {
    items,
    deleteItem,
    setEditItem,
    setViewItem,
    viewItem
  } = useContext(ItemContext);

  const [message, setMessage] = useState('');

  // ⬆️ Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showPopup = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 2000);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    scrollToTop();
    showPopup('Edit mode activated ✏️');
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    scrollToTop();
    showPopup('Item deleted 🗑️');
  };

  const handleView = (item) => {
    setViewItem(item);
    scrollToTop();
    showPopup('Viewing item 👁️');
  };

  return (
    <div>
      <h2>Inventory Items</h2>

      {message && (
        <div style={styles.popup}>
          {message}
        </div>
      )}

      {items.length === 0 && <p>No items found.</p>}

      {items.map((item) => (
        <div key={item._id} className="inventory-item" style={styles.card}>
          <p><strong>{item.itemName}</strong> ({item.category})</p>
          <p>Qty: {item.quantity} | Price: ₹{item.price}</p>
          <p>{item.description}</p>

          <div style={styles.buttonRow}>
            <button onClick={() => handleView(item)} style={styles.view}>View</button>
            <button onClick={() => handleEdit(item)} style={styles.edit}>Edit</button>
            <button onClick={() => handleDelete(item._id)} style={styles.delete}>Delete</button>
          </div>
        </div>
      ))}

      {viewItem && (
        <div style={styles.viewBox}>
          <h3>📦 Viewing Item Details</h3>
          <p><strong>Name:</strong> {viewItem.itemName}</p>
          <p><strong>Quantity:</strong> {viewItem.quantity}</p>
          <p><strong>Price:</strong> ₹{viewItem.price}</p>
          <p><strong>Description:</strong> {viewItem.description}</p>
          <p><strong>Category:</strong> {viewItem.category}</p>
        </div>
      )}
    </div>
  );
};

export default ItemList;

// ✅ CSS Styles
const styles = {
  popup: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#2ecc71',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    zIndex: 999,
    fontWeight: 'bold',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)'
  },
  card: {
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '10px',
    background: '#f9f9f9'
  },
  buttonRow: {
    marginTop: '10px',
    display: 'flex',
    gap: '10px'
  },
  view: {
    background: '#3498db',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  edit: {
    background: '#f39c12',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  delete: {
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  viewBox: {
    marginTop: '20px',
    padding: '12px',
    background: '#fff5c4',
    borderRadius: '8px',
    border: '1px solid #ffdd57'
  }
};
