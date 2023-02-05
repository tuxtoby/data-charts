import React from "react";
import { ReactElement } from "react";
import { Text, View, StyleSheet } from "react-native";

export function Legend(data: Array<any>): ReactElement {
  return (
    <View>
      {
        data["data"].map(function (content) {
          return (
            <View style={layoutStyle.container}>
              <View style={{backgroundColor: content["svg"]["fill"], width:20, height:20, borderRadius:5, marginRight:5 }} />
              <Text> {content["amount"]} : {content["text"]}</Text>
            </View>
          );
        }) 
      }
    </View>
  )
}

const layoutStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding:5
  },
});