import PropTypes from 'prop-types';

const ShowBooks = ({ data }) => {
  return (
    <>
      {data &&
        data.map((value, index) => {
          return <h1 key={value.id}>{value.title}</h1>;
        })}
    </>
  );
};

ShowBooks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ShowBooks;
