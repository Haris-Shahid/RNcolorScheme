import React from 'react'

import {
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
        <Text>Sierra</Text>
        <Text>Tanner</Text>
        <Text>Travis</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('SampleApp', () => App)
