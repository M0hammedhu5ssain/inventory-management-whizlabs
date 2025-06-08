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
    setItem({
      itemName: '',
      quantity: '',
      price: '',
      description: '',
      category: ''
    });
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
