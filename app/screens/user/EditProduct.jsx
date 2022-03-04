import React, {useState, useEffect, useCallback} from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView,
  Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import colors from '../../constants/colors'
import * as productActions from "../../store/actioins/products"


export default function EditProduct({navigation, route}) {
  const prodId = route.params ? route.params.item.id : ""
  const editedProduct = useSelector(state => 
    state.products.userProducts.find(prod => prod.id === prodId)
  )
  const [title, setTitle] = useState(editedProduct ? editedProduct.title:"")
  const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl:"")
  const [price, setPrice] = useState(editedProduct ? editedProduct.price:"")
  const [description, setDescription] = useState(editedProduct ? editedProduct.description:"")
  const dispatch = useDispatch()

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => {
  //       return <TouchableOpacity onPress={() => submitHandler()}>
  //         <Icon name="save" color="white" style={{marginRight:10}} />
  //       </TouchableOpacity>
  //     }
  //   })
  // }, [submitHandler])

  const submitHandler = () => {
    if (editedProduct) {
      console.log(title)
      dispatch(productActions.updateProduct(prodId, title, description, imageUrl, price))
    } else {
      dispatch(productActions.createProduct(title, description, imageUrl, price))
    }
    navigation.navigate("Your Products")
  }

  return (
    <ScrollView style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} placeholder="tite" 
          value={title} onChangeText={(val) => setTitle(val)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Image Url</Text>
        <TextInput style={styles.input} placeholder="tite" 
          value={imageUrl} onChangeText={(val) => setImageUrl(val)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Price</Text>
        <TextInput style={styles.input} placeholder="tite" keyboardType="numeric"
          value={price} onChangeText={(val) => setPrice(val)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.input} placeholder="tite" multiline
          value={description} onChangeText={(val) => setDescription(val)} />
      </View>
      <Button title="save" color={colors.primary} onPress={submitHandler} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    margin: 10,
  },
  inputContainer: {
    width: "100%",
  },
  label: {
    fontFamily: "josefin-medium",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth :1
  }
})