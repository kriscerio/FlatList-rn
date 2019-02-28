import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import {List, ListItem} from 'react-native-elements'
import HomeComponent from './HomeComponent'

export class HomeContainer extends Component {
  state = {
    data: []
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async() => {
    const response = await fetch("https://randomuser.me/api/?results=100");
    const json = await response.json();
    this.setState({data: json.results});
  }

  render() {
    return (
      <View>
        {/* <HomeComponent /> */}
        <FlatList 
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text>{`${item.name.first} ${item.name.last}`}</Text>
            // <Text>{`${item.location.city}`}</Text>
          }
        />
      </View>
    )
  }
}

export default HomeContainer
