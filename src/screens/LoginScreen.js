import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
// import { AsyncStorage } from "react-native";
import { _retrieveData, _storeData } from "../utils/utils";

import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { Colors } from "../ui/Theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { apiService } from "../services/APIService";
import { authService } from "../services/authService";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hydrate = async () => {
      try {
        const token = await _retrieveData("token");
        if (!token) {
          throw new Error("No token");
        }
        authService.setToken(token);
        navigation.navigate("AddScreen");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    hydrate();
  }, []);

  const handleLogin = () => {
    setIsLoading(true);

    apiService
      .login(username, password)
      .then(async (data) => {
        if (data.status === "success") {
          await _storeData("token", data.data.accessToken);
          authService.setToken(data.data.accessToken);
          navigation.navigate("AddScreen");
        } else {
          Alert.alert("Error", "Invalid email or password");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
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
            secureTextEntry={true}
            value={password}
            onChangeText={(t) => setPassword(t)}
          />
          <MyButton
            title={"Login"}
            disabled={isLoading}
            customStyle={
              isLoading
                ? { ...styles.buttonStyle, backgroundColor: Colors.red }
                : styles.buttonStyle
            }
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
