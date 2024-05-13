import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "../ProductItem";
import productsGetir from "../../../assets/productsGetir";

export default function index() {
  return (
    /* Main View */
    <View>
      {/*2 products*/}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>

      <Text style={{ color: "gray", fontWeight: "bold", padding: 14 }}>
        Çubuk
      </Text>

      {/* Bellow products*/}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          backgroundColor:"white",
          alignItems:"center",
          paddingVertical: 10,
        }}
      >
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
