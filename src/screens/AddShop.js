import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyTitle from "../components/MyTitle";

const AddShopScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <MyTitle title={"Add Your Shop"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddShopScreen;

const styles = StyleSheet.create({});
