import React from 'react'
import { View, Text, Image, StyleSheet, Button,
  TouchableOpacity, TouchableWithoutFeedback,
  Platform } from 'react-native'
import colors from "../../constants/colors"

export default function ProductItem({children, navigation, product, onViewDetail}) {
  let TouchableCmp = TouchableOpacity
  
  // console.log(children)

  if (Platform.OS == "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableWithoutFeedback
  }

  return (
    <TouchableCmp style={styles.product} onPress={onViewDetail}>
      {/* {console.log(product)} */}
      <Image style={styles.image} source={{uri: product.imageUrl}} />
      <View style={styles.details}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <View style={styles.actions}>
        {children}
      </View>
    </TouchableCmp>
  )
}

const styles = StyleSheet.create({
  product: {
    height: 300,
    padding: 10,
    margin: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {width:0, height:2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "60%"
  },
  details: {
    justifyContent: "center",
    alignItems: "center",
    height: "25%"
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }
})