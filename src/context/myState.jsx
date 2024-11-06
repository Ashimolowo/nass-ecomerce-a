import { useEffect, useState } from 'react';
import MyContext from './myContext';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../firebase/firebase';

function MyState({ children }) {
  // Loading state
  const [loading, setLoading] = useState(false);

  // Product state
  const [getAllProduct, setGetAllProduct] = useState([]);

  // Order state
  const [getAllOrder, setGetAllOrder] = useState([]);

  // Get all user orders function
  const getAllOrderFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "order"), orderBy('time'));
      const data = onSnapshot(q, (querySnapshot) => {
        let orderArray = [];
        querySnapshot.forEach((doc) => {
          orderArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllOrder(orderArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Get all products function
  const getAllProductFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, 'products'), orderBy('time'));
      const data = onSnapshot(q, (querySnapshot) => {
        let productArray = [];
        querySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
//Delete order function 
const deletProduct = async (id) => {
  setLoading(true)
  try {
    await deleteDoc(doc(fireDB, 'order', id))
    toast.success('order Deleted Successfully')
    getAllOrderFunction();
    setLoading(false)
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
} 

///USER STATE
const [getAllUser, setGetAllUser] = useState([]);

///// GET ALL USER FUNCTION 
const getAllUserFunction = async () => {
  setLoading(true);
  try {
      const q = query(
            collection(fireDB, "user"),
            orderBy('item')
      )
      const data = onSnapshot(q, (QuerySnapshot) => {
          let userArray = [];
          QuerySnapshot.forEach((doc) => {
            userArray.push({...doc.data(), id: doc.id})
          })
          setGetAllUser(userArray)
          setLoading(false);
      })
  } catch (error) {
    console.log(error);
    setLoading(false)
  }
}
  // Fetch data on component mount
  useEffect(() => {
    getAllProductFunction();
    getAllOrderFunction();
    getAllUserFunction()
  }, []);

  return (
    <MyContext.Provider value={{
      loading,
      setLoading,
      getAllProduct,
      getAllProductFunction,
      getAllOrder,
      getAllOrderFunction,
      deletProduct,
      getAllUser
    }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;

