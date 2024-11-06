import { Link } from "react-router-dom";
import App from './../../App';


const Footer = () => {
    return ( 
        <div>
            {/* Footer */}
            <footer className="text-gray-600 body-font bg-customStone">
                {/* main */}
                <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col">
                    {/*logo*/}
                    <a href="" className="flex title-font font-medium-items-center md:justify-start justify-center text-white">
                        <span className="text-xl font-bold">NAAS</span>
                    </a>
                    {/* paragra */}
                    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    &#169; 2024 NASS -
                    <Link to={'/'} className="text-gray-100 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                            NASS
                        </Link>
                    </p>

                    {/* media */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-white">
                        <a href="#" className="cursor-pointer ml-3"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="cursor-pointer ml-3"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="cursor-pointer ml-3"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="cursor-pointer ml-3"><i className="bx bxl-google"></i></a>
      </span>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer; 
