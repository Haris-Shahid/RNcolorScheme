import React from 'react'
import { StyleSheet, ListView ,Text ,AsyncStorage } from 'react-native' 

import Button from './button'
import Form from './form'


export default class ColorList extends React.Component {
 static navigationOptions = {
     title : 'Available Colors'
 }
 
    constructor(){
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1 , r2) => r1 !== r2 
    })
    const colors = ['red']
    this.state = {
      colors,
      dataSource : this.ds.cloneWithRows(colors)
    }
    this.newColor = this.newColor.bind(this) 
  }  

  componentDidMount(){
    AsyncStorage.getItem(
      '@ColorListStore:Colors',
      (err , data ) => {
        if (err){
          console.error('Error Loading Colors', err)
        } else {
          const color = JSON.parse(data) ;
          this.setState({
            color ,
            dataSource: this.ds.cloneWithRows(color)
          })
        }
      }
    )
  }

savecolor(colors){
  AsyncStorage.setItem(
    '@ColorListStore:Colors',
    JSON.stringify(colors)
  )
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
  this.savecolor(colors)
}

  render() {
    const { navigate } = this.props.navigation ;
    const {backgroundColor , dataSource} = this.state ;
    return (
      <ListView style={[styles.container , {backgroundColor}]}
        dataSource={dataSource} 
        renderRow={(color) => (
          <Button backgroundColor={color} onSelect={() => navigate('Details' , {color}) } />
        )}
        renderHeader={()=>(
          <Form newcolor = {this.newColor} />
        )} >
          
      </ListView>
    );
  }
}

ColorList.defaultProps = {
    onColorSelected : f => f
}

ColorList.protoTypes = {
    onColorSelected: React.PropTypes.func
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
