
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/myContext";
import SignUp from './signup';
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { auth, fireDB } from '../../firebase/firebase';
import Loader from "../../components/loader/loader";


const LogIn = () => {
    const context = useContext(MyContext);
    const {loading, setLoading } = context;

    //navigate
    const navigate = useNavigate();

    //user SignUp this.state
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
        
    });

    //////userLoginFuction 
    const userLoginFuction = async () => {
        // validation
        if (userLogin.email === "" || userLogin.password === "") {
            return toast.error('All Fields are required ');
        }

        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            const { uid } = userCredential.user;

            const q = query(
                collection(fireDB, "user"),
                where('uid', '==', uid)
            );
            const querySnapshot = await getDocs(q);
            
            let user = null;
            querySnapshot.forEach((doc) => {
                user = doc.data();
            });

            if (!user) {
                toast.error("User not found in database.");
                setLoading(false);
                return;
            }

            // Store user data and navigate based on role
            localStorage.setItem("users", JSON.stringify(user));
            setUserLogin({
                email: "",
                password: ""
            });
            toast.success("Login Successfully ✔");
            setLoading(false);

            if (user.role === 'user') {
                navigate("/userdashboard");
            } else {
                navigate('/admindashboard');
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error("Failed to log in. Please check your credentials.");
            setLoading(false);
        }
    };
      

    
    return ( 
        <div className="flex justify-center items-center h-screen">
              {/*Loader component */}
              {loading && <Loader /> } 
            
            {/*sign up form */}
            <div className="login_form bg-gray-400 px-1 lg:px-8 py-6 border border-gray-600 rounded-xl shadow-md">
                {/*Top heading */}
                <div className="mb-5">
                    <h2 className="text-center text-2xl font-bold text-customStone">
                        LogIn
                    </h2>
                </div>

               

                  {/*input two */}
                  <div className="mb-5">
                    <input
                          type="email"
                          placeholder="email"
                          value={userLogin.email}
                          onChange={(e) => {
                            setUserLogin({...userLogin, email: e.target.value})
                          }}
                          className="bg-gray-400 border-2 border-opacity-35 border-gray-900 px-2 py-2 w-96 rounded-md
                          outline-none placeholder-white placeholder-opacity-55" />     
                </div>

                  {/*input three */}
                  <div className="mb-5">
                    <input
                          type="password"
                          placeholder="password"
                          value={userLogin.password}
                          onChange={(e) => {
                            setUserLogin({...userLogin, password: e.target.value})
                          }}
                           className="bg-gray-400 border-2 border-opacity-35 border-gray-900 px-2 py-2 w-96 rounded-md
                          outline-none placeholder-white placeholder-opacity-55" /> 
                </div>
                {/*LogIn button */}
                <div className="mb-5">
                    <button 
                        type="button"
                        onClick={userLoginFuction}
                        className="bg-customStone hover:bg-blue-gray-500 w-full text-white text-center py-2 font-bold rounded-md">
                            Login
                            </button>
                </div>

                <div className="">
                    <h2 className="ml-2 text-gray-50">Don't Have an account ? <Link className="text-customStone font-bold" to={'/signup'}>Signup</Link> </h2>
                </div>
            </div>
        </div>
     );
}
 
export default LogIn;