import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddShopScreen from "./src/screens/AddShop";
import LoginScreen from "./src/screens/LoginScreen";
import AddProductScreen from "./src/screens/AddProduct";
import AddScreen from "./src/screens/AddScreen";
import AvailableStockScreen from "./src/screens/AvailableStockScreen";
import StockHistoryScreen from "./src/screens/StockHistoryScreen";
import AddStockScreen from "./src/screens/AddStockScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
        <Stack.Screen name="AddShopScreen" component={AddShopScreen} />
        <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
        <Stack.Screen name="AddStockScreen" component={AddStockScreen} />

        <Stack.Screen
          name="AvailableStockScreen"
          component={AvailableStockScreen}
        />
        <Stack.Screen
          name="StockHistoryScreen"
          component={StockHistoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
