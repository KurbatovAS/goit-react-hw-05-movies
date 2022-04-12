import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {
  Container,
  SearchForm,
  SearchFormButton,
  IconBtn,
  SearchFormInput,
} from './Searchbar.styled';

function Searchbar({ searchHandler }) {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = e => setInputValue(e.target.value.toLowerCase());

  const formSubmitHandler = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return toast.error('Enter your request, please');
    }

    searchHandler(inputValue);
    setInputValue('');
  };

  return (
    <>
      <Container>
        <SearchForm onSubmit={formSubmitHandler}>
          <SearchFormButton type="submit">
            <IconBtn />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="searchInput"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={inputValue}
            onChange={inputChangeHandler}
          />
        </SearchForm>
      </Container>
    </>
  );
}

Searchbar.propTypes = {
  searchHandler: PropTypes.func.isRequired,
};

export default Searchbar;
