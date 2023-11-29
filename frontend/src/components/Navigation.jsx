import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='flex justify-between py-2 px-4 items-center'>
      <Link to={'/'}>
        <h1>Home</h1>
      </Link>

      <div className='nav--links flex gap-4 text-xl'>
        <Link className='py-2 px-4 rounded hover:bg-gray-200' to={'/books'}>
          Books
        </Link>
        <Link className='py-2 px-4 rounded hover:bg-gray-200' to={'/add'}>
          Add Book
        </Link>
        <Link className='py-2 px-4 rounded hover:bg-gray-200' to={'/update'}>
          Update Book
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
