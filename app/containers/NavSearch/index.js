import React from 'react';
import Autocomplete from 'react-autocomplete';

class NavSearch extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  requestAutocomplete() {
  }

  render() {
    return (
      <Autocomplete
        inputProps={{ id: 'search-keyword' }}
        onChange={this.requestAutocomplete}
      />
    );
  }
}

export default NavSearch;
