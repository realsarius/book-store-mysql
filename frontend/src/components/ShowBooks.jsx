import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateBook from '../pages/Update';

const ShowBooks = ({ data }) => {
  const handleDelete = async (id) => {
    try {
      await axios
        .delete(`http://localhost:8800/books/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-3xl text-center'>Books</h1>
      <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-12'>
        {data &&
          data.map((book) => {
            return (
              <div
                key={book.index}
                className='border-2 border-solid border-gray-200 rounded flex flex-col gap-4 py-2 px-4 book'
              >
                <img
                  src={book.cover}
                  alt={`${book.title}-cover-image`}
                  className='w-[200px] h-[300px] object-cover bg-sky-200 mx-auto'
                />
                <h1 className='text-2xl text-center'>{book.title}</h1>
                <p>{book.desc}</p>
                <p>Price: {book.price}</p>
                <Link
                  to={`/update/${book.id}`}
                  className='bg-gray-200 w-auto rounded hover:bg-gray-300 text-center py-1'
                >
                  <button>Update</button>
                </Link>

                <button
                  onClick={() => handleDelete(book.id)}
                  className='bg-red-200 w-auto rounded hover:bg-red-300 py-1'
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

ShowBooks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ShowBooks;
