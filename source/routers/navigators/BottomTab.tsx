import FeatherIcon from "@expo/vector-icons/Feather";

import { RootBottomTabParamList } from "$/routers/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { LibraryScreen } from "$/screens/tab/library";
import { RecentsScreen } from "$/screens/tab/recents";
import { SettingsScreen } from "$/screens/tab/settings";
import { ExtensionsScreen } from "$/screens/tab/extensions";

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Library"
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: true,

        tabBarStyle: {
          height: 70,
          paddingTop: 15,
          paddingBottom: 10,
        },

        tabBarLabelStyle: {
          fontSize: 11,
        },

        tabBarItemStyle: {
          borderRadius: 35,
          marginHorizontal: 15,
        },
      })}
    >
      <BottomTab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: (props) => (
            <BottomTabBarIcon name="book-open" {...props} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Recents"
        component={RecentsScreen}
        options={{
          tabBarIcon: (props) => <BottomTabBarIcon name="clock" {...props} />,
        }}
      />

      <BottomTab.Screen
        name="Extensions"
        component={ExtensionsScreen}
        options={{
          tabBarIcon: (props) => <BottomTabBarIcon name="box" {...props} />,
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: (props) => (
            <BottomTabBarIcon name="settings" {...props} />
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
  return <FeatherIcon size={22} style={{}} {...props} />;
}
