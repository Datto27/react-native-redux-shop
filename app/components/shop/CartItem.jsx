import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default function CartItem({product, onRemove=undefined}) {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.data}>
        <Text style={styles.quantity}>{product.quantity}</Text> 
        <Text style={styles.title}>{product.productTitle}</Text>
      </Text>
      <View style={styles.data}>
        <Text style={styles.amount}>${product.productPrice}</Text>
        {onRemove && (
          <TouchableOpacity style={styles.deleteBtn} onPress={onRemove}>
            <Icon name="trash"
              type="font-awesome"
              color="red"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 4},
    elevation: 10,
  },
  data: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "josefin-medium",
    color: "#888",
    marginRight: 5,
  },
  title: {
    fontFamily: "josefin-bold",
    fontSize: 17,
  },
  amount: {
    fontFamily: "josefin-medium",
    fontSize: 17,
  },
  deleteBtn: {
    marginLeft: 20,
  }
})