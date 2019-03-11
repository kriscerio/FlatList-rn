import React, { Component } from "react";
import { Text, View } from "react-native";
import UserDetailComponent from "./UserDetailComponent";
import DetailsContainer from "./Button/DetailsButton/DetailsContainer";
import CallLogContainer from "./Button/CallLogButton/CallLogContainer";
import styles from "./styles";

export class UserDetailContainer extends Component {
  state = {
    isVisible: true,
    detailTab: true,
    callLogTab: true
  };

  onPress = () => {
    // const visibility = this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.isVisible);
  };

  onPressDetail = () => {
    this.setState({
      detailTab: true,
      callLogTab: false
    });
    console.log("onPressDetail");
  };

  onPressCallLog = () => {
    this.setState({
      detailTab: false,
      callLogTab: true
    });
    console.log("onPressCallLog");
  };

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("item");
    return (
      <View>
        <UserDetailComponent
          lastname={data.name.last}
          firstname={data.name.first}
          thumbnail={data.picture.thumbnail}
          detailTab={this.state.detailTab}
          callLogTab={this.state.callLogTab}
          onPress={this.onPress}
          onPressDetail={this.onPressDetail}
          onPressCallLog={this.onPressCallLog}
        />
      </View>
    );
  }
}

export default UserDetailContainer;
