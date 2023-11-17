import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {Home, News, NewsDetail} from './screens/screen-list'

const Stack = createNativeStackNavigator();

class App extends Component {
  headerStyle = {
    headerTitleStyle: { color: "white" },
    headerStyle: {
      backgroundColor: "#d4af37",
    },
    headerTintColor: "white",
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Profile Page",
              headerTitleAlign: "center",
              ...this.headerStyle,
            }}
          />
          <Stack.Screen
            name="News"
            component={News}
            options={{
              title: "News Page",
              ...this.headerStyle,
            }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{
              title: "",
              ...this.headerStyle,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
