import React, { useState } from 'react';

function StockForm ({stockPurchase}) {

    const [symbol, setSymbol] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    //Move the stock creation and state updates into the handleSubmit function, so they only run when the form is submitted:
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const newStock = {
        symbol: symbol.toUpperCase(),
        quantity: parseInt(quantity),
        price: parseFloat(price),
      };
      
      stockPurchase(newStock);
      setSymbol('');
      setQuantity('');
      setPrice('');
    }
  
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            required
          />
        </div>
        <button type="submit">Add Stock</button>
      
      </form>
    );
  };
  
  export default StockForm;