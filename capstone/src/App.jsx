import { useState } from 'react';
import StockForm from './stockform.jsx';
import StockList from './stocklist.jsx';
import './App.css';

function App() {
  const [stocks, setStocks] = useState([]);

  const addStock = (newStock) => {
    setStocks((prev) => [...prev, newStock]);
  };

  return (
    <div className="App">
      <h1>Finance Dashboard</h1>
      <StockForm onAddStock={addStock} />
      
      <h2>Stock List</h2>
      <StockList stocks={stocks} />
    </div>
  );
}

export default App;
