import { createStackNavigator } from "react-navigation-stack";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";

export const headerStyles = {
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomColor: 0
    },
    headerTitleStyle: {
        color: TINT_COLOR
    },
    headerTintcolor: TINT_COLOR
};

export const createStack = (screen, title) =>
    createStackNavigator({
        Screen: {
            screen,
            navigationOptions: {
                title,
                ...headerStyles //...은 위에 headerStyles{} 전부를 가져온다
            }
        }
    });