import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {Height, Width} from '../constant/index';

class Progresschart extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.progressoption}>
          <Text style={styles.progressoptiontext}>
            Progress Chart on population
          </Text>
        </View>
        <View style={styles.prochartoption}>
          <ProgressCircle
            style={styles.progresschart}
            progress={0.7}
            progressColor={'rgb(134, 65, 244)'}
            strokeWidth={12}
          />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.optioncolor} />
            <Text style={styles.ptitle}>
              Progress in Population(current year) :0.7{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressoption: {marginTop: 20},
  progressoptiontext: {
    color: '#000',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  prochartoption: {
    alignItems: 'center',
    marginTop: 20,
  },
  progresschart: {
    marginTop: 20,
    height: Height / 2.5,
    width: Width / 1.5,
  },
  ptitle: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  optioncolor: {
    height: 20,
    width: 20,
    marginTop: 32,
    marginRight: 10,
    backgroundColor: 'rgb(134, 65, 244)',
  },
});
export default Progresschart;
