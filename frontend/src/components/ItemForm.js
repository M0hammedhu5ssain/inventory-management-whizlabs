import React, { useState, useContext, useEffect } from 'react';
import { ItemContext } from '../context/ItemContext';

const ItemForm = () => {
  const { editItem, saveItem } = useContext(ItemContext);

  const [item, setItem] = useState({
    itemName: '',
    quantity: '',
    price: '',
    description: '',
    category: ''
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (editItem) {
      setItem(editItem);
    }
  }, [editItem]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveItem(item);

    setMessage(editItem ? 'Item updated successfully ✅' : 'Item added successfully ✅');

    setItem({
      itemName: '',
      quantity: '',
      price: '',
      description: '',
      category: ''
    });

    // Auto-hide message after 2 seconds
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div>
      {message && (
        <div style={styles.popup}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input name="itemName" value={item.itemName} onChange={handleChange} placeholder="Item Name" required />
        <input name="quantity" type="number" value={item.quantity} onChange={handleChange} placeholder="Quantity" required />
        <input name="price" type="number" value={item.price} onChange={handleChange} placeholder="Price" required />
        <input name="description" value={item.description} onChange={handleChange} placeholder="Description" />
        <input name="category" value={item.category} onChange={handleChange} placeholder="Category" />
        <button type="submit">{editItem ? 'Update' : 'Add'} Item</button>
      </form>
    </div>
  );
};

export default ItemForm;

// ✅ Simple popup style
const styles = {
  popup: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#27ae60',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    zIndex: 999,
    fontWeight: 'bold',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)'
  }
};
