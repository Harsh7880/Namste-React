import { useDispatch, useSelector } from "react-redux"
import cartSlice from "../utils/cartSlice"
import ItemList from "./ItemList"
import { clearItem } from "../utils/cartSlice"

export default Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItem());
    }

    return(
        <div className="text-center w-6/12 m-auto p-8"> 
          <h1 className="text-2xl"> Cart </h1>

         <button onClick={handleClearCart} className="m-2 p-2 px-4 bg-slate-300 rounded-xl">Clear Cart </button>
          {
            cartItems?.map ( (item) => (
                  <ItemList key={item.card.info.name} data = {item} />
            ))
          }
          
        </div>
    )
}