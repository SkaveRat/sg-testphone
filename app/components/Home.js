import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from './Home.css';
import RaisedButton from 'material-ui/RaisedButton';

import {actions as contactActions} from '../actions/contacts';

const mapStateToProps = (state, ownProps) => ({
    contacts: state.contacts,
});

export class Home extends React.Component {

    state = {
        foo: 'bar'
        }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
            <RaisedButton label="Default" onTouchTap={this.handleClick} />
        </div>
      </div>
    );
  }


    handleClick() {
        this.setState({foo: 'BAZ'})
    }
}
export default connect(mapStateToProps,
	{
		...contactActions,
	})(Home);