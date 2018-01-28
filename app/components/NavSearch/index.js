/**
*
* NavSearch
*
*/

import React from 'react';
// import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';

class NavSearch extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  requestAutocomplete(value) {
    console.log(value);
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
