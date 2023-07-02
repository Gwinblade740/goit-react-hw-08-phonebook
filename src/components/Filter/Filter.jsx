import React from 'react';
import { useDispatch } from 'react-redux';
import css from 'components/Filter/Filter.module.css';
import propTypes from 'prop-types';
import { filterContact } from '../../redux/FilterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = evt => {
    dispatch(filterContact(evt.target.value));
  };
  return (
    <div>
      <label className={css.filterLabel} htmlFor="filter">
        Find contacts by name{' '}
      </label>
      <input
        onChange={handleChange}
        type="text"
        name="filter"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
