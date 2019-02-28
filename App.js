import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeContainer from './src/components/screens/HomeScreen/HomeContainer';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <HomeContainer />
      </View>
    );
  }
}

