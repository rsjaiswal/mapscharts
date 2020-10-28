import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Height, Width, Loginimage} from '../../constant/index';

const LogoComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={Loginimage}
        resizeMode={'contain'}
        style={{width: Width / 1.3, height: Height / 3, padding: 10}}
      />
    </View>
  );
};

export default LogoComponent;
