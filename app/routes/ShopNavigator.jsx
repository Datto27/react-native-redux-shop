import React from 'react'
import { View, Text, Platform } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import ProductsOverview from '../screens/shop/ProductsOverview';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../constants/colors';
import ProductDetail from '../screens/shop/ProductDetail';
import { MenuOutlined } from "@ant-design/icons"
import Cart from '../screens/shop/Cart';

const StackNav = createStackNavigator()

const headerStyling = {
  headerStyle: {backgroundColor: colors.primary},
  headerTintColor: "white",
}

export default function ShopNavigator() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen 
        name="Products Overview"
        component={ProductsOverview}
        options={
          headerStyling
        }
      />
      <StackNav.Screen 
        name="Product Details"
        component={ProductDetail}
        options={
          headerStyling
        }
      />
      <StackNav.Screen 
        name="Cart"
        component={Cart}
        options={
          headerStyling
        }
      />
    </StackNav.Navigator>
  )
}


