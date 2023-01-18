import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import MyTitle from "../components/MyTitle";
import AddComponent from "../components/AddComponent";
import { Colors } from "../ui/Theme";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const AddShopScreen = () => {
  return (
    <LinearGradient
      colors={[Colors.g1, Colors.g2, Colors.g3]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            {/* <MyTitle title={"Add Store"} /> */}
            <View>
              <Image
                source={require("../../assets/images/store.png")}
                style={{ height: 300, width: 300, alignSelf: "center" }}
              />
              <MyInput
                placeholder={"Enter Shop Name"}
                customStyle={styles.inputStyle}
              />
              <MyInput
                placeholder={"Store Password"}
                customStyle={styles.inputStyle}
              />
            </View>
            <MyButton title={"Add Store"} customStyle={styles.buttonStyle} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AddShopScreen;

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
  },
  inputStyle: {
    marginHorizontal: 50,
    height: 60,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonStyle: {
    alignSelf: "center",
    height: 50,
    backgroundColor: "#3A3F46",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
});
