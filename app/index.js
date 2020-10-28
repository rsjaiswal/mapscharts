import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RootNavigator from './route';

class App extends Component {
  render() {
    const Nav = RootNavigator;
    return (
      <View style={{flex: 1}}>
        <Nav />
      </View>
    );
  }
}
export default App;
