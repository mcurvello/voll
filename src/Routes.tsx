import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login";
import Register from "./Register";
import Tabs from "./Tabs";
import Schedule from "./Schedule";

const Tab = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login as React.FC}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Register"
          component={Register as React.FC}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Schedule"
          component={Schedule as React.FC}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Tabs"
          component={Tabs as React.FC}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
