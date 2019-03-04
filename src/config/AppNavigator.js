import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import HomeComponent from "../components/screens/HomeScreen/HomeComponent";
import UserDetailComponent from "../components/screens/UserDetailScreen/UserDetailComponent";
import HomeContainer from "../components/screens/HomeScreen/HomeContainer";
import UserDetailContainer from "../components/screens/UserDetailScreen/UserDetailContainer";

const AppNavigator = createStackNavigator({
  Home: { screen: HomeContainer },
  UserDetail: { screen: UserDetailContainer }
});

export default AppNavigator;
