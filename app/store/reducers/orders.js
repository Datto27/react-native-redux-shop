import Order from "../../models/order"
import { ADD_ORDER } from "../actioins/orders"


const initialState = {
  orders: [],
}

export default (state=initialState, action) => {
  switch(action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().getTime().toString(),
        action.orderData.items, 
        action.orderData.amount,
        new Date()
      )
      console.log(state.orders, newOrder)
      return {
        ...state,
        orders: state.orders.concat(newOrder)
      }

    default: 
      return state
  }
}