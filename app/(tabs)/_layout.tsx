import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#22c55e",
        },
        headerTitleStyle: {
          textTransform: "uppercase",
          letterSpacing: 2.5,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#cbd5e1",
        tabBarStyle: {
          backgroundColor: "#22c55e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "First",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="code" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="second"
        options={{
          title: "Second",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="code" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
