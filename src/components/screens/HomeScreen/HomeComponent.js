import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import Header from "./../../common/Header";
import { ListItem } from "react-native-elements";

const HomeComponent = props => {
  return (
    <View>
      <Header title="Header" />
      <View>
        <FlatList
          data={props.data}
          keyExtractor={item => item.login.uuid}
          renderItem={({ item }) => (
            <ListItem
              containerStyle={styles.listContainerStyle}
              title={item.name.last}
              subtitle={item.name.first}
              leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              onPress={ () => console.log(item.name.first)}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = {
  listContainerStyle: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#24292e'
  }
};

export default HomeComponent;
