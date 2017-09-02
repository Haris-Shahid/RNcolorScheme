import React from 'react'

import {
  StyleSheet,
  AppRegistry,
  View,
  Text,
  StatusBar
} from 'react-native'

class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>Sierra</Text>
        <Text style={[styles.defaultText,styles.selectedText]}>
          Tanner
        </Text>
        <Text style={styles.defaultText}>Travis</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black'
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  }
})

AppRegistry.registerComponent('SampleApp', () => App)
