import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import { fireDB } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Loader } from "lucide-react";
import MyContext from "../../context/myContext";
import productData from './../../components/homepageProductCard/productData';
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductInfo = () => {
    const context = useContext(MyContext)
    const {loading, setLoading } = context

    const [product, setProduct] = useState('')

    const {id} = useParams()
    //console.log(product)
    
    //getProductData;
    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id))
            setProduct({...productTemp.data(), id: productTemp.id});
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const addCart = (item) => {
      //console.log(item)
      dispatch(addToCart(item))
      toast.success("Added to cart")
    }
    
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed from cart")
    }
    //console.log(cartItem)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])


    useEffect(() => {
        getProductData()
    }, [])
    return ( 
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-200">
                { loading ? 
                    <>
                        <div className="flex justify-center">
                            <Loader/>
                        </div>
                    </> :
                    
                    <>
                        <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                        <div className="">
                            <div className="">
                            <img src={product?.productImageUrl}
                             alt="" className="w-full lg:h-[39em] rounded-lg" />
                            </div>
                        </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6">
                                    <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide">
                                    {product?.title}
                                    </h2>
                                    <div className="flex flex-wrap items-center mb-6">
                                        <ul className="flex mb-4 mr-2 lg:mb-0">
                                              <a href=""> <li><i className='bx bx-star'></i></li></a>
                                             <a href=""> <li><i className='bx bx-star'></i></li></a>
                                             <a href=""> <li><i className='bx bx-star'></i></li></a>
                                             <a href=""> <li><i className='bx bx-star'></i></li></a>
                                        </ul>
                                    </div>
                                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                                        <span> ₦{product?.price}</span>
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-600">
                                        Description
                                    </h2>
                                    <p>
                                    {product?.description}
                                     </p>
                                </div>
                                <div className="mb-6" />
                                <div className="flex flex-wrap items-center mb-6">
                                
                                                    {cartItems.some((p) => p.id === product.id ) ? (
                                                        <button 
                                                            onClick={() => deleteCart(product)} 
                                                            className="bg-customStone hover:bg-gray-500 w-full text-white"
                                                        >
                                                            Remove from cart
                                                        </button>
                                                    ) : (
                                                        <button 
                                                            onClick={() => addCart(product)} 
                                                            className="bg-customStone hover:bg-gray-500 w-full text-white"
                                                        >
                                                            Add to cart
                                                        </button>
                                                    )}

                                                    
                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </>
                    
                    }
                
            </section>
        </Layout> 
     );
}
 
export default ProductInfo;