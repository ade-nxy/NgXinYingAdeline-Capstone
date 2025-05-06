import { useState } from 'react'
import './App.css';
import StockForm from './stockform';

function App() {
  const [stocks, setStocks] = useState([]);

  const handleAddStock = (stock) => {
    setStocks((prevStocks) => [...prevStocks, stock]);
  }

  return (
    <>
      <div>
        <h1>Finance Dashboard</h1>
        <StockForm stockPurchase = {handleAddStock} />

        <h2>Stock List</h2>
        <p>No stocks added yet</p>
      </div>

    </>
  )
}

export default App
