import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import MyTitle from "../components/MyTitle";
import AddComponent from "../components/AddComponent";
import { Colors } from "../ui/Theme";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const AddProductScreen = () => {
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
                source={require("../../assets/images/Product.png")}
                style={{
                  height: 250,
                  width: 250,
                  alignSelf: "center",
                  marginBottom: 20,
                  marginTop: 20,
                }}
              />
              <MyInput
                placeholder={"Company Name"}
                customStyle={styles.inputStyle}
              />
              <MyInput
                placeholder={"Product Name / Size"}
                customStyle={styles.inputStyle}
              />
              <MyInput placeholder={"Code"} customStyle={styles.inputStyle} />
            </View>
            <MyButton
              title={"Add Product"}
              customStyle={styles.buttonStyle}
              customTextStyle={{ color: Colors.black }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AddProductScreen;

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
    backgroundColor: "#FFD777",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
});
