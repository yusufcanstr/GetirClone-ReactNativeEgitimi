import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "../navigators/HomeNavigator";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const CustomTabBarButton = ({ children }) => {
    return (
      <TouchableOpacity
        style={{
          borderColor: "white",
          borderWidth: 2,
          borderRadius: 35,
          justifyContent: "center",
          marginTop: -14,
          alignItems: "center",
          backgroundColor: "#5C3EBC",
          width: 70,
          height: 70,
        }}
      >
        <Entypo name="list" size={32} color="#FFD00C" />
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Anasayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
