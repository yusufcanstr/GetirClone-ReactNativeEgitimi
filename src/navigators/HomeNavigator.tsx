import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CartScreen from "../screens/CartScreen";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  useNavigation,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get("window");

function MyStack({ navigation, route }) {
  const tabHiddenRoutes = ["ProductDetails","CartScreen"];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("routeName ->" + routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

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
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 17, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 35,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 23,
                  height: 23,
                  marginLeft: 6,
                }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{ height: 33, width: 3, backgroundColor: "white" }}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 33,
                  backgroundColor: "#F3EFFE",
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                }}
              >
                <Text
                  style={{ color: "#5D3EBD", fontWeight: "bold", fontSize: 12 }}
                >
                  <Text>{"\u20BA"}</Text>24,00
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons
                style={{ marginLeft: 8 }}
                name="close"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <FontAwesome name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "#white",
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              //style={{ paddingLeft: 4 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name="trash-sharp" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: "#5C3EBC" },
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />;
}

const styles = StyleSheet.create({});
