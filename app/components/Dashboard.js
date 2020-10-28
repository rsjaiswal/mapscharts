import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {Dashboardimage, Height, Width} from '../constant/index';

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imagealign}>
          <Image source={Dashboardimage} style={styles.dashimage} />
          <Text style={styles.titletext}>Select the Chart for Preview</Text>
          <View style={styles.chartalign}>
            <TouchableOpacity
              style={styles.optionchart}
              onPress={() => this.props.navigation.navigate('Barchart')}>
              <Text style={styles.optioncharttext}>Bar Chart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionchart}
              onPress={() => this.props.navigation.navigate('Progresschart')}>
              <Text style={styles.optioncharttext}>Progress Chart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.chartalign}>
            <TouchableOpacity
              style={styles.optionchart}
              onPress={() => this.props.navigation.navigate('Countrychart')}>
              <Text style={styles.optioncharttext}>India Chart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titletext: {
    marginTop: 40,
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  dashimage: {
    width: Width / 1.2,
    height: Height / 3,
    marginTop: 30,
  },
  imagealign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartalign: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  optionchart: {
    width: Width / 2.3,
    height: Height / 12,
    backgroundColor: '#4B0082',
    margin: 3,
    padding: 8,
    borderRadius: 45,
    justifyContent: 'center',
  },
  optioncharttext: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Dashboard;
