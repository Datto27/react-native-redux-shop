import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import ShopNavigator from './ShopNavigator'
import Orders from '../screens/shop/Orders'
import UserProducts from '../screens/user/UserProducts'
import colors from '../constants/colors'
import AdminNavigator from './AdminNavigator'

const DrawerNav = createDrawerNavigator()

export default function ShopDrawerNavigator() {
  return (
    <NavigationContainer>
      <DrawerNav.Navigator>
        <DrawerNav.Screen 
          name="Shop"
          component={ShopNavigator}
          options={{
            headerShown: false,
          }}
        />
        <DrawerNav.Screen 
          name="Orders"
          component={Orders}
          options={{
            // headerShown: false,
            headerStyle: {backgroundColor: colors.primary},
            headerTintColor: "white",
          }}
        />
        <DrawerNav.Screen 
          name="Admin"
          component={AdminNavigator}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: colors.primary},
            headerTintColor: "white",
          }}
        />
      </DrawerNav.Navigator>
    </NavigationContainer>
  )
}
