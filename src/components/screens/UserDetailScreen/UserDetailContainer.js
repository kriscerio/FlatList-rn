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
    callLogTab: false
  };

  onPress = () => {
    // const visibility = this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.isVisible);
  };

  // toggleView() {
  //   if (this.state.isVisible=true) {
  //     this.state({
  //       isVisible: false
  //     })
  //   }else {
  //     this.state({
  //       isVisible: true
  //     })
  //   }
  // }
  onPressDetail = () => {
    // if (this.state.isVisible=true) {
    //   this.state({
    //     isVisible: true
    //   })
    // }
    console.log("onPressDetail");
  };

  onPressCallLog = () => {
    // if (this.state.isVisible) {
    //   this.state({
    //     isVisible: false
    //   });
    // }
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
          detail={this.state.isVisible}
          onPress={this.onPress}
          onPressDetail={this.onPressDetail}
          onPressCallLog={this.onPressCallLog}
        />
      </View>
    );
  }
}

export default UserDetailContainer;
