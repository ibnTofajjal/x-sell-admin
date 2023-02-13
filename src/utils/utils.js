import { AsyncStorage } from "react-native";

export const _storeData = (key, value) => {
  return AsyncStorage.setItem(key, value);
};

export const _retrieveData = (key) => {
  return AsyncStorage.getItem(key);
};
