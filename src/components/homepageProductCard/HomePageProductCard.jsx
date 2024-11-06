import { useNavigate } from "react-router-dom";
import productData from "./productData";
import MyContext from "../../context/myContext";
import { useContext } from "react";
import Loader from "../loader/loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const HomePageProductCard = () => {
    const navigate = useNavigate()
    const context = useContext(MyContext)
    const {getAllProduct, loading} = context

    const cartItems = useSelector((state) => {
        console.log('Redux State:', state);
        return state.cart; 
    })
    const dispatch = useDispatch();

    const addCart = (item) => {
      console.log("item:", item, "cartItems:", cartItems);
      dispatch(addToCart(item));
      toast.success('Added to Your Cart')
      console.log("added successfully✔");
      
    }

    const deleteCart = (item) => {
        //console.log(item);
        dispatch(deleteFromCart(item));
        toast.success('Removed from Cart')
        console.log("Removed successfully💚");
      }
      
      //console.log(cartItems);
      
      useEffect(() => {
            localStorage.setItem('cart', JSON.stringify(cartItems))
      }, [cartItems])
    
    return ( 
        <div className="mt-10">
            {/* heading */}
            <div>
                <h1 className="text-center mb-5 text-2xl font-semibold">Products with High Demand</h1>
            </div>
            {/* main 1*/}
            <section className="text-gray-500 body-font">
                 {/* main 2*/}
                <div className="container px-5 py-5 mx-auto">
                   {/*loader */}
                   <div className="flex justify-center">
                    {loading && <Loader/>}
                   </div>
                     {/* main 3*/}
                    <div className="flex flex-wrap m-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                          const {id, title, price, productImageUrl} = item
                            return(
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img onClick={() => navigate(`/productinfo/${id}`)}
                                        src={productImageUrl} alt="Shaybah💦" 
                                        className="lg:h-80 h-96 w-full" />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-4">
                                                Nass Collections
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                #{price}
                                            </h1>
                                            <div className="flex justify-center">
                                                    {cartItems  && cartItems.some(product => product.id === item.id) ? (
                                                        <button 
                                                            onClick={() => deleteCart(item)} 
                                                            className="bg-customStone hover:bg-gray-500 w-full text-white"
                                                        >
                                                            Remove from cart
                                                        </button>
                                                    ) : (
                                                        <button 
                                                            onClick={() => addCart(item)} 
                                                            className="bg-customStone hover:bg-gray-500 w-full text-white"
                                                        >
                                                            Add to cart
                                                        </button>
                                                    )}

                                                    
                                            </div>

                                                
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default HomePageProductCard;