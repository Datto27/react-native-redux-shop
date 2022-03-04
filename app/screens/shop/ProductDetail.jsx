import React from 'react'
import { View, Text, ScrollView, Image,
  StyleSheet, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as cartActions from "../../store/actioins/cart"

export default function ProductDetail({navigation, route}) {
  const selectedItem = route.params.item
  const dispatch = useDispatch()

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedItem.imageUrl}} />
      <View style={styles.actions}>
        <Button title="Add To Cart" onPress={() => {
          dispatch(cartActions.addToCart(selectedItem))
        }} />
      </View>
      <Text style={styles.price}>${selectedItem.price}</Text>
      <Text style={styles.description}>{selectedItem.description}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },  
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center"
  }
})