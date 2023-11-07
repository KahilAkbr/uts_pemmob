import React from "react";
import { StatusBar} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import News from "./screens/news_list";
import NewsDetail from "./screens/news_detail";

const Stack = createNativeStackNavigator();

const App = () => {
  const headerStyle = {
    headerTitleStyle: { color: "white" },
    headerStyle: {
      backgroundColor: "#AA0002",
    },
    headerTintColor: "white",
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" backgroundColor="#AA0002" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "React Native Networking",
            ...headerStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
