import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { Colors } from "../ui/Theme";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("admin".length === username.length);
    console.log("admin".length === password.length);

    fetch("http://173.82.175.143:3000/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          navigation.navigate("AddScreen");
        } else {
          Alert.alert("Error", "Invalid email or password");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <LinearGradient
      colors={[Colors.g1, Colors.g2, Colors.g3]}
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
            value={username}
            onChangeText={(t) => setUsername(t)}
          />
          <MyInput
            placeholder={"Password"}
            customStyle={styles.inputStyle}
            // secureTextEntry={true}
            value={password}
            onChangeText={(t) => setPassword(t)}
          />
          <MyButton
            title={"Login"}
            customStyle={styles.buttonStyle}
            onPress={handleLogin}
          />
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
    height: 60,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    borderBottomWidth: 3,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonStyle: {
    alignSelf: "center",
    color: Colors.white,
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
