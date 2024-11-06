
import { useContext, useState } from "react";
import SearchData from "./searchdata";
import { useNavigate } from 'react-router-dom';
import MyContext from "../../context/myContext";
import productData from './../homepageProductCard/productData';
import ProductInfo from './../../pages/productInfo/productInfo';

const SearchBar = () => {
const context = useContext(MyContext)
const {getAllProduct} = context

    const [search, setSearch] = useState("");

    // Filter search SearchData
    const filterSearchData = getAllProduct.filter((obj) => 
      obj.name.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 8);

    //
    const navigate = useNavigate()
    return ( 
        <div>
            {/* SearchBar input */}
            <div className="input flex justify-center">
                <input 
                    type="text"
                    placeholder="Search here"
                    className="bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* SearchBar dropdown */}
            <div className="flex justify-center">
                {search && (
                    <div className="block absolute bg-gray-200 w-96 md:w-96 z-50 my-1 rounded-lg px-2 py-2">
                        {filterSearchData.length > 0 ? (
                            <>
                                {filterSearchData.map((item, index) => (
                                    <div key={index} className="py-2 px-2 cursor-pointer" onClick={() => navigate(`/ProductInfo/${item.id}`) }>
                                        <div className="flex items-center gap-2">
                                            <img src={item.productImageUrl} alt={item.name} className="w-10" />
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="py-2 px-2">No results found</div>
                        )}
                    </div>
                )}
            </div>

            {/* <div className="flex justify-center mt-4">
                <img src="https://cdn-icons-png.flaticon.com/128/10437/18437890.png" alt="search icon" className="w-20" />
            </div> */}
        </div>
    );
}

export default SearchBar;
