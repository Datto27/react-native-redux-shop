import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import ShopNavigator from './app/routes/ShopNavigator';
import AppLoading from "expo-app-loading"
import { useFonts } from '@expo-google-fonts/inter';
import productsReducer from "./app/store/reducers/products"
import cartReducer from "./app/store/reducers/cart"
import orderReducer from "./app/store/reducers/orders"
import ShopDrawerNavigator from './app/routes/ShopDrawerNavigator';

// console.log(orderReducer, cartReducer)

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function App() {
  let [fontsLoaded] = useFonts({
    "josefin-medium": require("./app/assets/fonts/JosefinSans-Medium.ttf"),
    "josefin-bold": require("./app/assets/fonts/JosefinSans-Bold.ttf")
  })

  return (
    <Provider store={store}>
      <ShopDrawerNavigator /> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
