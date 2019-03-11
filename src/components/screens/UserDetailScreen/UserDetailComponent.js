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
          props.lastname}`}</Text>
      </View>
      <View style={styles.tabContainer}>
        <DetailsComponent
          detailTab={props.detailTab}
          callLogTab={props.callLogTab}
          onPressDetail={props.onPressDetail}
          visible={props.visible}
        />
        <CallLogComponent
          detailTab={props.detailTab}
          callLogTab={props.callLogTab}
          onPressCallLog={props.onPressCallLog}
          visible={props.visible}
        />
      </View>
    </View>
  );
};

export default UserDetailComponent;
