import PRODUCTS from "../../data/dummy-data"
import Product from "../../models/product"
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../actioins/products"

const initailState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === "u1"), 
}

export default (state=initailState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
                new Date().getTime().toString(),
                "u1",
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                action.productData.price
              )
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts:  state.userProducts.concat(newProduct)
      }
    case UPDATE_PRODUCT:
      const updatedProducts = state.userProducts.map(product => {
        if (action.productData.id === product.id) {
          console.log(product.title, action.productData.title)
          product.title = action.productData.title
          product.description = action.productData.description
          product.imageUrl = action.productData.imageUrl
          product.price = action.productData.price
        }
        return product
      })
      
      return {
        ...state,
        userProducts: updatedProducts
      }

    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(product => product.id !== action.pid),
        availableProducts: state.availableProducts.filter(product => product.id !== action.pid)
      }
  }
  return state
}
