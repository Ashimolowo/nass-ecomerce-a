import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/myContext";
import Loader from "../../components/loader/loader";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    href: "#",
    price: "₦50,000",
    originalPrice: "49,750",
    discount: "5% off",
    color: "blue",
    size: "8 UK",
    imageSrc: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c066bbc4-8b68-48b6-bebd-2191d001a973/AIR+FORCE+1+HIGH+%2707.png",
    quantity: 2
  },
  {
    id: 2,
    name: "Nike Air Force 2 07 LV10",
    price: "₦60,000",
    originalPrice: "69,750",
    discount: "5% off",
    color: "black",
    size: "8 UK",
    imageSrc: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fdb1da5d-df41-415c-840a-84d28f66a11e/AIR+FORCE+1+%2707+LV8.png",
    quantity: 4
  }
];

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem('users'));  // Assuming `users` is the correct key in localStorage
  const context = useContext(MyContext);  // Using context
  const { loading, getAllOrder } = context;  // Destructure directly from context

  return (
    <Layout>
      <div className="container mx-auto px-4 py-5 lg:py-8">
        {/* Top section */}
        <div className="top">
          <div className="bg-gray-400 py-5 rounded-xl border border-gray-300">
            <div className="flex justify-center">
              <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="Shaybah💦" />
            </div>
            <div className="">
              <h1 className="text-center text-lg"><span className="font-bold">Name:</span>{user?.name}</h1>
              <h1 className="text-center text-lg"><span className="font-bold">Email:</span>{user?.email}</h1>
              <h1 className="text-center text-lg"><span className="font-bold">Date:</span>{user?.date}</h1>
              <h1 className="text-center text-lg"><span className="font-bold">Role:</span>{user?.role}</h1>
            </div>
          </div>
        </div>

        {/* Bottom section - Order Details */}
        <div className="bottom">
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
            <h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>

            {/* Loading Indicator */}
            <div className="flex justify-center relative top-10">
              {loading && <Loader />}
            </div>

            {/* Filtering and mapping through orders */}
            {getAllOrder.filter((obj) => obj.userid === user?.uid).map((order, index) => {
              return (
                <div key={index}>
                  {order.cartItems.map((item, itemIndex) => {
                    const {id, date, quantity, price, title, productImageUrl, category} = item
                    const { status } = order;
                    return (
                      <div key={itemIndex} className="mt-5 flex flex-col overflow-hidden rounded-xl border border-gray-200 md:flex-row">
                        <div className="w-full border-r-boder-gray-200 bg-gray-400 md:max-w-xs">
                          {/* Order details */}
                          <div className="p-8">
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                              <div className="mb-4">
                                <div className="text-sm font-semibold text-black">Order Id</div>
                                <div className="text-sm font-medium text-gray-900">{id}</div>
                              </div>

                              <div className="mb-4">
                                <div className="text-sm font-semibold">Date</div>
                                <div className="text-sm font-medium text-gray-900">{date}</div>
                              </div>

                              <div className="mb4">
                                <div className="text-sm font-semibold">Total Amount</div>
                                <div className="text-sm font-medium text-gray-900">₦{price * quantity}</div>
                              </div>

                              <div className="mb4">
                                <div className="text-sm font-semibold">Order Status</div>
                                <div className="text-sm font-medium text-gray-900 first-letter:uppercase">{order.status}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Product details */}
                        <div className="flex-1">
                          <div className="p-8">
                            <ul className="-my-7 divide-y divide-brown-300">
                             
                                <li className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                                  <div className="flex flex-1 items-stretch">
                                    <div className="flex-shrink-0">
                                      <img src={productImageUrl} alt="Shaybah💦" className="h-20 w-20 rounded-lg border border-gray-600 object-contain" />
                                    </div>
                                    <div className="ml-5 flex flex-col justify-between bg-gray-300">
                                      <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-900">{title}</p>
                                        <p className="mt-1 text-sm font-medium text-gray-500">{category}</p>
                                      </div>
                                      <p className="mt-4 text-sm font-medium text-gray-500">{quantity}</p>
                                    </div>
                                  </div>
                                  <div className="mt-auto flex flex-col items-end justify-between">
                                    <p className="text-right text-sm font-bold text-gray-900">₦{price}</p>
                                  </div>
                                </li>
                              
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
