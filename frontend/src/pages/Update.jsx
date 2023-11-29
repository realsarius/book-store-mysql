import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    cover: '',
    price: null,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split('/')[2];

  useEffect(() => {
    const fillBookInfo = async () => {
      try {
        await axios
          .get(`http://localhost:8800/books/${bookId}`)
          .then((res) => {
            const data = {
              title: res.data[0].title,
              desc: res.data[0].desc,
              cover: res.data[0].cover,
              price: res.data[0].price,
            };
            setBook({
              title: data.title,
              desc: data.desc,
              cover: data.cover,
              price: data.price,
            });
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    fillBookInfo();
  }, [bookId]);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit');
    try {
      const response = await axios.put(
        `http://localhost:8800/books/${bookId}`,
        book,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Server response:', response);
      console.log('submitting...');
      navigate('/books');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-full flex flex-col justify-center text-xl'>
      <div className='max-w-5xl w-full mx-auto flex flex-col gap-6'>
        <h2 className='text-center'>Update New Book</h2>
        <form className='form flex flex-col justify-center items-center gap-4 w-full'>
          <input
            type='text'
            placeholder='title'
            name='title'
            value={book.title}
            onChange={handleChange}
            className='border-2 border-gray-300 border-solid rounded focus:border-gray-600 outline-none w-full max-w-lg py-1 px-2'
          />
          <input
            type='text'
            placeholder='desc'
            name='desc'
            value={book.desc}
            onChange={handleChange}
            className='border-2 border-gray-300 border-solid rounded focus:border-gray-600 outline-none w-full max-w-lg py-1 px-2'
          />
          <input
            type='number'
            placeholder='price'
            name='price'
            value={book.price}
            onChange={handleChange}
            className='border-2 border-gray-300 border-solid rounded focus:border-gray-600 outline-none w-full max-w-lg py-1 px-2'
          />
          <input
            type='text'
            placeholder='cover'
            name='cover'
            value={book.cover}
            onChange={handleChange}
            className='border-2 border-gray-300 border-solid rounded focus:border-gray-600 outline-none w-full max-w-lg py-1 px-2'
          />
          <input
            type='submit'
            onClick={handleSubmit}
            value={'Update'}
            className='cursor-pointer px-8 py-2 hover:bg-gray-300 bg-gray-200 rounded outline-slate-300 outline-2 outline'
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
