import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ItemContext = createContext();

// ✅ LIVE BACKEND API URL
const API_BASE_URL = 'https://inventory-management-whizlabs.onrender.com/items';

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [viewItem, setViewItem] = useState(null); // Optional: for view-only logic

  // ✅ Fetch all items
  const fetchItems = async () => {
    try {
      const res = await axios.get(API_BASE_URL);
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching items:', err.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // ✅ Save (Add or Update) item
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
      console.error('Error saving item:', error.message);
    }
  };

  // ✅ Delete item
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        setItems,
        fetchItems,
        editItem,
        setEditItem,
        viewItem,
        setViewItem,
        saveItem,
        deleteItem
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
