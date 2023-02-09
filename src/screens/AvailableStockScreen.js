import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import MyTitle from "../components/MyTitle";
import AddComponent from "../components/AddComponent";
import { Colors } from "../ui/Theme";
import MyInput from "../components/MyInput";
import { AntDesign } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const AvailableStockScreen = () => {
  const [date, setDate] = useState(new Date());
  return (
    <LinearGradient
      colors={[Colors.g1, Colors.g2, Colors.g3]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <MyInput
              placeholder="Search Your Product"
              customStyle={styles.searchInput}
            />
            <Pressable>
              <AntDesign
                name="search1"
                size={24}
                color="black"
                style={styles.search}
              />
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AvailableStockScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },

  searchInput: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  search: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignSelf: "center",
    padding: 16,
    marginTop: 11,
    marginRight: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
