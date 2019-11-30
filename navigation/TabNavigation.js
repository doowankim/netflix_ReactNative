import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import MovieScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import {BG_COLOR} from "../constants/Colors";

const TabNavigation = createBottomTabNavigator(
    {
        Movies: MovieScreen,
        TV: TVScreen,
        Search: SearchScreen
    },
    {
        tabBarOptions: {
            showLabel: false, //tabBar 안에 text 넣는 곳
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);
