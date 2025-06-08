import React, { useContext, useRef, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { ItemProvider, ItemContext } from './context/ItemContext';
import './App.css';

function AppContent() {
  const { viewItem, setViewItem } = useContext(ItemContext);
  const viewRef = useRef(); // ✅ Ref to scroll to view section

  useEffect(() => {
    if (viewItem && viewRef.current) {
      viewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [viewItem]);

  return (
    <div className="App">
      <h1>Inventory Management System</h1>

      {/* View Item Section */}
      {viewItem && (
        <div ref={viewRef} className="inventory-item" style={{ backgroundColor: "#e8f5e9" }}>
          <h3>Viewing Item: {viewItem.itemName}</h3>
          <p><strong>Quantity:</strong> {viewItem.quantity}</p>
          <p><strong>Price:</strong> ₹{viewItem.price}</p>
          <p><strong>Description:</strong> {viewItem.description}</p>
          <p><strong>Category:</strong> {viewItem.category}</p>
          <button onClick={() => setViewItem(null)} style={{ marginTop: '10px' }}>
            Clear View
          </button>
        </div>
      )}

      <ItemForm />
      <ItemList />
    </div>
  );
}

function App() {
  return (
    <ItemProvider>
      <AppContent />
    </ItemProvider>
  );
}

export default App;
