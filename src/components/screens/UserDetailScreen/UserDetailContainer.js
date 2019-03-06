import React, { Component } from "react";
import { Text, View } from "react-native";
import UserDetailComponent from "./UserDetailComponent";
import DetailsContainer from "./Button/DetailsButton/DetailsContainer";
import CallLogContainer from "./Button/CallLogButton/CallLogContainer";
import styles from "./styles";

export class UserDetailContainer extends Component {
  state = {
    isVisible: true
  };

  onPress = () => {
    this.setState({ isVisible: false });
  };

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("item");
    console.log(data);
    return (
      <View>
        <UserDetailComponent
          lastname={data.name.last}
          firstname={data.name.first}
          thumbnail={data.picture.thumbnail}
          detail={this.state.isVisible}
          onPress={this.onPress}
        />
      </View>
    );
  }
}

export default UserDetailContainer;
