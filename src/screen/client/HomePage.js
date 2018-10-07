import React, {Component} from  'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ActivityIndicator,
    StatusBar,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { Button, Header } from 'react-native-elements';
// import { Drawer } from 'native-base';
import Drawer from 'react-native-drawer'

let nthis = '';
export default class GenerateOtp extends Component {
  constructor(props) {
    super(props);
    nthis = this;
    this.state = {
    }
  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  callMenu(index){
    if(index === 0)
      Actions.HomePage();
    else if(index === 1)
      Actions.UserDetails();
    else if(index === 2)
      Actions.UserDetails();
    else if(index === 3)
      Actions.UserDetails();
    else if(index === 4)
      Actions.UserDetails();
    else if(index === 5)
      Actions.UserDetails();
    else
      Actions.UserDetails();

  }

  showMenuOption(){
    option = ['Home', 'View Maids', 'Add Maid', 'Quick Service', 'Contact us', 'Setting', 'News/Complaint', 'Rate us'];
    return option.map((data, index) => {
      return(
        <TouchableOpacity key={index} onPress={()=>{nthis.callMenu(index)}}>
          <Text style={{marginTop: 20, marginLeft:10, fontSize:16}}>{data}</Text>
        </TouchableOpacity>
      );
    });
  }

  showContent(){
    return(
      <ScrollView style={{flex:1, width:250, backgroundColor:'#d6d6d6'}}>
        <TouchableOpacity
          style = {{backgroundColor:'#fff',flexDirection:'row', alignItems:'center', paddingBottom:30, paddingTop:15, paddingHorizontal:10 }}
          onPress={()=>{Actions.GenerateOtp() }}>
          <View><Icon size={50} color="#235162" name="md-person" /></View>
          <Text style = {{fontSize: 18, marginLeft:15, paddingHorizontal:10}} >Login</Text>
        </TouchableOpacity>
        {nthis.showMenuOption()}
      </ScrollView>
    );
  }

  showDrawer(){
    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
      main: {paddingLeft: 3},
    }
    return(
      <Drawer
        type="overlay"
        content={this.showContent()}
        ref={(ref) => this._drawer = ref}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        >
      </Drawer>
    );
  }

  render(){
    return(
      <View style = {styles.container} >
        <Header
          leftComponent={{ icon: 'menu', color: '#fff',onPress: () => nthis.openControlPanel() }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: 'blue' }}
          statusBarProps={{ barStyle: 'default' , backgroundColor:'blue'}}
          backgroundColor={'blue'}
        />
        {this.showDrawer()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'white'
  },
})
