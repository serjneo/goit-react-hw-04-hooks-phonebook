import './Filter.scss';
import PropTypes from 'prop-types';

function Filter({ value, onChange }) {
    return (
        <input className="input" type="text" name="filter" onChange={onChange} value={value}
        placeholder="search contact"></input>
    )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;