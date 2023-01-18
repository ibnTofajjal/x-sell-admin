import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../ui/Theme";

const MyButton = ({ title, onPress, customStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, customStyle]}
      onPress={onPress}
      android_ripple={{ color: "#fff" }}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.lightGreen,
    width: 150,
    height: 45,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "#fff",
  },
});
