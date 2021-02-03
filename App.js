import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import StepsScreen from "./src/screens/StepsScreen";
import UsersScreen from "./src/screens/Users";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Steps" component={StepsScreen} />
        <Stack.Screen name="Users" component={UsersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
