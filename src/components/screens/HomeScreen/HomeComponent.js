import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import Header from "./../../common/Header";

const HomeComponent = props => (
  <View>
    <Header title="Header" />
    <FlatList
      data={props.data}
      keyExtractor={item => item.login.uuid}
      renderItem={({ item }) => (
        <Text>{`${item.name.first} ${item.name.last}`}</Text>
      )}
    />
  </View>
);

export default HomeComponent;
