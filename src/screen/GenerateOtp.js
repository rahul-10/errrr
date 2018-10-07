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

export default class GenerateOtp extends Component {
  constructor(props) {
    super(props);
    nthis = this;
    this.state = {
      mobile : '',
      error : '',
      animating:false
    }
  }

  sendOTP(){
    console.log('Otp sent');
    Actions.VerifyOtp();
  }

  render(){
    const { animating } = this.state;
    return(
      <View style = {styles.container} >
        <View style = {[styles.phoneNumber, {alignItems: 'center'}]}>
          <View style = {{flex: 1}}>
            <Icon size={35} color="#235162" name="md-call" />
          </View>
          <View style = {{flex: 5, marginTop:10}} >
            <InputField
                label='Phone number'
                highlightColor='#F65E07'
                width = {200}
                height= {80}
                dense = {true}
                secureTextEntry = {false}
                onChangeText={(text) => this.setState({mobile: text})}
                value = {this.state.mobile}
                keyboardType="numeric"
            />
          </View>
        </View>
        <Text style = {{textAlign: 'center'}} >You will receive a sms from us. Your telecom operator may charge you for this.</Text>
        <Button
          raised
          rounded
          onPress={ () => {nthis.setState({animating : true}); this.sendOTP(); } }
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          title={"Generate OTP"}
          loading={animating}
          loadingRight
        />
        <Text style = {{marginTop : 10, color : 'red', textAlign : 'center'}}>{nthis.state.error}</Text>
      </View>
    );
  }
}

// <TouchableHighlight onPress={ () => {nthis.setState({animating : true}); this.sendOTP(); } } style={styles.button}>
//     {(animating)?<ActivityIndicator animating = {animating} size="small" color="#FFFFFF" />:<Text style={styles.buttonText}> Accept and Continue </Text>}
// </TouchableHighlight>

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
  line: {
      width: 80,
      height: 1,
      backgroundColor: '#000000',
      marginTop:5
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
