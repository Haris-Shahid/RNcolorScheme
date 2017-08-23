import React from 'react'
import { StyleSheet, Text, View ,TouchableHighlight } from 'react-native'

const Button = ({backgroundColor,onSelect = f => f }) => (
  // f => f it is a call back function prevent to crash on onclick 
    <TouchableHighlight onPress = {()=> onSelect(backgroundColor)} underlayColor='orange' style = {styles.button} >  
        <View style = {styles.row} >
            <View style = {[styles.circle,{backgroundColor}]} ></View>
            <Text style= {styles.text} >{backgroundColor} </Text>
        </View>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
  row : {
    flexDirection : 'row' ,
    alignItems : 'center',
    padding : 5 
  },
  circle : {
    width : 20 ,
    height : 20 ,
    margin: 5 ,
    borderRadius : 10  
  },
  text : {
    fontSize : 30 ,
    margin : 5 
  },
  button : {
    borderWidth : 2 ,
    borderRadius : 10 ,
    alignSelf : 'stretch' ,
    margin : 10 ,
    backgroundColor: 'rgba(255,255,255,.8)' 
  }
  
});

export default Button ;