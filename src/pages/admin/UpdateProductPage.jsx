
import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/myContext";
import { Timestamp , doc, getDoc, setDoc} from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/firebase";
import Loader from "../../components/loader/loader";
import { useNavigate, useParams } from "react-router-dom";


const categoryList = [
    {
        name: "fashion"
    },
    {
        name: "shirt"
    },
    {
        name: "jacket"
    },
    {
        name: "mobile"
    },
    {
        name: "laptop"
    },
    {
        name: "shoes"
    },
    {
        name: "home"
    },
    {
        name: "land"
    },
    {
        name: "books"
    }, {
        name: "Electronics"
    },
]

const UpdateProductPage = () => {
   const context = useContext(MyContext)
   const {loading, setLoading, getAllProductFunction  } = context;

   //navigate
   const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    
   //product state
   const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric"
            }
        )
   });

   //Get Single Product functionn 
   // Get Single Product function
const getSingleProductFunction = async () => {
    setLoading(true);
    try {
        const productTemp = await getDoc(doc(fireDB, "products", id));

        // Check if the document exists
        if (productTemp.exists()) {
            const product = productTemp.data();
            console.log(product);

            setProduct({
                title: product?.title,
                price: product?.price,
                productImageUrl: product?.productImageUrl,
                category: product?.category,
                description: product?.description,
                quantity: product?.quantity,
                time: product?.time,
                date: product?.date,
            });
        } else {
            console.log("No such product found");
            toast.error("No product found❌");
        }
    } catch (error) {
        console.log(error);
        toast.error("Failed to Update Product❌");
    } finally {
        setLoading(false);
    }
};


const updateProductFunction = async () => {
    setLoading(true);
    try {
        await setDoc(doc(fireDB, 'products', id), product);
        toast.success("Product updated successfully ✅.");
        getAllProductFunction(); // Ensure the spelling is correct
        navigate('/admindashboard');
    } catch (error) {
        console.error("Error updating product:", error);
        toast.error("Failed to update product ❌");
    } finally {
        setLoading(false); // Ensures loading is disabled in both success and failure cases
    }
};

useEffect(() => {
    if (id) {
        getSingleProductFunction();
    }
}, [id]); // Adding `id` as a dependency to ensure it’s defined

    return ( 
        <div>
           <div className="flex justify-center items-center h-screen">
                {/*loading */}
                {loading && <Loader/>}
                {/*login */}
                <div className="login_form bg-gray-200 px-8 py-6 border border-gray-100 rounded-xl shadow-md">

                    {/*Top Heading */}
                    <div className="mb-5">
                        <h2 className="text-center text-2xl font-bold text-gray-800">
                            Update Product
                        </h2>
                    </div>

                    {/* Input One */}
                    <div className="mb-3">
                        <input 
                            type="text"
                            name='title' 
                            value={product.title}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                title: e.target.value
                              })
                            }
                            }
                            placeholder='Product Title'
                            className='bg-gray-400 text-gray-900 border-gray-800 px-3 py-2 w-96 rounded-md outline-none placeholder-blue-gray-900'
                            />
                    </div>

                      {/* Input Two */}
                      <div className="mb-3">
                        <input 
                            type="number"
                            name='price'
                            value={product.price}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                price: e.target.value
                              })
                            }
                            } 
                            placeholder='Product Price'
                            className='bg-gray-400 text-gray-900 border-gray-800 px-3 py-2 w-96 rounded-md outline-none placeholder-blue-gray-900'
                            />
                     </div>

                      {/* Input three */}
                      <div className="mb-3">
                        <input 
                            type="text"
                            name='productImageUrl' 
                            value={product.productImageUrl}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                productImageUrl: e.target.value
                              })
                            }
                            }
                            placeholder='Product Image Url'
                            className='bg-gray-400 text-gray-900 border-gray-800 px-3 py-2 w-96 rounded-md outline-none placeholder-blue-gray-900'
                            />
                     </div>

                      {/* Input Four */}
                      <div className="mb-3">
                        <select 
                            type="text"
                            name='category' 
                            value={product.category}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                category: e.target.value
                              })
                            }
                            }
                            placeholder='Product Title'
                            className='bg-gray-400 text-gray-900 border-gray-800 px-3 py-2 w-full rounded-md outline-none'>
                                <option disabled>Select a Product Category</option>
                                {categoryList.map((value, index) => {
                                  const {name} = value
                                  return(
                                    <option key={index} value={name} className='first-letter:uppercase'>{name}</option>
                                  )
                                }
                                )}
                            </select>
                     </div>
                    
                     {/*Input five */}
                     <div className="mb-3">
                        <textarea 
                            name='description' 
                            value={product.description}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                description: e.target.value
                              })
                            }
                            }
                            placeholder='Product Description'
                            rows={5}
                            className='bg-gray-400 text-gray-900 border-gray-800 px-3 py-2 w-96 rounded-md outline-none placeholder-blue-gray-900'
                          ></textarea>
                     </div>

                     {/*AddProduct Button */}
                     <div className="mb-3">
                        <button
                            onClick={updateProductFunction}
                             className="bg-gray-400 hover:bg-gray-500 w-full text-gray-900 text-center py-2 font-bold rounded-md">
                            Add Product
                        </button>
                     </div>


                </div>
           </div>
        </div>
     );
}
 
export default UpdateProductPage;