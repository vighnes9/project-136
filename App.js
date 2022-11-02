import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./screens/home";
import DetailScreen from "./screens/details";

export default function App(){
  return<AppContainer/>;
}

const appStackNavigator = createStackNavigator(
  {
    Home:{
      screen : HomeScreen,
      navigationOptions : {
        headerShown : false
      }
    },
    Details:{
      screen : DetailScreen
    }

  },
  {
    initialRouteName : "Home"
  }
);

const AppContainer = createAppContainer(appStackNavigator);