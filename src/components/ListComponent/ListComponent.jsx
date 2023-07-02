import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from '../../redux/selector.js';
import { deleteContact } from '../../redux/Operation.js';

import React from 'react';
import propTypes from 'prop-types';
import css from 'components/ListComponent/ListComponent.module.css';

export const ListComponent = () => {
  const dispatch = useDispatch();

  const contact = useSelector(selectContacts);
  const contactFilter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visiblesContact = contact
    .filter(contact =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    )
    .sort((firstName, secondName) =>
      firstName.name.localeCompare(secondName.name)
    );

  return (
    <div>
      <div className={css.loader}>
        {isLoading && !error && (
          <TailSpin
            height="50"
            width="50"
            color="#575859"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </div>
      <ul>
        {visiblesContact.map(({ name, number, id }) => {
          return (
            <li key={id} className={css.contactList}>
              {name} : {number}
              <button
                className={css.btnContactList}
                onClick={() => dispatch(deleteContact(id))}
              >
                ╳
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
ListComponent.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDeleteContact: propTypes.func,
};
export default ListComponent;
