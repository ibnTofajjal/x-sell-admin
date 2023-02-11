import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../ui/Theme";
import MyButton from "../components/MyButton";
import MyTitle from "../components/MyTitle";

const AddScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[Colors.g1, Colors.g2, Colors.g3]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.categoriesContainer}>
              <Pressable style={styles.elementsContainer}>
                <Image
                  source={require("../../assets/images/store.png")}
                  style={styles.imageStyle}
                />
                <MyButton
                  customTextStyle={{ color: "black" }}
                  customStyle={styles.titleContainer}
                  title={"Create Shop"}
                  onPress={() => navigation.navigate("AddShopScreen")}
                />
              </Pressable>

              <Pressable style={styles.elementsContainer}>
                <Image
                  source={require("../../assets/images/Product.png")}
                  style={styles.imageStyle}
                />
                <MyButton
                  customTextStyle={{ color: "black" }}
                  customStyle={styles.titleContainer}
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
                  customTextStyle={{ color: "black" }}
                  customStyle={styles.titleContainer}
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
                  customTextStyle={{ color: "black" }}
                  customStyle={styles.titleContainer}
                  title={"Stock History"}
                  onPress={() => navigation.navigate("StockHistoryScreen")}
                />
              </Pressable>
              <Pressable style={styles.elementsContainer}>
                <Image
                  source={require("../../assets/images/addStock.png")}
                  style={styles.imageStyle}
                />
                <MyButton
                  customTextStyle={{ color: "black" }}
                  customStyle={styles.titleContainer}
                  title={"Add Stock"}
                  onPress={() => navigation.navigate("AddStockScreen")}
                />
              </Pressable>
            </View>
          </View>
        </ScrollView>
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

  titleContainer: {
    backgroundColor: Colors.white,
    borderRadius: 15,
  },
});
