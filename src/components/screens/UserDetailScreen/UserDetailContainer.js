import React, { Component } from "react";
import { Text, View } from "react-native";
import UserDetailComponent from "./UserDetailComponent";
import HomeComponent from "./../HomeScreen/HomeComponent";

export class UserDetailContainer extends Component {
  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("item");
    console.log(data);
    return (
      <View>
        <UserDetailComponent
          lastname={data.name.last}
          firstname={data.name.first}
        />
        {/* <Text>{data.name.last}</Text> */}
      </View>
    );
  }
}

export default UserDetailContainer;
