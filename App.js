import React from 'react'
import { Text } from 'react-native'
import ColorList from './component/colorlist'
import ColorInfo from './component/colorinfo'


import { StackNavigator } from 'react-navigation'

const App = StackNavigator({
  Home: { screen : ColorList } ,
  Details : { screen: ColorInfo }
})