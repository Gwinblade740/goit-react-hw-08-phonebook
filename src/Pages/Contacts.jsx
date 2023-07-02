import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormComponent } from '../components/FormComponent/FormComponent';
import { ListComponent } from '../components/ListComponent/ListComponent';
import { Filter } from '../components/Filter/Filter';
import { fetchContacts } from '../redux/Operation';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <FormComponent />
      <Filter />
      <ListComponent />
    </>
  );
};
export default MainPage;
