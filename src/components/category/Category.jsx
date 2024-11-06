import { useNavigate } from "react-router-dom";
import categoryData from "./categoryData.js";

const Category = () => {
    //navigate
    const navigate = useNavigate();
    
    return ( 
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    {/* main 2 */}
                    <div className="flex">
                        {/* category */}
                        {categoryData.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* image */}
                                    <div onClick={() => navigate(`/category/${item.name}`)}
                                    className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-customStone transition-all hover:bg-customStoneL cursor-pointer mb-1">
                                        <div className="flex justify-center mb-12">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                    {/* name title */}
                                    <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">
                                        {item.name}
                                    </h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
