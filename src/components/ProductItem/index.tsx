import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

type productItemType = {
    item: Product
}
export default function index({item}:productItemType) {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.28,
        marginTop: 12,
        //backgroundColor: "red",
        height: height * 0.24,
        marginLeft: 12,
        marginBottom: 0,
      }}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderColor: "gray",
          borderBottomWidth: 0.2,
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 11,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>₺</Text>{item.fiyat}
        </Text>
        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 4,
          }}
        >
          <Text>₺</Text>{item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 5 }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          marginTop: 4,
          fontWeight: "500",
        }}
      >
        {item.miktar}
      </Text>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 30,
          height: 30,
          borderWidth: 3,
          borderColor: "lightgrey",
          backgroundColor: "white",
          position: "absolute",
          right: -6,
          top: -6,
          borderRadius: 6,
          shadowRadius:3.8,
          shadowOpacity:0.08,
        }}
      >
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
