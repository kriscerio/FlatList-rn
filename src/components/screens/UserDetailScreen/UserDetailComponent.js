import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import UserDetailContainer from "./UserDetailContainer";
import CallLogComponent from "./Button/CallLogButton/CallLogComponent";
import DetailsComponent from "./Button/DetailsButton/DetailsComponent";
import styles from "./styles";

const UserDetailComponent = props => {
  return (
    <View>
      <View style={styles.containerAvatarName}>
        <Image style={styles.avatar} source={{ uri: props.thumbnail }} />
        <Text style={styles.nameTextStyle}>{`${props.firstname} ${
          props.lastname
        }`}</Text>
      </View>
      <View style={styles.tabContainer}>
        <DetailsComponent detail={props.detail} onPress={props.onPress} />
        <CallLogComponent detail={props.detail} onPress={props.onPress} />
      </View>
    </View>
  );
};

export default UserDetailComponent;
