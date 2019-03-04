import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import UserDetailConTainer from "./UserDetailContainer";
import styles from "./styles";

const UserDetailComponent = props => {
  return (
    <View>
      <View style={styles.containerStyle}>
        <Image style={styles.avatar} source={{ uri: props.thumbnail }} />
        <Text style={styles.nameTextStyle}>{`${props.firstname} ${props.lastname}`}</Text>
      </View>
    </View>
  );
};

export default UserDetailComponent;
