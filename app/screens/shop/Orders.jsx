import React, {useEffect} from 'react'
import { FlatList, View, Text, StyleSheet,
  TouchableOpacity } from 'react-native'
import { useSelector } from "react-redux"
import { MenuOutlined } from '@ant-design/icons'
import OrderItem from "../../components/shop/OrderItem"


export default function Orders({navigation}) {
  const orders = useSelector(state => state.orders.orders)

  
  useEffect(() => {
    navigation.setOptions({
      title: "Orders",
      headerLeft: () => {
        return <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <MenuOutlined style={{color: "white", marginLeft: 10}} />
        </TouchableOpacity>
      }
    })
  }, [])

  return (
    <View>
      <FlatList data={orders}
        renderItem={({item}) => {
          return <OrderItem order={item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({

})