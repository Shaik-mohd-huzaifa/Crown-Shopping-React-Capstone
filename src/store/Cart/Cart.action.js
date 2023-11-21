import {CartActionTypes} from './Cart.types'

export const setAddCartItems = (payload) => {
    return {
        type: CartActionTypes.ADDITEMSTOCART,
        payload
    }
}

export const setCartIconVisibilty = (payload) => {
    return {
        type: CartActionTypes.TOGGLECARTICON,
        payload
    }
}