import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import Header from "./../../common/Header";
import { ListItem } from "react-native-elements";

const HomeComponent = props => {
  return (
    <View>
      <Header title="Header" />
      <FlatList
        data={props.data}
        keyExtractor={item => item.login.uuid}
        renderItem={({ item }) => (
          <ListItem
            title={item.name.last}
            subtitle={item.name.first}
            leftAvatar={{ source: { uri: item.picture.thumbnail } }}
          />
        )}
      />
    </View>
  );
};

export default HomeComponent;
