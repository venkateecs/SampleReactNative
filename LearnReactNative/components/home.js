import React,{Component} from 'react' ;
import {View,Text} from 'react-native' ; 

class Home extends Component { 
    render() {
      console.log(this.props);  
        return (
            <View> 
                <Text> 
                    This is Home Page {this.props.navigation.state.params.paramName}
                </Text>
            </View>
        )
    }
}

export default Home;