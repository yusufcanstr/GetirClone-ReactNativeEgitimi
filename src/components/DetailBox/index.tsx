import { StyleSheet, Text, View } from "react-native";
import React from "react";

type DetailBoxProps={
    price:number;
    name:string;
    quantity:string;
}

export default function index({price,name,quantity} : DetailBoxProps) {
  return (
    <View style={{width:"100%",backgroundColor:"white",paddingVertical:10, alignItems:"center"}}>
      <Text style={styles.txtPrice}>
        <Text>{"\u20BA"}</Text>
        {price}
        </Text>
      <Text style={styles.txtName}>{name}</Text>
      <Text style={styles.txtQuantity}>{quantity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    txtPrice: {
        color:"#5D3EBD",
        fontWeight:"bold",
        marginTop:10,
        fontSize:20,
    },
    txtName: {
        color:"black",
        fontWeight:"600",
        fontSize:16,
        marginTop:12,
    },
    txtQuantity: {
        color:"#848897",
        fontWeight: "600",
        marginTop:8,
        paddingBottom:17,
    }
});
