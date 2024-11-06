import { Trash } from "lucide-react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";
import BuyNowModal from "../buyNow/buyNow";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fireDB } from "../../firebase/firebase";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // use useNavigate here

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Cart Deleted");
  };

  const handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const cartItemTotalQuantity = cartItems
    .map((item) => item.quantity || 0)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const cartItemTotalPrice = cartItems
    .map((item) => (item.price || 0) * (item.quantity || 0))
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const user = JSON.parse(localStorage.getItem("users"));

  const [addressInfo, setAddressInfo] = useState({
    name: "",
    address: "",
    pincode: "",
    mobileNumber: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const buyNowFunction = async () => {
    if (
      addressInfo.name === "" ||
      addressInfo.address === "" ||
      addressInfo.pincode === "" ||
      addressInfo.mobileNumber === ""
    ) {
      return toast.error("All fields are required");
    }

    const orderInfo = {
      cartItems,
      addressInfo,
      email: user.email,
      userid: user.uid,
      status: "confirmed",
      time: Timestamp.now(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    try {
      const orderRef = collection(fireDB, "order");
      await addDoc(orderRef, orderInfo); // Ensure you await this
      setAddressInfo({ name: "", address: "", pincode: "", mobileNumber: "" });
      toast.success("Order Placed Successfully ✔");
      console.log("sucess");
      
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-3xl font-bold tracking-light text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form
            action=""
            className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
          >
            <section
              aria-labelledby=""
              className="rounded-lg bg-white lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your Shopping cart
              </h2>
              <ul role="list" className="divide-y divive-gray-200">
                {cartItems.length > 0 ? (
                  <>
                    {cartItems.map((item) => {
                      const {
                        id,
                        title,
                        price,
                        productImageUrl,
                        quantity,
                        category,
                      } = item;
                      return (
                        <div key={id} className="">
                          <li className="flex py-6 sm:py-6">
                            <div className="flex-shrink-0">
                              <img
                                src={productImageUrl}
                                alt="Shaybah"
                                className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                              />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                <div className="flex justify-between">
                                  <h3 className="text-sm">{title}</h3>
                                </div>
                                <div className="mt-1 flex text-sm">
                                  <p className="text-sm text-gray-500">
                                    {category}
                                  </p>
                                </div>

                                <div className="mt-1 flex items-end">
                                  <p className="text-xs font-medium text-gray-500">
                                    ₦{price}
                                  </p>
                                  {/* <p className="text-sm font-medium text-gray-500">
                                      ****;****;{"discount"}
                                      </p> */}
                                </div>
                              </div>
                            </div>
                          </li>

                          <div className="mb-2 flex">
                            <div className="min-w-24 flex">
                              <button
                                className="h-7 w-7"
                                onClick={() => handleDecrement(id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                value={quantity}
                                className="mx-1 h-7 w-9 rounded-md border text-center"
                              />
                              <button
                                className="flex h-7 w-7 items-center justify-center"
                                onClick={() => handleIncrement(id)}
                              >
                                +
                              </button>
                            </div>
                            <div className="ml-6 flex text-sm">
                              <button
                                onClick={() => deleteCart(item)}
                                className="flex items-center space-x-1 px-2 py-1 pl-0"
                              >
                                <Trash size={12} className="text-red-500">
                                  <span className="text-xs font-medium text-red-500">
                                    Remove
                                  </span>
                                </Trash>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <h1>No Item In Cart</h1>
                )}
              </ul>
            </section>
            {/* order section */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-[#ccc] lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
              >
                Price Details
              </h2>
              <div>
                <dl className="space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800">
                      Price ({cartItemTotalQuantity} item)
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ₦{cartItemTotalPrice}{" "}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <dt className="flex items-center text-sm text-gray-800">
                      <span>Discount</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">
                      {"0% now"}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="flex text-sm text-gray-80">
                      <span>Delivery Charges</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">
                      {"Terms and Conditions Apply"}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-y border-dashed py-4">
                    <dt className="flex text-sm text-gray-80">
                      <span>Total Amount</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">
                      {" "}
                      ₦{`${cartItemTotalPrice} + Delivery`}
                    </dd>
                  </div>
                  <div className="px-2 pb-4 font-medium text-green-700 ">
                    <div className="flex gap-4 mb-6 ">
                      {/* <button className="w-full px-4 py-3 text-center text-gray-100 bg-[#555] border border-transparent dark:border-gray-700 hover:border-white hover:text-[#555] hover:bg-white rounded-xl">
                        Buy now
                      </button> */}
                      {user ? (
                        <BuyNowModal
                          addressInfo={addressInfo}
                          setAddressInfo={setAddressInfo}
                          buyNowFunction={buyNowFunction}
                        />
                      ) : (
                        <Navigate to={"/login"} />
                        
                      )}
                    </div>
                  </div>
                </dl>
              </div>
            </section>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
