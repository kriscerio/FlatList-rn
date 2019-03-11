import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import styles from "./styles";

const DetailsComponent = props => {
  return (
    <View>
      <Button title="Details" type="clear" onPress={props.onPressDetail} />
      {
        props.detailTab ? (  
          <Text>123123123123123123</Text>
        ): null
      }
    </View>
  )
};

export default DetailsComponent;
