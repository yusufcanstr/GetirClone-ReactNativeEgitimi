import { StyleSheet, Image, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              resizeMode="contain"
              style={{ width: 70, height: 30 }}
              source={require("../../assets/getirlogo.png")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{fontWeight:"bold", fontSize:17, color:"white",}}>Ürünler</Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
