import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"


const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    console.log('authData : ', userData)

    return (
        <div className="bg-[#1c1c1c] p-5 mt-5 rounded ">

            <div className="bg-red-400 rounded mb-2 flex justify-between py-2 px-4 ">
                <h2 className="w-1/5 text-white">Employee Name</h2>
                <h3 className="w-1/5 text-white">New Task</h3>
                <h5 className="w-1/5 text-white">Active Task</h5>
                <h5 className="w-1/5 text-white">Completed</h5>
                <h5 className="w-1/5 text-white">Failed</h5>
            </div>
            <div className="h-[80%] ">
            {userData.employees.map(function (e, index) {
                return (
                    <div className="border-2 border-emerald-600 rounded mb-2 flex justify-between py-2 px-4 " key={index}>
                        <h2 className="w-1/5 text-white">{e.firstName}</h2>
                        <h3 className="w-1/5 text-blue-400">{e.taskCounts.newTask}</h3>
                        <h5 className="w-1/5 text-yellow-400">{e.taskCounts.active}</h5>
                        <h5 className="w-1/5 text-green-400">{e.taskCounts.completed}</h5>
                        <h5 className="w-1/5 text-red-600">{e.taskCounts.failed}</h5>
                    </div>
                )
            })}
            </div>
            
        </div>
    )
}

export default AllTask