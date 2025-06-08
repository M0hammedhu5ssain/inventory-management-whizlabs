import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [viewItem, setViewItem] = useState(null); // ✅ NEW STATE for View

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/items');
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching items:', err.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <ItemContext.Provider
      value={{
        items,
        setItems,
        fetchItems,
        editItem,
        setEditItem,
        viewItem,          // ✅ ADD TO CONTEXT
        setViewItem        // ✅ ADD TO CONTEXT
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
