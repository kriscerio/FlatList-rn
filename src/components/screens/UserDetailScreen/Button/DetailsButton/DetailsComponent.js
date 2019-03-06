import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
// import styles from "./styles";

const DetailsComponent = props => {
  return (
    <View>
      <Button title="Details" type="clear" />
      {props.detail && <Text>111123123123123123123</Text>}
      {/* <Text>123123123123123123123</Text> */}
    </View>
  );
};

export default DetailsComponent;
