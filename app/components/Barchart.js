import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Height, Width} from '../constant/index';
import {BarChart} from 'react-native-chart-kit';

const graphStyle = {
  marginVertical: 8,
  borderRadius: 16,
  padding: 5,
};

const chartConfig = {
  backgroundColor: '#fbeaff',
  backgroundGradientFrom: '#b39cd0',
  backgroundGradientTo: '#845ec2',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: () => `#fff`,
  labelColor: () => `#fff`,
  style: {
    borderRadius: 6,
    padding: 5,
  },
  propsForDots: {
    r: '8',
    strokeWidth: '5',
    stroke: '#00c9a7',
  },
};

class Barchart extends Component {
  render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        },
      ],
    };
    return (
      <View style={{flex: 1}}>
        <View style={styles.progressoption}>
          <Text style={styles.progressoptiontext}>Bar Chart on population</Text>
          <BarChart
            style={graphStyle}
            data={data}
            width={Width}
            height={250}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
        </View>
        <View style={styles.prochartoption}>
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

export default Barchart;
