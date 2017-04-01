import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../styles/styles';

export default class ResetApp extends Component {
  onPress() {
    this.props.deleteAllTasks()
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={ styles.delete }>
      <View>
        <TouchableHighlight
          style={ styles.deleteAllButton }
          onPress={ this.onPress.bind(this) }
        >
          <Text style={ styles.buttonTextDelete }>Delete all Todos</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}
