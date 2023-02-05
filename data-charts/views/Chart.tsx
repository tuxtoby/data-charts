import React, { ReactElement } from 'react'
import { View, StyleSheet } from 'react-native';
import { PieChart, PieChartData } from 'react-native-svg-charts'
import { ChartLabels } from './label';
import { Legend } from './legend';
import { data } from '../data/data.ts'

export function Chart(): ReactElement {
  return (
     <View style={layoutStyle.container}>
        <Legend data={data}/>
        <PieChart
          style={{ height: 200, flex:10 }}
          valueAccessor={({ item }) => item.amount}
          data={data}
          outerRadius={'95%'}>
            <ChartLabels/>
        </PieChart>
    </View>
  )
}

const layoutStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    padding: 30,
    paddingTop: 200
  },
});