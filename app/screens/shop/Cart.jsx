import React from 'react'
import { View, Text, FlatList, Button, StyleSheet, 
  Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../../components/shop/CartItem'
import colors from '../../constants/colors'
import * as cartActions from "../../store/actioins/cart"
import * as ordersActions from "../../store/actioins/orders"


export default function Cart({}) {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const cartItems = useSelector(state => {
    const transormedCartItems = []
    for (const key in state.cart.items) {
      transormedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      })
    }
    return transormedCartItems
  })
  const dispatch = useDispatch()

  return <View style={styles.container}>
    <View style={styles.summery}>
      <Text style={styles.summeryText}>Total: 
        <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
      </Text>
      <Button title="Order Now" disabled={cartItems.length === 0}
        onPress={() => {
          dispatch(ordersActions.addOrder(cartItems, cartTotalAmount))
        }} />
      {/* <Pressable disabled={cartItems.length === 0}>
        <Text>Order Now</Text>
      </Pressable> */}
    </View>
    <Text>{}</Text>
    <FlatList data={cartItems}
      renderItem={({item}) => {
        // console.log(item)
        return <CartItem product={item} onRemove={() => {
          dispatch(cartActions.removeFromCart(item.productId))
        }} />
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summery: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {width:0, height: 2},
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summeryText: {
    fontFamily: "josefin-bold",
    fontSize: 18,
  },
  amount: {
    color: colors.accent
  }
})