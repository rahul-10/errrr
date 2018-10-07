import React, { Component } from 'react';
import { View , Text} from 'react-native';
import Navigator from './Router';

// import codePush from "react-native-code-push";

class App extends Component {
    render() {
        return (
          <View style={{ flex: 1 }}>
              <Navigator  />
          </View>
        );
    }
}

export default App;
