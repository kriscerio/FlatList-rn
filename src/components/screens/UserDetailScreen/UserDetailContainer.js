import React, { Component } from "react";
import { Text, View } from "react-native";
import UserDetailComponent from "./UserDetailComponent";
import HomeComponent from "./../HomeScreen/HomeComponent";

const { navigation } = this.props;
const title = navigation.getParam("title");
const subtitle = navigation.getParam("subtitle");

export class UserDetailContainer extends Component {

  render() {
    return (
      <View>
        <UserDetailComponent />
      </View>
    );
  }
}

export default UserDetailContainer;
