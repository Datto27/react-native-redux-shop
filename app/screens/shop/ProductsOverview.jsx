import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, 
  TouchableOpacity, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import * as cartActions from "../../store/actioins/cart"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { MenuOutlined } from '@ant-design/icons'
import colors from '../../constants/colors'


export default function ProductsOverview({navigation}) {
  const products = useSelector(state => state.products.availableProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    navigation.setOptions({
      title: "All Products",
      headerRight: () => {
        return <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <ShoppingCartOutlined style={{ marginRight: 20, color: "white", fontSize: 20 }} />
        </TouchableOpacity>
      },
      headerLeft: () => {
        return <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <MenuOutlined style={{color: "white", marginLeft: 10}} />
        </TouchableOpacity>
      }
    })
  }, [])

  const onAddToCart = (item) => {
    dispatch(cartActions.addToCart(item))
  }
  const onViewDetail = (item) => {
    navigation.navigate("Product Details", {item})
  } 

  return (
    <View style={styles.container}>
      {/* <Text style={{fontFamily:"josefin-bold"}}>Product Overview</Text> */}
      <FlatList data={products} keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ProductItem product={item} onViewDetail={() => onViewDetail(item)}>
            <Button title="Details" onPress={() => onViewDetail(item)} />
            {onAddToCart && (
              <Button title="To Cart" color={colors.primary} onPress={() => onAddToCart(item)} />
            )}
          </ProductItem>
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})