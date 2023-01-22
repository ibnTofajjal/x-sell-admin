import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import MyTitle from "../components/MyTitle";
import { Colors } from "../ui/Theme";
import MyButton from "../components/MyButton";

const AddStockScreen = ({ navigator }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  return (
    <LinearGradient
      colors={[Colors.g1, Colors.g2, Colors.g3]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <MyTitle title={"Add Stock"} />
        <MyButton
          title={"Back To Home"}
          onPress={navigator.navigate("AddScreen")}
        />
        <View style={styles.dropdownStyle}></View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AddStockScreen;

const styles = StyleSheet.create({
  dropdownStyle: {
    backgroundColor: "#fafafa",
    width: 200,
    alignSelf: "center",
    //
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
