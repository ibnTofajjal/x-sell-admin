import { StyleSheet, Text, View } from "react-native";
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
        <MyInput placeholder={"Email"} />
        <MyInput placeholder={"Password"} />
        <MyButton title={"Login"} />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
