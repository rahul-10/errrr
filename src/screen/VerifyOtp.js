import React, {Component} from  'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';


import InputField from '../component/InputField';

export default class VeriryOtp extends Component {
  constructor(props) {
    super(props);
    nthis = this;
    this.state = {
      otp : '',
      error : '',
      animating:false
    }
  }

  sendOTP(){
    console.log('Otp sent');
    Actions.UserDetails();
  }

  render(){
    const { animating } = this.state;
    return(
      <View style = {styles.container} >
        <View style = {[styles.phoneNumber, {alignItems: 'center'}]}>
          <View style = {{flex: 1}}>
            <Icon size={35} color="#235162" name="md-text" />
          </View>
          <View style = {{flex:5, marginTop:10}} >
            <InputField
                label='Enter OTP'
                highlightColor='#F65E07'
                width = {200}
                height= {80}
                dense = {true}
                secureTextEntry = {false}
                onChangeText={(text) => this.setState({otp: text})}
                value = {this.state.otp}
                keyboardType="numeric"
            />
          </View>
        </View>
        <Button
          raised
          rounded
          onPress={ () => {nthis.setState({animating : true}); this.sendOTP(); } }
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          title={"Verify OTP"}
          loading={animating}
          loadingRight
        />
        <Text style = {{marginTop : 10, color : 'red', textAlign : 'center'}}>{nthis.state.error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  phoneNumber: {
      flexDirection:'row',
      flexWrap:'wrap',
      marginLeft: 30,
      marginRight: 30
  },
  button: {
      marginTop: 20,
      backgroundColor: '#235162',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:25,
      width:200
  },
  buttonText: {
      fontSize: 18,
      color: '#FFF',
      textAlign: 'center'
  },
})
