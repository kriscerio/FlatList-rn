import { createDrawerNavigator } from "react-navigation";
import HomeContainer from "./../components/screens/HomeScreen/HomeComponent";

const AppDrawerNavigator = createDrawerNavigator({
  HomeDrawer: { screen: HomeContainer }
});

export default AppDrawerNavigator;
