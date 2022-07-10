import { useState, useEffect } from 'react';

function CoinTracker() {
  const [isLoading, setIsLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(jsonData => {
        setCoinList(jsonData);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Coin Tracker! ({coinList.length})</h1>
      {isLoading ? <strong>Loading...</strong> : null}

      <ul>
        {coinList.map(item => (
          <li key={item.id}>
            {item.name} ({item.symbol}): {item.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </>
  );
}

export default CoinTracker;
