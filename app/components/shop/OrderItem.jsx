import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import colors from '../../constants/colors'
import CartItem from "../shop/CartItem"

export default function OrderItem({order}) {
  const [showDetails, setShowDetails] = useState(false)

  // useEffect(() => {
  //   console.log(order)
  // }, [])

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${order.totalAmount}</Text>
        <Text style={styles.date}>{order.readableDate}</Text>
      </View>
      <Button title="Show Details"  color={colors.primary} 
        onPress={() => {
          setShowDetails(!showDetails)
        }} />
      {showDetails && <View>
        {order.items.map(cartItem => {
          return <CartItem product={cartItem} />
        })}
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10, 
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: 10,
  },
  totalAmount: {
    fontFamily: "josefin-bold",
    fontSize: 17,
  },
  date: {
    fontSize: 16,
    fontFamily: "josefin-medium",
    color: "#888",
  }
})