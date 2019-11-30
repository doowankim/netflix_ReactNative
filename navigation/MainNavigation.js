import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import headerStyles from "./config";

const MainNavigation = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigation,
            navigationOptions: {
                header: null
            }
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions: {
                ...headerStyles
            }
        }
    },
    {}
);

export default createAppContainer(MainNavigation); //createAppContainer안에 MainNavigatation을 감싼다
