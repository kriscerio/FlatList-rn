import React, { Component } from "react";
import { Text, View } from "react-native";
import UserDetailConTainer from "./UserDetailContainer";

const UserDetailComponent = props => {
  return (
    <View>
      <Text>{props.lastname}</Text>
    </View>
  );
};

export default UserDetailComponent;
