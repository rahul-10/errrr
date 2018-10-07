import React, { Component } from 'react';
import {
    View,
    Platform
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import { Scene, Router} from 'react-native-router-flux';
// import Icon from 'react-native-vector-icons/Ionicons';

import Splash from './screen/Splash';
import GenerateOtp from './screen/GenerateOtp';
import VerifyOtp from './screen/VerifyOtp';
import UserDetails from './screen/UserDetails';

import HomePage from './screen/client/HomePage'



EStyleSheet.build({
  $textColor: 'green'
});


export default class Navigator extends Component {
  render() {
        return(
            <View style = {{flex:1, marginTop : (Platform.OS == 'ios')?10:0}}>
                <Router>
                    <Scene key="main">
                        <Scene key="Splash" component={Splash}  hideNavBar={true}  />
                        <Scene key= "GenerateOtp" component={GenerateOtp} hideNavBar={true} initial />
                        <Scene key= "VerifyOtp" component={VerifyOtp} hideNavBar={true}  />
                        <Scene key= "UserDetails" component={UserDetails} hideNavBar={true}  />
                        <Scene key= "HomePage" component={HomePage} hideNavBar={true} initial />
                    </Scene>
               </Router>
            </View>
        );
    }
}


const estyles = EStyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
        top: 10,
        height: '7%',
        opacity: 10,
        borderBottomColor:'#D7D7D7',
        borderBottomWidth: 1
    },
    scene: {
        marginTop : '11%'
    },
    lineOn:{
        width:100,
        marginTop:3,
        backgroundColor:'#235162',
        height:(Platform.OS === 'ios')?3:10
    },
    lineOff:{
        width:'100%',
        marginTop:5,
        backgroundColor:'#D7D7D7',
        height:10
    },
    head : {
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,

    },
    contain : {
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
});
