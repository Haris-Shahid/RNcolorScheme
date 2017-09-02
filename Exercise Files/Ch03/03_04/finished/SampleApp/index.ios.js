import React from 'react'

import {
  Dimensions,
  Image,
  StyleSheet,
  AppRegistry,
  View,
  Text
} from 'react-native'

import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={picSierra}>
          <Text style={styles.userName}>Sierra Spencer</Text>
        </Image>
        <Image style={styles.pic} source={picTanner}>
          <Text style={styles.userName}>Tanner McTab</Text>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  pic: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  userName: {
    backgroundColor: 'rgba(0,0,0,.7)',
    fontSize: 30,
    padding: 10,
    color: 'white'
  }
})

AppRegistry.registerComponent('SampleApp', () => App)
