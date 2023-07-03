import { CgSearch } from 'react-icons/cg';
import PropTypes from 'prop-types'
import { Component } from 'react';
import {
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchInput,
  StyledSearchbar,
} from './Searchbar.styled';

export class SearchBar extends Component {
  state = { value: '' };

  handleInputChange = ({ target }) => {
    // console.log(event.target.value);
    this.setState({
      value: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const value = this.state.value;
    this.props.onSubmit(value);
  };

  render() {
    return (
      <div>
        <StyledSearchbar>
          <StyledSearchForm onSubmit={this.handleSubmit}>
            <StyledSearchFormButton type="submit">
              <CgSearch size="1.5em" />
            </StyledSearchFormButton>

            <StyledSearchInput
              name="title"
              type="text"
              autocomplete="off"
              placeholder="Search images and photos"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </StyledSearchForm>
        </StyledSearchbar>
      </div>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};