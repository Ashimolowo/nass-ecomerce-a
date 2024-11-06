import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../../context/myContext';
import { useContext } from 'react';

const OrderDetail = () => {
    const context = useContext(MyContext);
    const { getAllOrder, deletProduct } = context;
    const navigate = useNavigate();

    // Handle delete product (add delete logic here)
    // const deleteProduct = (id) => {
    //     console.log("Product to delete:", id);
    //     // Your delete logic here, e.g., call an API to delete from Firestore
    // }

    return (
        <div className="">
            <div className="py-5">
                {/* Text */}
                <h1 className="text-xl text-gray-400 font-bold">All Orders</h1>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">``
                <table className="w-full text-left border border-collapse sm:border-separate border-customStone text-black">
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">5. No</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#afaead]">Order id</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Image</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Title</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Category</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Price</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Quantity</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Total Price</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Status</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Name</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Address</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Pincode</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Phone Number</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Email</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Date</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400 text-gray-100 bg-[#a19f9c]">Action</th>
                        </tr>

                        {/* Loop through orders */}
                        {getAllOrder.map((order, index) => {
                            return (
                                <>
                                    {order.cartItems.map((item, index) => {
                                        const { id, title, price, category, quantity, date, productImageUrl, status } = item;
                                        
                                        return (
                                            <tr key={index} className="text-gray-400">
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-red-200">{index + 1}</td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{id}</td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 first-letter:uppercase">
                                                    <div className="flex justify-center">
                                                        <img src={productImageUrl} alt="" className="w-20" />
                                                    </div>
                                                </td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{title}</td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{category}</td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 first-letter:uppercase">₦{quantity * price}</td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{quantity}</td>
                                                
                                                {/* <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 first-letter:uppercase">₦{quantity * price}</td> */}
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{order.status}</td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{order.addressInfo.name}</td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{order.addressInfo.address}</td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{order.addressInfo.pincode}</td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{order.addressInfo.mobileNumber}</td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{order.email}</td>
                                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 cursor-pointer">{order.date}</td>
                                                
                                                <td
                                                    onClick={() => {
                                                        console.log("clicked");
                                                        navigate(`/updateproductpage/${id}`);
                                                    }}
                                                    className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-green-600 cursor-pointer"
                                                >
                                                    Edit
                                                </td>
                                                <td
                                                    onClick={() => deletProduct(order.id)}
                                                    className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-red-600 cursor-pointer"
                                                >
                                                    Delete
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderDetail;
