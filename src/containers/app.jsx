import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { users, roles, projects } from '../services/authentication';
import Login from './login';
import Signup from './signup';
import localStorageService from '../services/localStorage';
import { AUTH_CONSTANTS } from '../reducers/auth';
import Logout from './logout';
import Dashboard from './dashboard';
import { Sidebar } from '../components/sidebar';
import Configuration from './configuration';
import History from './history';
import Result from './result';

export default class App extends React.Component {

  componentDidMount() {
    users()
    .then(({ data }) => {
      console.log(data);
    });

    roles()
    .then(({ data }) => {
      console.log(data);
    });

    projects()
    .then(({ data }) => {
      console.log(data);
    })
  }

  render () {
    return (
      <div>
        <select name="select">
          <option value="value1">Value 1</option> 
          <option value="value2" selected>Value 2</option>
          <option value="value3">Value 3</option>
        </select>
      </div>
    )
  }
}