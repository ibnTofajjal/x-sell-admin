import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
// import { BlurView } from "@react-native-community/blur";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../ui/Theme";
import MyTitle from "../components/MyTitle";
import MyButton from "../components/MyButton";

const AddScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[Colors.g1, Colors.g2, Colors.g3]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <MyTitle title={"What's On Your Mind?"} />
          <View style={styles.categoriesContainer}>
            <Pressable style={styles.elementsContainer}>
              <Image
                source={require("../../assets/images/store.png")}
                style={styles.imageStyle}
              />
              <MyButton
                customStyle={styles.titleText}
                title={"Add Store"}
                onPress={() => navigation.navigate("AddShopScreen")}
              />
            </Pressable>

            <Pressable style={styles.elementsContainer}>
              <Image
                source={require("../../assets/images/Product.png")}
                style={styles.imageStyle}
              />
              <MyButton
                customStyle={styles.titleText}
                title={"Add Product"}
                onPress={() => navigation.navigate("AddProductScreen")}
              />
            </Pressable>

            <Pressable style={styles.elementsContainer}>
              <Image
                source={require("../../assets/images/stock.png")}
                style={styles.imageStyle}
              />
              <MyButton
                customStyle={styles.titleText}
                title={"Available Stock"}
                onPress={() => navigation.navigate("AvailableStockScreen")}
              />
            </Pressable>

            <Pressable style={styles.elementsContainer}>
              <Image
                source={require("../../assets/images/history.png")}
                style={styles.imageStyle}
              />
              <MyButton
                customStyle={styles.titleText}
                title={"Stock History"}
                onPress={() => navigation.navigate("StockHistoryScreen")}
              />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageStyle: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    // padding: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  elementsContainer: {
    marginTop: 20,
  },

  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 20,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
  },
});
