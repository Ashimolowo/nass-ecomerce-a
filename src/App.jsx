
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import NoPage from "./pages/nopage/NoPage";
import ProductInfo from "./pages/productInfo/productInfo";
import ScrollTop from './components/scrolltop/scrollTop';
import CartPage from "./components/cart/cartPage";
import AllProduct from "./pages/allProduct/allProduct";
import SignUp from "./pages/registration/signup";
import LogIn from "./pages/registration/login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from 'react-hot-toast';
import { ProtectedRouteForUser } from "./protectedRoute/protectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/protectedRouteForAdmin";
import CategoryPage from './pages/category/category';






const App = () => {
  return (  
    <MyState>
       <Router basename="/nass-ecomerce-a">
        <ScrollTop />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/*" element={<NoPage/>}/>
            <Route path="/productinfo/:id" element={<ProductInfo/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/allproduct" element={<AllProduct/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={ <LogIn/> }/>
            <Route path="/category/:categoryname"  element={<CategoryPage/>} />
            <Route path="/userdashboard" element= {
              <ProtectedRouteForUser>
                <UserDashboard/>
              </ProtectedRouteForUser>
            }/>
            <Route path="/admindashboard" element= {
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }/>
            <Route path="/addproductpage" element={
              <ProtectedRouteForAdmin>
                <AddProductPage/>               
            </ProtectedRouteForAdmin>
             }/>
            <Route path="/updateproductpage/:id" element={ 
               <ProtectedRouteForAdmin>               
                   <UpdateProductPage/> 
              </ProtectedRouteForAdmin>
              }/>
            
          </Routes>
          <Toaster />
       </Router>
    </MyState>
  );
}
 
export default App;