import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    cover: '',
    price: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit');
    try {
      const response = await axios.post('http://localhost:8800/books', book, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Server response:', response);
      console.log('submitting...');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  console.log(book);

  return (
    <div className='w-full flex flex-col justify-center text-xl'>
      <div className='max-w-5xl w-full mx-auto flex flex-col gap-6'>
        <h2 className='text-center'>Add New Book</h2>
        <form className='form flex flex-col justify-center items-center gap-4 w-full'>
          <input
            type='text'
            placeholder='title'
            name='title'
            onChange={handleChange}
            className='border-2 border-gray-300 border-solid rounded focus:border-gray-600 outline-none w-full max-w-lg'
          />
          <input
            type='text'
            placeholder='desc'
            name='desc'
            onChange={handleChange}
            className='border-2 border-gray-300 border-solid rounded focus:border-gray-600 outline-none w-full max-w-lg'
          />
          <input
            type='number'
            placeholder='price'
            name='price'
            onChange={handleChange}
            className='border-2 border-gray-300 border-solid rounded focus:border-gray-600 outline-none w-full max-w-lg'
          />
          <input
            type='text'
            placeholder='cover'
            name='cover'
            onChange={handleChange}
            className='border-2 border-gray-300 border-solid rounded focus:border-gray-600 outline-none w-full max-w-lg'
          />
          <input
            type='submit'
            onClick={handleSubmit}
            value={'Submit'}
            className='cursor-pointer px-8 py-2 hover:bg-gray-300 bg-gray-200 rounded'
          />
        </form>
      </div>
    </div>
  );
};

export default Add;
