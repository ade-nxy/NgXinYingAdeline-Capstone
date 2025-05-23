import { useEffect, useState } from 'react';

const StockList = ({ stocks }) => {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(false);
  const [latestError, setLatestError] = useState(null);

  useEffect(() => {
    if (stocks.length === 0) return;

    const fetchPrices = async () => {
      setLoading(true);
      const updated = {};
      let inputerror = null;

      for (const stock of stocks) {
        try {
          const res = await fetch(
            //`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.symbol}&apikey=ISQWZPK4IU59D3F8`
          );
          const data = await res.json();
          const price = parseFloat(data['Global Quote']?.['05. price']);
          if (!isNaN(price)) {
            updated[stock.symbol] = price;
          } else {
            inputerror = stock.symbol;
          }
        } catch (err) {
          inputerror = stock.symbol;
        }
      }
      
      if (inputerror){
        alert(`This stock symbol does not exist: ${inputerror}`);
      }

      setPrices(updated);
      setLoading(false);
    };

    fetchPrices();
  }, [stocks]);

  if (stocks.length === 0) return <p>No stocks added yet.</p>;

  return (
    <table className="dashboard-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Purchase Price</th>
          <th>Current Price</th>
          <th>Profit / Loss</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock) => {
          const current = prices[stock.symbol];

          if (current === undefined) {
            return null;
          }

          const profit =
            typeof current === 'number' && !isNaN(current)
                ? ((current - stock.purchaseprice) * stock.quantity).toFixed(2)
                : null;

          return (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.quantity}</td>
              <td>${stock.purchaseprice.toFixed(2)}</td>
              <td>
                {typeof current === 'number' && !isNaN(current)
                    ? `$${current.toFixed(2)}`
                    : 'Loading...'}
              </td>

              <td
                style={{ color: profit >= 0 ? 'green' : 'red' }}
              >
                {profit !== null ? `$${profit}` : '...'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StockList;
