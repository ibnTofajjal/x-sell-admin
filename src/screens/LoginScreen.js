import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { Colors } from "../ui/Theme";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <LinearGradient
      colors={[Colors.paste, Colors.cream, Colors.snow]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <Image
          source={require("../../assets/images/Login.png")}
          style={styles.imageStyle}
          resizeMode="contain"
        />

        <View>
          <MyInput
            placeholder={"Enter Your Email"}
            customStyle={styles.inputStyle}
          />
          <MyInput
            placeholder={"Password"}
            customStyle={styles.inputStyle}
            secureTextEntry={true}
          />
          <MyButton title={"Login"} customStyle={styles.buttonStyle} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: 20,
  },
  inputStyle: {
    marginHorizontal: 50,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    borderBottomWidth: 3,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 1.25,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonStyle: {
    alignSelf: "center",
    marginTop: 20,
    borderWidth: 3,
    borderColor: Colors.lightTransparent,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    elevation: 5,
    width: 120,
    shadowColor: "black",
    shadowOpacity: 1.25,
    shadowOffset: { width: 0, height: 2 },
  },
});
