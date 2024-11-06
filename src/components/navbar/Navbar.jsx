import { Link, useNavigate } from "react-router-dom";
import HomePage from './../../pages/home/Home';
import SearchBar from "../searchbar/SearchBar";
import { useSelector } from "react-redux";



const Navbar = () => {
    // get user from localStorage
    const user = JSON.parse(localStorage.getItem('users'));

    //navigate
     const navigate = useNavigate();

     //logout function
        const logout = () => {
            localStorage.clear("users");
            navigate('/login')
        }

        //CartItems 
        const cartItems = useSelector((state) => state.cart)
     const navList = (
      <ul className="flex space-x-3 text-white font-medium text-md px-5">
       {/* HomePage */}
        <li>
            <Link to={'/'}>Home</Link>
        </li>

         {/* All Products */}
         <li>
            <Link to={'/allproduct'}>All products</Link>
        </li>

         {/* signup */}
        { !user ? <li>
            <Link to={'/signup'}>Sign up</Link>
        </li> : ""}

           {/* signup */}
           { !user ? <li>
            <Link to={'/login'}>Login</Link>
        </li> : ""}

         {/* user */}
        { user?.role === "user" && <li>
            <Link to={'/userdashboard'}>{user.name}</Link>
        </li>
        }
        

         {/* Admin */}
         {user?.role === 'admin' && <li>
            <Link to={'/admindashboard'}>Admin</Link>
        </li>}

        
         {/* Logout */}
         { user && <li className="cursor-pointer" onClick={logout}>
            Logout
        </li> }


         {/* cart */}
         <li>
            <Link to={'/cart'}>Cart({cartItems.length})</Link>
        </li>

         {/* user */}
         {/* <li>
            <Link to={'/user'}>User</Link>
        </li> */}

      </ul>
    )
    
    return (  
        <>
        <nav className="bg-customStone sticky top-0">
             {/* main */}
         <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
                {/* left */}
            <div className="left py-3 lg:py-0">
                <Link to={'./'}>
                  <h2 className="font-bold text-white text-2xl text-center">Nass Collection</h2>
                </Link>
            </div>
             {/* right */}
             <div className="right flex justify-center mb-4 lg:mb-0">
                {navList}
             </div>

             {/* right */}
             <SearchBar />

         </div>
        </nav>
        </>
    );
}
 
export default Navbar;