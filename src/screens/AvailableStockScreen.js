import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import MyTitle from "../components/MyTitle";
import AddComponent from "../components/AddComponent";
import { Colors } from "../ui/Theme";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const AvailableStockScreen = () => {
  return (
    <LinearGradient
      colors={[Colors.g1, Colors.g2, Colors.g3]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <ScrollView>
          <MyTitle title={"Available Stock"} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AvailableStockScreen;

const styles = StyleSheet.create({});
