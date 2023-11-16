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
      backgroundColor: "#d4af37",
    },
    headerTintColor: "white",
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" backgroundColor='black' />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options=
        {{
            title: "Profile Page",
            headerTitleAlign: "center", 
          ...headerStyle
        }}
        />
        <Stack.Screen name="News" component={News} 
        options=
        {{
            title: "News Page",
          ...headerStyle
        }}
        />
        <Stack.Screen name="NewsDetail" component={NewsDetail} 
        options=
        {{
            title: "", 
          ...headerStyle
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
