import FeatherIcon from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HistoryScreen from "../../screens/History";
import LibraryScreen from "../../screens/Library";
import SettingsScreen from "../../screens/Settings";
import UpdatesScreen from "../../screens/Updates";

import type { RootBottomTabParamList } from "../types";

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Library"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomTabBarIcon name="home" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Updates"
        component={UpdatesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomTabBarIcon name="bell" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomTabBarIcon name="clock" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomTabBarIcon name="settings" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

type BottomTabBarIconName = React.ComponentProps<typeof FeatherIcon>["name"];

interface BottomTabBarIconProps {
  name: BottomTabBarIconName;
  color: string;
}

function BottomTabBarIcon(props: BottomTabBarIconProps) {
  return <FeatherIcon size={22} style={{ marginBottom: -3 }} {...props} />;
}
