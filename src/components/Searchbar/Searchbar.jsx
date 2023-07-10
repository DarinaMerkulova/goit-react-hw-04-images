import { CgSearch } from 'react-icons/cg';
import PropTypes from 'prop-types'
import {useState } from 'react';
import {
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchInput,
  StyledSearchbar,
} from './Searchbar.styled';

export const SearchBar =({onSubmit}) => { 
  const [value, setValue] = useState ('')
  
  const handleInputChange = ({ target }) => {
    setValue(target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

   return (
      <div>
        <StyledSearchbar>
          <StyledSearchForm onSubmit={handleSubmit}>
            <StyledSearchFormButton type="submit">
              <CgSearch size="1.5em" />
            </StyledSearchFormButton>

            <StyledSearchInput
              name="title"
              type="text"
              autocomplete="off"
              placeholder="Search images and photos"
              value={value}
              onChange={handleInputChange}
            />
          </StyledSearchForm>
        </StyledSearchbar>
      </div>
    );
  }
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};