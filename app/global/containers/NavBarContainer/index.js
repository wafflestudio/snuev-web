/*
 *
 * NavBarContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Creators as Actions } from '../../reducer';

import NavBar from '../../../components/NavBar/index';

export class NavBarContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.navBarOnSubmit = this.navBarOnSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  navBarOnSubmit(event) {
    event.preventDefault();
    console.log('submit');
    this.props.navBarFetchRequest(this.state.query);
  }

  render() {
    return (
      <NavBar
        query={this.state.query}
        handleChange={this.handleChange}
        navBarOnSubmit={this.navBarOnSubmit}
      />
    );
  }
}

NavBarContainer.propTypes = {
  navBarFetchRequest: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   NavBarContainer: makeSelectNavBarContainer(),
// });

function mapDispatchToProps(dispatch) {
  return {
    navBarFetchRequest: (data) => dispatch(Actions.navBarContainerRequest(data)),
  };
}

export default connect(null, mapDispatchToProps)(NavBarContainer);
