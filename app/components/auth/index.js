import React, {Component} from 'react';
import {Height, Width} from '../../constant/index';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import LogoComponent from './authLogo';
import AuthForm from './authForm';

class AuthComponent extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.mainscroll}>
          <LogoComponent />
          <AuthForm goNext={() => this.props.navigation.navigate('App')} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    padding: 50,
  },
  mainscroll: {
    marginBottom: 60,
  },
});

export default AuthComponent;
