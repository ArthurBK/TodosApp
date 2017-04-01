import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../styles/styles';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around'
     }}>
        <View style={{ flex: 1 }}>
            <Text style={ styles.settings }> Settings </Text>
          <View style={{ flex: 1 }}>
          </View>
        </View>
        <View style={{ }}>
        <TouchableHighlight style={ styles.newTaskButton }>
          <Text style={ styles.newText}>New to do</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
