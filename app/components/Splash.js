import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Height, Width, Logoimage} from '../constant/index';

class Splash extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 1000);
  }

  render() {
    let splashScreen = <Image source={Logoimage} style={styles.logoimage} />;
    return (
      <View style={styles.container}>
        {this.state.isVisible === true
          ? splashScreen
          : this.props.navigation.navigate('Auth')}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoimage: {
    width: Width / 2,
    height: Height / 3,
    resizeMode: 'contain',
  },
});

export default Splash;
