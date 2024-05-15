import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
export default function index() {
  return (
    <TouchableOpacity style={styles.btnView}>
      <View style={styles.btnStyle}>
        <Text style={styles.btnText}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: height * 0.11,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  btnStyle: {
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.06,
    width: "90%",
    backgroundColor: "#5D39C1",
    marginHorizontal: "5%",
    borderRadius: 8,
    marginTop:-10,
    flexDirection: "row",
  },
});
