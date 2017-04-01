import React, { Component } from 'react';
import {
  ListView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../styles/styles';

export default class TasksList extends Component {
  // constructor(props) {
  //   super(props);
  //   let ds = new ListView.DataSource({
  //     rowHasChanged: (row1, row2) => row1 !== row2,
  //   });
  //   this.state = {
  //     dataSource: ds.cloneWithRows(this.props.tasks),
  //   };
  // }

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  renderRow(rowData, sectionID, rowID) {
    console.log(rowData)
    return (
      <View style={ styles.taskItem }>
        <Text>{ rowData.title }</Text>
      </View>
    );
  }

  render() {
    var dataSource = this.dataSource.cloneWithRows(this.props.tasks);
    return (
      <ListView
        dataSource={ dataSource }
        renderRow={ this.renderRow.bind(this) }
        style={styles.listView}
        enableEmptySections
      />
    );
  }
}
