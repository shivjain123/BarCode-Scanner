import React from "react";
import { StyleSheet, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import MainScreen from "./screens/MainScreen";
import ScanScreen from "./screens/ScanScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Main: { screen: MainScreen },
  Scan: { screen: ScanScreen }
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        if (routeName === 'Main') {
          return(
            <Image
            style={{width: 20, height: 20}}
            source={require('./assets/icon.png')}
            />
          )
        } else if (routeName === 'Scan') {
          return(
            <Image
            style={{ width: 20, height: 20 }}
            source={require('./assets/scanner.png')}
            />
          )
        }
      }
    }),
  }
)

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
