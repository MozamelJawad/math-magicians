import { useEffect, useState } from 'react';
import './FetchQuote.css';

function FetchQuote() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const resolve = await fetch('https://api.api-ninjas.com/v1/quotes?category=knowledge',
          {
            headers: {
              'X-Api-Key': '476+9P1rky6YsqQDf9Vebg==WqOKwOOZN6rs7DPW',
            },
          });
        if (resolve.ok) {
          const result = await resolve.json();
          setData(result);
        } else {
          setError('Error Occur,failed to fetch data');
        }
      } catch (error) {
        setError('Error Occur, failed to fetch data');
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="quoteContainer">
      { error ? 'Error occur, failed to fetch data' : null }
      {loading
        ? (<p className="loading">Loading... </p>) : (
          <p className="mainQuote">
            {data.map((item) => (
              `${item.quote} "${item.author}"`
            ))}
          </p>
        )}
    </div>
  );
}

export default FetchQuote;
