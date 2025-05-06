import { useState } from 'react';

function StockForm ({ onAddStock }) {

    const [symbol, setSymbol] = useState('');
    const [quantity, setQuantity] = useState('');
    const [purchaseprice, setPurchasePrice] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
    
      onAddStock ({
        symbol: symbol.toUpperCase(),
        quantity: parseInt(quantity),
        purchaseprice: parseFloat(purchaseprice),
      });
      
      setSymbol('');
      setQuantity('');
      setPurchasePrice('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder= "Stock Symbol"
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            placeholder= "Quantity"
            type="number"    
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </div>
        <div>
          <input
            placeholder= "Purchase Price ($)"
            type="number"
            value={purchaseprice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            step="0.01"
            required
          />
        </div>
        <button type="submit">Add Stock</button>
      
      </form>
    );
  };
  
  export default StockForm;