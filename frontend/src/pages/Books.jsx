import { useEffect, useState } from 'react';
import axios from 'axios';
import ShowBooks from '../components/showBooks';

const Books = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchAllBooks = async () => {
      try {
        await axios
          .get('http://localhost:8800/books')
          .then((res) => {
            setLoading(false);
            setData(res.data);
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-7xl w-full'>
        {!loading && <ShowBooks data={data} />}
      </div>
    </div>
  );
};

export default Books;
