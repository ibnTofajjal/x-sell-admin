import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import MyTitle from "../components/MyTitle";
import { Colors } from "../ui/Theme";

const AddStockScreen = () => {
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

        <View style={styles.dropdownStyle}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
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
  },
});
