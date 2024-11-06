


import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
console.log("initialState:", initialState);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id)
        },
        increaseQuantity: (state, action) => {
          state = state.map(item => {
             if (item.id === action.payload) {
                  item.quantity++
             }
             return item;
          })
        },
        decreaseQuantity: (state, action) => {
            state = state.map(item => {
               if (item.quantity !== 1) {
                        if (item.id === action.payload) {
                            item.quantity--
                    }
               }
               return item;
            })
          } 
    }
})

//Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;







// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             const existingItem = state.find(item => item.id === action.payload.id);
//             if (existingItem) {
//                 existingItem.quantity += 1; // Increase quantity if item already exists
//             } else {
//                 state.push({ ...action.payload, quantity: 1 }); // Initialize quantity
//             }
//         },
//         deleteFromCart(state, action) {
//             return state.filter(item => item.id !== action.payload.id); // Use strict equality
//         },
//         increaseQuantity(state, action) {
//             const item = state.find(item => item.id === action.payload);
//             if (item) {
//                 item.quantity = (item.quantity || 1) + 1; // Ensure quantity is defined
//             }
//         },
//         decreaseQuantity(state, action) {
//             const item = state.find(item => item.id === action.payload);
//             if (item && item.quantity > 1) {
//                 item.quantity--;
//             }
//         },
//     }
// });

// // Action creators are generated for each case reducer function
// export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

// export default cartSlice.reducer;
