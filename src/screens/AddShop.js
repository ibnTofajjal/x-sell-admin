import React, { useState } from "react";

import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import { Colors } from "../ui/Theme";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { apiService } from "../services/APIService";

const AddShopScreen = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    try {
      const result = await apiService.createUser({
        fullName,
        username,
        password,
      });

      if (result.status === "success") {
        Alert.alert("Success", "User created successfully");
      } else {
        Alert.alert("Error", result.message);
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <LinearGradient
      colors={[Colors.g1, Colors.g2, Colors.g3]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Image
                source={require("../../assets/images/store.png")}
                style={{ height: 300, width: 300, alignSelf: "center" }}
              />
              <MyInput
                placeholder={"Shop Name"}
                customStyle={styles.inputStyle}
                value={fullName}
                onChangeText={(t) => setFullName(t)}
              />
              <MyInput
                placeholder={"Shop Username"}
                customStyle={styles.inputStyle}
                value={username}
                onChangeText={(t) => setUsername(t)}
              />
              <MyInput
                placeholder={"Shop Password"}
                customStyle={styles.inputStyle}
                value={password}
                onChangeText={(t) => setPassword(t)}
              />
            </View>
            <MyButton
              onPress={createUser}
              title={"Add Shop"}
              customStyle={styles.buttonStyle}
            />
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
