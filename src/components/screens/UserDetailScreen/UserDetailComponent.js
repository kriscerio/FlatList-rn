import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import UserDetailConTainer from "./UserDetailContainer";

const UserDetailComponent = props => {
  return (
    <View>
      <Text>{props.lastname}</Text>
      <Image
        style={{ height: 100, width: 100, borderRadius: 50 }}
        source={{ uri: props.thumbnail }}
      />
    </View>
  );
};

export default UserDetailComponent;
