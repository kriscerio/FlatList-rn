import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import HomeComponent from "../components/screens/HomeScreen/HomeComponent";
import UserDetailComponent from "../components/screens/UserDetailScreen/UserDetailComponent";
import HomeContainer from "../components/screens/HomeScreen/HomeContainer";

const AppNavigator = createStackNavigator({
  Home: { screen: HomeContainer },
  UserDetail: { screen: UserDetailComponent }
});

export default AppNavigator;
