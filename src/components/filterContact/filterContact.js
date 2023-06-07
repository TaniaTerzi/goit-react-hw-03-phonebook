import PropTypes from 'prop-types';

const Filter = ({ value, filterChanger }) => {
  return (
    <div >
      <p >Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={filterChanger}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filterChanger: PropTypes.func.isRequired,
};