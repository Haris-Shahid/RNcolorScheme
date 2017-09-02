import React from 'react'

import {
  StyleSheet,
  AppRegistry,
  View,
  Text
} from 'react-native'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>[TODO: Insert Image]</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('SampleApp', () => App)
