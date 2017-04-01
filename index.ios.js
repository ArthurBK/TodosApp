import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import MainPage from './app/components/MainPage';
import styles from './app/styles/styles';

export default class TodosApp extends Component {
  renderScene(route, navigator) {
    if (route.name === 'MainPage') {
      return (
        <MainPage navigator={ navigator }  />
      );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'MainPage' }}
        renderScene={ this.renderScene }
      />
    );
  }
}

AppRegistry.registerComponent('TodosApp', () => TodosApp);
