import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { Product } from "../../models";
type CartItemProps = {
  product: Product;
};
const { width, height } = Dimensions.get("window");
export default function index({ product }: CartItemProps) {
  return (
    <View
      style={{
        height: height * 0.13,
        paddingHorizontal: width * 0.04,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ height: height * 0.09, width: height * 0.09 }}
          source={{ uri: product.image }}
        />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.txtName}>{product.name}</Text>
          <Text style={styles.txtMiktar}>{product.miktar}</Text>
          <Text style={styles.txtFiyat}>₺{product.fiyat}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent:"space-around",
          alignItems:"center",
          width: width * 0.21,
          borderColor: "lightgray",
          borderWidth: 0.5,
          height: height * 0.037,
          borderRadius:10,
        }}
      >
        <View style={{flex:1, alignItems:"center"}}>
          <Text>-</Text>
        </View>
        <View style={{flex:1, alignItems:"center", backgroundColor:"#5D3EBD", height:height*0.037, justifyContent:"center"}}>
          <Text style={{fontWeight:"bold", color:"white", fontSize:12}}>2</Text>
        </View>
        <View style={{flex:1, alignItems:"center"}}>
          <Text>+</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtName: {
    fontSize: 13,
    fontWeight: "600",
  },
  txtMiktar: {
    fontSize: 12,
    marginTop: 3,
    color: "#848897",
    fontWeight: "600",
  },
  txtFiyat: {
    color: "#5D3EBD",
    fontWeight: "bold",
    marginTop: 6,
    fontSize: 15,
  },
});
