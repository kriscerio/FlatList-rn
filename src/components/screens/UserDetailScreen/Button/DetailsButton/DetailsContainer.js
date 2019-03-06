import React, { Component } from "react";
import { Text, View } from "react-native";
import DetailsComponent from "./DetailsComponent";

export default class DetailsContainer extends Component {
  onPressDetailsButton = () => {
    console.log("Details");
  };

  render() {
    return <DetailsComponent onPress={this.onPressDetailsButton} />;
  }
}
