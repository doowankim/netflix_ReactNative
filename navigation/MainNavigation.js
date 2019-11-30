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
    {
        headerMode: "screen",
        headerBackTitleVisible: false //뒤로가기 버튼의 타이틀 유무
    }
);

export default createAppContainer(MainNavigation); //createAppContainer안에 MainNavigatation을 감싼다
