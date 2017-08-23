import React,{Component} from 'react'
import {
    View ,
    Text ,
    StyleSheet ,
    TextInput
} from 'react-native' 

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            txtcolor:''
        }
        this.submit = this.submit.bind(this)
    }

    submit(){
        this.props.newcolor(this.state.txtcolor.toLowerCase())
        this.setState({
            txtcolor: ''
        })
    }


    render(){
        return(
            <View style={styles.container} >
                <TextInput style={styles.txtinput} 
                value = {this.state.txtcolor}
                placeholder='Enter a Color...' onChangeText={(txtcolor)=> this.setState({txtcolor})} />
                <Text style={styles.button} onPress={this.submit
                } >Add</Text>
            </View>
        )
    }

}


Form.propTypes = {
    newcolor: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row' ,
        justifyContent:'space-around' ,
        backgroundColor : 'lightgrey',
        height: 70,
        paddingTop:25
    },
    txtinput:{
        flex: 1,
        margin: 5 ,
        padding:5 ,
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 5 ,
        backgroundColor: 'snow'
    },
    button: {
        backgroundColor: 'darkblue' ,
        margin: 5,
        padding: 5 ,
        alignItems:'center' ,
        justifyContent:'center',
        color:'white',
        fontSize: 20
    }

})