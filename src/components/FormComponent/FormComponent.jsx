import css from 'components/FormComponent/FormComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selector';
import { addContact } from '../../redux//Operation';
import toast, { Toaster } from 'react-hot-toast';

export const FormComponent = () => {
  const dispatch = useDispatch();
  const stateContacts = useSelector(selectContacts);
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const contact = {
      name: form.name.value,
      number: form.number.value,
    };
    console.log(contact);
    const message = stateContacts.filter(
      contact => contact.name.toLowerCase() === form.name.value.toLowerCase()
    );

    if (message.length !== 0) {
      return (
        toast.error(form.name.value + ' is already in contacts'), form.reset()
      );
    }
    dispatch(addContact(contact));
    form.reset();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name" className={css.labelName}>
          Name:
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number" className={css.labelNumber}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
      <Toaster toastOptions={{ duration: 1500 }} />
    </div>
  );
};
