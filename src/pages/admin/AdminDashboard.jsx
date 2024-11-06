import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductDetails from './../../components/admin/productDetail';
import OrderDetail from './../../components/admin/orderDetail';
import { useContext } from "react";
import MyContext from "../../context/myContext";
import UserDetail from "../../components/admin/userDetail";


const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(MyContext);
    const {getAllProduct, getAllOrder, getAllUser} = context;
     console.log(getAllProduct.length, getAllOrder.length, getAllUser.length);
     
    
    
    return ( 
        <div>
           {/*Top */}
           <div className="top mb-5 px-5 mt-5">
            <div className="bg-[#c9c6c3] py-5 border border-customStone border-opacity-25 rounded-lg">
                <h1 className="text-center text-2xl font-bold text-black">
                    Admin Dashboard
                </h1>
            </div>
           </div>

           <div className="px-5">
            {/*Mid */}
            <div className="mid mb-5">
                {/* main */}
                <div className="bg-[#c9c6c3] py-5 rounded-xl border border-customStone border-opacity-25">
                    {/*image*/}
                    <div className="flex justify-center">
                        <img src="data:image/jpeg;base64,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" alt="Shaybah💦" className="" />
                    </div>
                    {/*text */}
                    <div className="">
                        <h1 className="text-center text-lg text-gray-800"><span className="font-bold">Name :</span>{user.name}</h1>
                        <h1 className="text-center text-lg text-gray-800"><span className="font-bold">Email :</span>{user.email}</h1>
                        <h1 className="text-center text-lg text-gray-800"><span className="font-bold">Date :</span>{user.date}</h1>
                        <h1 className="text-center text-lg text-gray-800"><span className="font-bold">Role :</span>{user.role.toUpperCase()}</h1>
                    </div>
                </div>
            </div>
           </div>

           {/* Bottom */}
           <div className="px-5">
            <Tabs>
                  <TabList className="flex flex-wrap -m-4 text-center justify-center">
                {/*Total Products */}
                     <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                    <div className="border bg-[#c9c6c3] hover:bg-gray-300 border-gray-200 px-4 py-3 rounded-xl">
                    <div className="text-gray-800 w-12 h-12 mb-3 inline-block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-shopping-basket"
                            >
                                <path d='m5 11 4-7'/>
                                <path d='m19 11-4-7'/>
                                <path d='M2 11h20'/>
                                <path d='m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.611.7-7.4'/>
                                <path d='m9 11 19'/>
                                <path d='M4.5 15.5h15'/>
                                <path d='m15 11-1 9'/>
                            </svg>
                    </div>
                        <h2 className="title-font font-medium text-3xl text-gray-600 fonts1">{getAllProduct.length}</h2>
                        <p className="text-gray-700 font-bold">Total Products</p>
                    </div>
                     </Tab>

                 {/*Total Order */}
                 <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                    <div className="border bg-[#c9c6c3] hover:bg-gray-300 border-gray-300 px-4 py-3 rouded-xl">
                        <div className="text-gray-600 w-12 h-12 mb-3 inline-block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={50}
                                height={50}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-list-orderd"
                                >
                                    <line x1={10} x2={21} y1={6} y2={6}/>
                                    <line x1={10} x2={21} y1={12} y2={12}/>
                                    <line x1={10} x2={21} y1={18} y2={18}/>
                                    <path d="M4 6h1v4"/>
                                    <path d="M4 10h2"/>
                                    <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>
                                </svg>
                        </div>
                        <h2 className="title-font font-medium text-3xl text-gray-500 fonts1">{getAllOrder.length}</h2>
                        <p className="text-gray-500 font-bold">Total Order</p>
                    </div>
                 </Tab>

                 {/*Total User */}
                 <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                    <div className="border bg-[#c9c6c3] hover:bg-gray-300 border-gray-200 px-4 py-3 rounded-xl">
                        <div className="text-gray-600 w-12 h-12 mb-3 inline-block ">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={50}
                                height={50}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-users"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                    <circle cx={9} cy={7} r={4}/>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                        </div>
                        <h2 className="title-font font-medium text-3xl text-gray-500 fonts1">{getAllUser.length}</h2>
                        <p className="text-gray-500 font-bold">Total Users</p>
                    </div>
                 </Tab>
                  </TabList>
                  <TabPanel> <ProductDetails/> </TabPanel>
                  <TabPanel> <OrderDetail/> </TabPanel>
                  <TabPanel> <UserDetail /> </TabPanel>
            </Tabs>
           </div>
        </div>
     );
}
 
export default AdminDashboard;