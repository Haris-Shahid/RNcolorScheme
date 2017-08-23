import React from 'react'
import { StyleSheet, ListView ,Text } from 'react-native' 

import Button from './component/button'
import Form from './component/form'


export default class App extends React.Component {
  constructor(){
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1 , r2) => r1 !== r2 
    })
    const colors = ['red','orange','yellow']
    this.state = {
      backgroundColor : 'blue',
      colors,
      dataSource : this.ds.cloneWithRows(colors)
    }
    this.change = this.change.bind(this) 
    this.newColor = this.newColor.bind(this) 
  }  


  change(backgroundColor){
    this.setState({backgroundColor})
  }
newColor(backgroundColor){
  const colors = [
    ...this.state.colors,
    backgroundColor
  ]
  this.setState({
    colors,
    dataSource: this.ds.cloneWithRows(colors)
  })
}

  render() {
    const {backgroundColor , dataSource} = this.state ;
    return (
      <ListView style={[styles.container , {backgroundColor}]}
        dataSource={dataSource} 
        renderRow={(color) => (
          <Button backgroundColor={color} onSelect={this.change} />
        )}
        renderHeader={()=>(
          <Form newcolor = {this.newColor} />
        )} >
          
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 
  },
  header : {
    backgroundColor:'lightgrey',
    paddingTop: 30 ,
    padding : 10 ,
    fontSize:30 ,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
