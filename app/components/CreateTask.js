import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';
var t = require('tcomb-form-native');
var Form = t.form.Form;

import styles from '../styles/styles';

var Task = t.struct({
  name: t.String,
  email: t.String,
  title: t.String,
});

export default class CreateTask extends Component {
  onPress() {
  let value = this.refs.form.getValue();
    if (value) {
      let task = {
        name: value.name,
        email: value.email,
        title: value.title
      };
      this.props.createTask(task);
      this.props.navigator.pop();
    }
  }

  render() {
    return (
      <View style={ styles.form }>
        <Form
          ref="form"
          type={Task}
        />
        <TouchableHighlight style={styles.createTaskButton} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
