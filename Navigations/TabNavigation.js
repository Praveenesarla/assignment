import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MapScreen from "../screens/MapScreen";
import QrScreen from "../screens/QrScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Maps"
        component={MapScreen}
        options={{
          tabBarLabel: "Maps",
          tabBarIcon: (color, size) => (
            <MaterialCommunityIcons
              name="google-maps"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={QrScreen}
        options={{
          tabBarLabel: "QrScanner",
          tabBarIcon: (color, size) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
