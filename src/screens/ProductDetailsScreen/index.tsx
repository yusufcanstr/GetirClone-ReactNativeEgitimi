import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailBox from "../../components/DetailBox";

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
    </View>
  );
}

const styles = StyleSheet.create({});
