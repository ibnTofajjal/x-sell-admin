import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../ui/Theme";

const MyTitle = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default MyTitle;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: Colors.white,
    marginTop: 20,
    marginBottom: 10,
    width: "90%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
