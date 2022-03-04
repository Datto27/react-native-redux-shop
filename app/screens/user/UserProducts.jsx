import React, { useEffect } from 'react'
import { View, Text, FlatList, Button, StyleSheet,
  TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from "../../components/shop/ProductItem"
import colors from '../../constants/colors'
import * as productActions from "../../store/actioins/products"

export default function UserProducts({navigation}) {
  const userProducts = useSelector(state => state.products.userProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" color="white" style={{marginLeft:10}} />
        </TouchableOpacity>
      },
      headerRight: () => {
        return <TouchableOpacity onPress={() => navigation.navigate("Edit Product")}>
          <Icon name="edit" color="white" style={{marginRight:10}} />
        </TouchableOpacity>
      }
    })
  }, [])

  const deleteProduct = (item) => {
    dispatch(productActions.deleteProduct(item.id))
    navigation.navigate("Your Products")
  }
  const editProduct = (item) => {
    // console.log(item)
    navigation.navigate("Edit Product", {item})
  } 
  const onViewDetail = (item) => {
    navigation.navigate("Product Details", {item})
  }

  return (
    <View style={styles.container}> 
      <FlatList data={userProducts}
        renderItem={({item}) => {
          return <ProductItem product={item} navigation={navigation}
              onViewDetail={() => onViewDetail(item)}>
            <Button title="Edit" onPress={() => editProduct(item)} />
            <Button title="Delete" color="red" onPress={() => deleteProduct(item)} />
          </ProductItem>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})