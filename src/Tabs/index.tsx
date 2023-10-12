import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import Main from "./Main";
import Appointment from "./Appointment";
import Explore from "./Explore";
import Profile from "./Profile";
import Register from "../Register";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851",
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#fff",
};

const tabs = [
  {
    id: 1,
    name: "Principal",
    component: Main,
    icon: "home",
  },
  {
    id: 2,
    name: "Consultas",
    component: Appointment,
    icon: "calendar",
  },
  {
    id: 3,
    name: "Explorar",
    component: Explore,
    icon: "search",
  },
  {
    id: 4,
    name: "Perfil",
    component: Profile,
    icon: "user",
  },
];

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name={tab.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
