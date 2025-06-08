import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ItemContext = createContext();

// ✅ Replace this with your live Render backend API
const API_BASE_URL = 'https://inventory-management-whizlabs.onrender.com/items';

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  // Read all
  const fetchItems = async () => {
    try {
      const res = await axios.get(API_BASE_URL);
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Add or Update
  const saveItem = async (item) => {
    try {
      if (editItem) {
        await axios.put(`${API_BASE_URL}/${editItem._id}`, item);
        setEditItem(null);
      } else {
        await axios.post(API_BASE_URL, item);
      }
      fetchItems();
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  // Delete
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <ItemContext.Provider value={{ items, setItems, fetchItems, editItem, setEditItem, saveItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};
