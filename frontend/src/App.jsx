import axios from 'axios';
import { useEffect, useState } from 'react';
import ShowBooks from './components/showBooks';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8800/books')
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>{!loading && <ShowBooks data={data} />}</div>
    </>
  );
}

export default App;
