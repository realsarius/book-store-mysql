import PropTypes from 'prop-types';

const ShowBooks = ({ data }) => {
  return (
    <div className='w-full grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4'>
      {data &&
        data.map((value) => {
          return (
            <div
              key={value.index}
              className='border-2 border-solid border-red-400 rounded flex flex-col gap-4 py-2 px-4'
            >
              <img src={value.cover} alt={`${value.title}-cover-image`} />
              <h1 className='text-2xl text-center'>{value.title}</h1>
              <p>{value.desc}</p>
              <p>Price: {value.price}</p>
            </div>
          );
        })}
    </div>
  );
};

ShowBooks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ShowBooks;
