import React,{Component} from 'react';
import {View,Text,Button} from 'react-native' ;
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {
   constructor(props) {
      super(props);
   } 
   goToHome() {
    Actions.Home()
   }
    render() {
        //console.log(this.props.navigation)
        return(
            <View>
                <Text>
                    This is Login Page test
                </Text>
                <Button onPress={() => this.props.navigation.navigate('HomeScreen',{paramName: 'Test Param value'})} title="Go to Home"/>
            </View>    
        )
    }
}