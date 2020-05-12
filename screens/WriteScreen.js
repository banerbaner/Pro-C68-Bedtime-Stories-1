import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class WriteScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WriteScreen</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputBox}
            placeholder='Write Here'
            multiline
            editable
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, inputView: {
    flexDirection: 'row',
    margin: 20,
  },
  inputBox: {
    width: 300,
    height: 500,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
});