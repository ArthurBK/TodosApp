import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  newTaskButton: {
    backgroundColor: '#2980b9',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  newText: {
    color: 'white',
    fontWeight: 'bold',
  },

  settings: {
    alignSelf: 'flex-end',
    paddingTop: 20,
  },

  form: {
    flex: 1,
    paddingTop: 20,
  },

  buttonText: {
    backgroundColor: "#2980b9",
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  }

});
