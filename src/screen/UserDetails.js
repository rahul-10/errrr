import React, {Component} from  'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';

import InputField from '../component/InputField';

var nthis = '';

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        nthis=this;
        this.state = {
          name: '',
          flatNo:'',
          socityName:'',
          animating:false,
          options: ['abdfa,gnfdkjbjkdfbgjbdfjkbgjkfjkc', 'def', 'ehi'],
          selectedOption:0
        }
    }
    submit(){

    }

    _dropdown_2_renderRow(rowData, rowID, highlighted) {
        return (
          <TouchableHighlight underlayColor='cornflowerblue'>
            <View style={{flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
                <Text>{rowData}</Text>
            </View>
          </TouchableHighlight>
        );
      }

    onSelect(index, value){
      nthis.setState({selectedOption : index});
    }

    render() {
      const { animating } = nthis.state;
      return (
        <View style = {styles.container} >
          <View style = {[styles.phoneNumber, {alignItems: 'center'}]}>
            <View style = {{flex: 1}}>
              <Icon size={35} color="#235162" name="md-person" />
            </View>
            <View style = {{flex:5, marginTop:10}} >
              <InputField
                  label='Name'
                  highlightColor='#F65E07'
                  width = {230}
                  height= {80}
                  dense = {true}
                  secureTextEntry = {false}
                  onChangeText={(text) => this.setState({name: text})}
                  value = {this.state.name}
                  keyboardType="default"
              />
            </View>
          </View>
          <View style = {[styles.phoneNumber, {alignItems: 'center'}]}>
            <View style = {{flex: 1}}>
              <Icon size={35} color="#235162" name="md-person" />
            </View>
            <View style = {{flex:5, marginTop:10}} >
              <InputField
                  label='Flat No.'
                  highlightColor='#F65E07'
                  width = {230}
                  height= {80}
                  dense = {true}
                  secureTextEntry = {false}
                  onChangeText={(text) => this.setState({flatNo: text})}
                  value = {this.state.flatNo}
                  keyboardType="default"
              />
            </View>
          </View>
          <View style = {{flexDirection:'row', marginHorizontal:30, marginTop:10, alignItems:'center'}} >
            <View >
              <Icon size={35} color="#235162" name="md-person" />
            </View>
            <ModalDropdown
              options={this.state.options}
              onSelect = {this.onSelect}
              dropdownStyle = {{height: this.state.options.length*35 , width: 230, marginLeft:30, paddingVertical:8}}
              renderRow={this._dropdown_2_renderRow.bind(this)} >
              <View style = {{flexDirection: 'row',marginLeft:30, alignItems: 'center', width:230, backgroundColor:'#d6d6d6'}}>
                <Text style = {{marginLeft: 0}} >{this.state.options[this.state.selectedOption]}</Text>
              </View>

            </ModalDropdown>
          </View>
          <Button
            raised
            rounded
            onPress={ () => {this.setState({animating : true}); this.submit(); } }
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            title={"Submit"}
            loading={animating}
            loadingRight
          />
          <Text style = {{marginTop : 10, color : 'red', textAlign : 'center'}}>{this.state.error}</Text>
        </View>
      );
    }
}

// const estyles = EStyleSheet.create({
//   scrollView: {
//       height: '80%'
//   }
// });


const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : 100,
    backgroundColor: 'white'
  },
  line: {
    width: 80,
    height: 1,
    backgroundColor: '#000000',
    marginTop:5
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
      width:200,
      alignSelf:'center'
  },
  buttonText: {
      fontSize: 18,
      color: '#FFF',
      textAlign: 'center'
  },
});
