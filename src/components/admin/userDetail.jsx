import { useContext } from "react";
import MyContext from "../../context/myContext";


const UserDetail = () => {
    const context = useContext(MyContext)
    const {getAllUser} = context
    console.log(getAllUser);
    
    return ( 
    <div className="">
        <div className="">
            <div className="py-5 flex justify-between items-center">
                {/*text*/}
                <h1 className="text-xl text-gray-500 font-bold">All User</h1>
            </div>

               {/*table */}
               <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-customStone text-black">
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first-border-l-0 border-gray-400 text-gray-100  bg-gray-500"> No</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100  bg-gray-500">Name</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100  bg-gray-500">Email</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100  bg-gray-500">Uid</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100  bg-gray-500">Role</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first-border-l-0 border-gray-400  text-gray-100  bg-gray-500">Date</th>   
                        </tr>
                       {getAllUser.map((item, index) => {
                         console.log("item:",item, "index:",index);
                        
                            return(
                                <tr key={index} className="text-gray-400">
                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-red-200">{index + 1}.</td>
                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-red-200 first-letter:uppercase">{item.name}</td>
                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-red-200 first-letter:uppercase">{item.email}</td>
                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-red-200 first-letter:uppercase">{item.uid}</td>
                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-green-400-200 cursor-pointer">{item.role}</td>
                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-700 stroke-blue-gray-800 text-red-400-200 cursor-pointer">{item.date}</td>
                            </tr>
                            )
                       })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
     );
}
 
export default UserDetail;