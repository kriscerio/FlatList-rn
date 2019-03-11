import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import styles from "./styles";

const CallLogComponent = props => {
  return (
    <View>
      <Button title="Call Logs" type="clear" onPress={props.onPressCallLog} />
      {
        props.callLogTab ? (
          <Text>asdfasdfasdfasdfasdfasdf</Text>
        ): null
      }
    </View>
  )
};
export default CallLogComponent;
