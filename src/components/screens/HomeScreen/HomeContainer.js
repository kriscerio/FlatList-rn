import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";
import HomeComponent from "./HomeComponent";

export class HomeContainer extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }

  onPressUserDetail = item => {
    this.props.navigation.navigate("UserDetail", { item });
  };

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    return (
      <HomeComponent
        data={this.state.data}
        onPressItem={this.onPressUserDetail}
      />
    );
  }
}

export default HomeContainer;
