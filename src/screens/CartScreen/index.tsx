import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";

const { width, height } = Dimensions.get("window");
export default function index() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={productsGetir.slice(0, 4)}
        renderItem={({ item }) => <CartItem product={item} />}
      />
      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
          backgroundColor: "#f9f9f9",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 3,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            backgroundColor: "#5D3EBD",
            height: height * 0.06,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Devam
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: height * 0.06,
            marginTop:-10,
            borderTopRightRadius:8,
            borderBottomRightRadius:8,
            borderWidth:0.5,
            borderColor:"lightgray"
          }}
        >
          <Text
            style={{
              color: "#5D3EBD",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            <Text>{"\u20BA"}</Text>24.95
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
