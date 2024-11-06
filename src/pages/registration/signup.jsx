import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/myContext";
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { auth, fireDB } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import Loader from "../../components/loader/loader";





const SignUp = () => {
    const context = useContext(MyContext);
    const {loading,setLoading} = context;

    //navigate
    const navigate = useNavigate();

    //user SignUp state
    const [userSignUp, setUserSignUp] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    //////SignUp function for user
    const userSignupFuction = async () => {
      //validation
      if (userSignUp.name === "" || userSignUp.email === "" || userSignUp.password === "") {
         toast.error(' All Fields are required ')
      }

      setLoading(true);
      try {
        const users = await createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password);

        /// create user object 
        const user = {
            name: userSignUp.name,
            email: users.user.email,
            uid: users.user.uid,
            role: userSignUp.role,
            time: Timestamp.now(),
            date: new Date().toLocaleString(
                "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric"
                }
            )
        }

        //create user refrence
        const userRefrence = collection(fireDB, "user")

        //Add user Details
        addDoc(userRefrence, user);

        setUserSignUp({
            name: "",
            email: "",
            password: ""
        })

        toast.success("Signup Successfully ✔")
        console.log(user);
        
        setLoading(false)
        navigate('/login')
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    
    return ( 
        <div className="flex justify-center items-center h-screen">
          {/*Loader component */}
            {loading && <Loader /> }
            {/*sign up form */}
            <div className="login_form bg-gray-400 px-1 lg:px-8 py-6 border border-gray-600 rounded-xl shadow-md">
                {/*Top heading */}
                <div className="mb-5">
                    <h2 className="text-center text-2xl font-bold text-customStone">
                        Signup
                    </h2>
                </div>

                {/*input one */}
                <div className="mb-5">
                    <input
                          type="text"
                          placeholder="Full Name"
                          value={userSignUp.name}
                          onChange={(e) => {
                            setUserSignUp({...userSignUp, name: e.target.value})
                          }}
                          className=" bg-gray-400 border-2 border-opacity-35 border-gray-900 px-2 py-2 w-96 rounded-md
                          outline-none placeholder-white placeholder-opacity-55" />  
                </div>

                  {/*input two */}
                  <div className="mb-5">
                    <input
                          type="email"
                          placeholder="email"
                          value={userSignUp.email}
                          onChange={(e) => {
                            setUserSignUp({...userSignUp, email: e.target.value})
                          }}
                          className="bg-gray-400 border-2 border-opacity-35 border-gray-900 px-2 py-2 w-96 rounded-md
                          outline-none placeholder-white placeholder-opacity-55" />     
                </div>

                  {/*input three */}
                  <div className="mb-5">
                    <input
                          type="password"
                          placeholder="password"
                          value={userSignUp.password}
                          onChange={(e) => {
                            setUserSignUp({...userSignUp, password: e.target.value})
                          }}
                          className="bg-gray-400 border-2 border-opacity-35 border-gray-900 px-2 py-2 w-96 rounded-md
                          outline-none placeholder-white placeholder-opacity-55" /> 
                </div>
                {/*SignUp button */}
                <div className="mb-5">
                    <button onClick={userSignupFuction}
                        type="button"
                        className="bg-customStone hover:bg-blue-gray-500 w-full text-white text-center py-2 font-bold rounded-md">
                            Signup
                            </button>
                </div>

                <div className="">
                    <h2 className="ml-2 text-gray-50">Have an account ? <Link className="text-customStone font-bold" to={'/login'}>login</Link> </h2>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;