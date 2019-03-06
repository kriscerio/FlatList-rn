import React, { Component } from "react";
import { Text, View } from "react-native";
import CallLogComponent from "./CallLogComponent";

export default class CallLogContainer extends Component {
  onPressCallLogButton = () => {
    console.log("Call log");
  };

  render() {
    return <CallLogComponent onPress={this.onPressCallLogButton} />;
  }
}
