import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "white"
  },
  containerAvatarName: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    height: 150
  },
  containerStyle: {
    // flex: 1,
    backgroundColor: "red"
  },
  nameTextStyle: {
    fontSize: 20
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

export default styles;
