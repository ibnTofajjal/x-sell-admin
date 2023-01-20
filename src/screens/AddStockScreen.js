import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import MyTitle from "../components/MyTitle";
import { Colors } from "../ui/Theme";

const AddStockScreen = () => {
  return (
    <LinearGradient
      colors={[Colors.g1, Colors.g2, Colors.g3]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <ScrollView>
          <MyTitle title={"Add Stock"} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AddStockScreen;

const styles = StyleSheet.create({});
