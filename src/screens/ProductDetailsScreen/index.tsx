import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty";

export default function index(props) {
  const [product, setProduct] = useState<Product>();
  // bu sayfaya geldiğimizde ürünler gelecek product ile ürünleri alacağız.
  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);

  console.log("Our product is ", product);
  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
    <View>
      <ImageCarousel images={product.images} />
      <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar}/>
      <Text style={styles.txtDetay}>Detaylar</Text>
      <DetailProperty />
    </View>
  );
}

const styles = StyleSheet.create({
  txtDetay:{
    paddingHorizontal: 10,
    paddingVertical: 14,
    color:"#808b99",
    fontWeight: "600",

  },
});
