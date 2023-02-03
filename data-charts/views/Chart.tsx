import React, { ReactElement } from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-svg'
import { PieChart } from 'react-native-svg-charts'

export function Chart(): ReactElement {
  const data = [
    {
      key: 1,
      amount: 50,
      svg: { fill: '#600080' },
    },
    {
      key: 2,
      amount: 50,
      svg: { fill: '#9900cc' }
    },
    {
      key: 3,
      amount: 40,
      svg: { fill: '#c61aff' }
    },
    {
      key: 4,
      amount: 95,
      svg: { fill: '#d966ff' }
    },
    {
      key: 5,
      amount: 35,
      svg: { fill: '#ecb3ff' }
    }
  ]

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <Text
            key={index}
            x={pieCentroid[ 0 ]}
            y={pieCentroid[ 1 ]}
            fill={'white'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={24}
            stroke={'black'}
            strokeWidth={0.2}>
              {data.amount}
          </Text>
        )
      })
    }

  return (
     <View style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
        <PieChart
          style={{ height: 200, flex:10 }}
          valueAccessor={({ item }) => item.amount}
          data={data}
          outerRadius={'95%'}>
            <Labels/>
        </PieChart>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop:200
  },
});