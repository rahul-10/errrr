import React, {Component} from  'react';

import {
  View,
  ScrollView
} from 'react-native';

//import TextField from 'react-native-md-textinput';
import { TextField } from 'react-native-material-textfield';

class InputField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value : '',
        }
    }

    fun(){

    }

    render() {

        return(
            <TextField
                label={this.props.label}
                tintColor={this.props.highlightColor}
                containerStyle = {{width: (this.props.width)?this.props.width:150, height: this.props.height}}
                value={this.props.value}
                autoCapitalize = {(this.props.autoCapitalize)?this.props.autoCapitalize:'none'}
                labelHeight= {15}
                keyboardType={this.props.keyboardType}
                secureTextEntry = {this.props.secureTextEntry}
                onChangeText={(text) => (!this.props.onChangeText)?this.fun(text):this.props.onChangeText(text)}
                multiline={this.props.multiline}
                numberOfLines={this.props.numberOfLines}
                editable={this.props.editable}
                maxLength = {this.props.maxLength}
                fontSize = {this.props.fontSize}
                onFocus = {this.props.onFocus}
                onEndEditing = {this.props.onEndEditing}
                onSubmitEditing = {this.props.onSubmitEditing}
                autoFocus = {this.props.autoFocus}
            />
        );
    }
}
export default InputField ;
