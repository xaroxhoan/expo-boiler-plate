import { Redirect, Stack, Tabs } from "expo-router";
import { useSession } from "../../providers/session";
import Icon from "@expo/vector-icons/Ionicons";

export default function MainLayout() {
  const { isLoggedIn } = useSession();

  if (!isLoggedIn) return <Redirect href="/login" />;

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTintColor: "#ffebee",
        headerStyle: {
          backgroundColor: "#f44336",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => {
            return (
              <Icon
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name={focused ? "settings" : "settings-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
