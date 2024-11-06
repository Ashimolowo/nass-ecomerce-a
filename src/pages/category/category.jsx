import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/myContext";
import { useContext, useEffect } from "react";
import Loader from './../../components/loader/loader';
import ProductInfo from './../productInfo/productInfo';
import { useDispatch, useSelector } from "react-redux";
import { addToCart,  deleteFromCart } from "../../redux/cartSlice";


const CategoryPage = () => {
    const {categoryname} = useParams()
    const context = useContext(MyContext);
    const {getAllProduct, loading} = context;

    const navigate = useNavigate();

    const filterProduct = getAllProduct.filter((obj) => obj.category.includes(categoryname))
    
    
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
        <Layout className="mt-10">
            {/*Heading */}
            <div className="">
              <h1 className="text-center mb-5 text-2xl font-semibold first-letter:uppercase"> {categoryname} </h1>
            </div>

            {/*main */}
            {
    loading ? (
        <div className="flex justify-center">
            <Loader />
        </div>
    ) : (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4 justify-center">
                    {filterProduct.length > 0 ? (
                        filterProduct.map((item, index) => {
                            const { id, title, price, productImageUrl } = item;
                            console.log(item);
                            
                            return (
                                <div key={index} className="w-full p-4 md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden">
                                        <img 
                                            src={productImageUrl} 
                                            onClick={() => navigate(`ProductInfo/${id}`)}
                                            className="lg:h-80 h-96 w-full"
                                            alt="Product Image"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400">
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
                            );
                        })
                    ) : (
                        <div className="text-center">
                            <div className="flex justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png" alt="No product found" className="mb-2" />
                            </div>
                            <h1 className="text-black text-xl">No {categoryname} Product Found</h1>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

                       
        </Layout>
     );
}
 
export default CategoryPage;