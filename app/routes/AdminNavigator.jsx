import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import UserProducts from '../screens/user/UserProducts'
import EditProduct from '../screens/user/EditProduct'
import colors from '../constants/colors'

const StackNav = createStackNavigator()

export default function AdminNavigator() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen 
        name="Your Products"
        component={UserProducts}
        options={{
          headerStyle: {backgroundColor: colors.primary},
          headerTintColor: "white",
        }}
      />
      <StackNav.Screen 
        name="Edit Product"
        component={EditProduct}
        options={{
          headerStyle: {backgroundColor: colors.primary},
          headerTintColor: "white",
        }}
      />
    </StackNav.Navigator>
  )
}
