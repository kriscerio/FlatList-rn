import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import styles from './styles'

const CallLogComponent = props => {
  return (
    <View>
      <Button title="Call Log" type="clear" />
      <Text style={styles.container}>as;dlfjas;ldfkja;lsdkfja;lskdjf</Text>
    </View>
  );
};

export default CallLogComponent;
