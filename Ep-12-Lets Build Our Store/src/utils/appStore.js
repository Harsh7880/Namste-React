import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice';
export default  appStore = configureStore({
    reducer: {
        cart : cartReducer,
    }
});