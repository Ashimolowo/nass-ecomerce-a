import { Button, button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import CartPage from "../cart/cartPage";



const BuyNowModal = ({addressInfo, setAddressInfo, buyNowFunction}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }
    return ( 
        <>
           
           <Button type="button"
           onClick={handleOpen}
           className="w-full mt-2 px-4 py-3 text-center text-gray-100 bg-[#555] border border-transparent dark:border-gray-700 hover:border-white hover:text-[#555] hover:bg-white rounded-xl"
           >

                    Buy now
           </Button>
           <Dialog open={open} handler={handleOpen} className="bg-gray-300">
                <DialogBody>
                    <div className="mb-3">
                        <input  
                            type="text" 
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                              setAddressInfo({
                                ...addressInfo,
                                name: e.target.value
                              })
                            }}
                            placeholder="Enter your name"
                            className="bg-gray-300 border border-gray-400 px-2 py-2 w-full rounded-md outline-none text-center"/>
                    </div>

                    <div className="mb-3">
                        <input  
                            type="text" 
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                              setAddressInfo({
                                ...addressInfo,
                                address: e.target.value
                              })
                            }}
                            placeholder="Enter address"
                            className="bg-gray-300 border border-gray-400 px-2 py-2 w-full rounded-md outline-none text-center"/>
                    </div>

                    <div className="mb-3">
                        <input  
                            type="number" 
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                              setAddressInfo({
                                ...addressInfo,
                                pincode: e.target.value
                              })
                            }}
                            placeholder="Enter your pincode"
                            className="bg-gray-300 border border-gray-400 px-2 py-2 w-full rounded-md outline-none text-center"/>
                    </div>

                    <div className="mb-3">
                        <input  
                            type="text" 
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                              setAddressInfo({
                                ...addressInfo,
                                mobileNumber: e.target.value
                              })
                            }}
                            placeholder="Enter your mobile number"
                            className="bg-gray-300 border border-gray-400 px-2 py-2 w-full rounded-md outline-none text-center"/>
                    </div>

                    <div className="">
                        <Button 
                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction ();
                            }
                            }
                            className="w-full px-4 py-3 text-center text-gray-100 bg-[#555] border border-transparent dark:border-gray-700 hover:border-white hover:text-[#555] hover:bg-white rounded-xl">
                            Buy now!
                        </Button>
                    </div>
                </DialogBody>
           </Dialog>
        </>
     );
}
 
export default BuyNowModal;