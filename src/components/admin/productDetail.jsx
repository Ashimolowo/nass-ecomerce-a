import { Link, useNavigate } from 'react-router-dom';
import Category from './../category/Category';
import MyContext from '../../context/myContext';
import { useContext } from 'react';
import Loader from './../loader/loader';
import { deleteDoc, doc } from 'firebase/firestore';
import { fireDB } from '../../firebase/firebase';
import toast from 'react-hot-toast/headless';

const ProductDetails = () => {
    const context = useContext(MyContext);
    const {loading, setLoading, getAllProduct, getAllProductFunction} = context;

    const navigate = useNavigate();

    console.log("getproductsarray: ", getAllProduct);

    ///Delete product
    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products',  String(id)))
            toast.success('Product Deleted successfully ✅')
            getAllProductFunction();
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    return ( 
        <div className="">
            <div className="py-5 flex justify-between items-center">
                {/*Text*/}
                <h1 className="text-xl text-gray-400 font-bold">All Product</h1>
                {/*add product button */}
               <Link to={'/addproductpage'}> <button className="px-5 py-2 bg-gray-200 border border-gray-300 rounded-lg">Add Product</button></Link>
            </div>

                    {/*loading */}
                    <div className="flex justify-center relative top-20">
                    {loading && <Loader/>}
                    </div>

            {/*table */}
            <div className="w-full overflow-x-auto mb-5">
                <table className="w-full text-left border border-collapse sm:border-separate border-customStone text-black">
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">5. No</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100 bg-[#afaead]">Product Image</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100 bg-[#a19f9c]">Product Title</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100 bg-[#a19f9c]">Product Price</th>   
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100 bg-[#a19f9c]">Product Category</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100 bg-[#a19f9c]">Product Date</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100 bg-[#a19f9c]">Action</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100 bg-[#a19f9c]">Action</th>
                        </tr>
                        {/* <tr className="text-gray-400">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-red-200">1.</td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 first-letter:uppercase">{name}</td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800  cursor-pointer">Title</td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">Price</td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 first-letter:uppercase">Category</td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">Date</td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-green-600 cursor-pointer">Edit</td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-red-600 cursor-pointer">Delete</td>
                        </tr> */}

                        {getAllProduct.map((item, index) => {
                            const {id, title, price, category, date, productImageUrl} = item
                                return (
                                    <tr key={index} className="text-gray-400">
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-red-200">{index + 1}</td>
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 first-letter:uppercase">
                                            <div className="flex justify-center">
                                                <img src={productImageUrl} alt="" className="w-20" />
                                            </div>
                                        </td>
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800  cursor-pointer">{title}</td>
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">₦{price}</td>
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 first-letter:uppercase">{category}</td>
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{date}</td>
                                        <td onClick={() =>{
                                            console.log("clicked");
                                            
                                            navigate(`/updateproductpage/${id}`)}} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-green-600 cursor-pointer">Edit</td>
                                        <td  onClick={() => deleteProduct(id)}
                                        
                                        className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-red-600 cursor-pointer">Delete</td>
                                    </tr>
                                )
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default ProductDetails;