import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { ItemContext } from '../context/ItemContext';

const ItemForm = () => {
  const { fetchItems, editItem, setEditItem } = useContext(ItemContext);
  const [item, setItem] = useState({
    itemName: '',
    quantity: '',
    price: '',
    description: '',
    category: ''
  });

  useEffect(() => {
    if (editItem) setItem(editItem);
  }, [editItem]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        await axios.put(`http://localhost:5000/items/${editItem._id}`, item);
        setEditItem(null);
      } else {
        await axios.post('http://localhost:5000/items', item);
      }

      setItem({
        itemName: '',
        quantity: '',
        price: '',
        description: '',
        category: ''
      });

      fetchItems();

      // ✅ Scroll to top after update or add
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {
      console.error('Error submitting form:', err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="itemName" value={item.itemName} onChange={handleChange} placeholder="Item Name" required />
      <input name="quantity" type="number" value={item.quantity} onChange={handleChange} placeholder="Quantity" required />
      <input name="price" type="number" value={item.price} onChange={handleChange} placeholder="Price" required />
      <input name="description" value={item.description} onChange={handleChange} placeholder="Description" />
      <input name="category" value={item.category} onChange={handleChange} placeholder="Category" />
      <button type="submit">{editItem ? 'Update' : 'Add'} Item</button>
    </form>
  );
};

export default ItemForm;
