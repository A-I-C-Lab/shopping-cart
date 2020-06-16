import React, { createContext, useReducer } from 'react'

const initialState = {
    currentTheme: 'light',
    cart: [],
    sum: 0,
    items: [
        { id: 1, name: 'Shirt1', image: 'img1', price: 400 },
        { id: 2, name: 'Shirt2', image: 'img2', price: 400 },
        { id: 3, name: 'Shirt3', image: 'img3', price: 400 },
        { id: 4, name: 'Shirt4', image: 'img4', price: 400 },
        { id: 5, name: 'Shirt5', image: 'img5', price: 400 },
        { id: 6, name: 'Shirt6', image: 'img6', price: 400 },
        { id: 7, name: 'Shirt7', image: 'img7', price: 400 },
        { id: 8, name: 'Shirt8', image: 'img8', price: 400 },
        { id: 9, name: 'Shirt9', image: 'img9', price: 400 },
    ]
}

export const GlobalContext = createContext(initialState)

const globalReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                currentTheme: action.theme
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
            }
        default:
            return state
    }
}


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState)

    const toggleTheme = () => {
        if (state.currentTheme === "light") {
            dispatch({
                type: "TOGGLE_THEME",
                theme: 'dark'
            })
        } else {
            dispatch({
                type: "TOGGLE_THEME",
                theme: 'light'
            })
        }
    }
    const addToCart = (id, name, price) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: { id, name, price }
        })
    }
    return <GlobalContext.Provider value={{
        currentTheme: state.currentTheme,
        cart: state.cart,
        items: state.items,
        toggleTheme,
        addToCart
    }}>
        {children}
    </GlobalContext.Provider>
}