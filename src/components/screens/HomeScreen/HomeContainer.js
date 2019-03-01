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

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=100");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    console.log(this.state.data);
    return <HomeComponent data={this.state.data} />;
  }
}

export default HomeContainer;
