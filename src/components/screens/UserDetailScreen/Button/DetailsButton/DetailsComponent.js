import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import styles from "./styles";

const DetailsComponent = props => {
  return (
    <View>
      <Button title="Details" type="clear" onPress={props.onPress} />
      {!props.detail && (
        <Text style={styles.container}>111123123123123123123</Text>
      )}

    </View>
  );
};

export default DetailsComponent;
