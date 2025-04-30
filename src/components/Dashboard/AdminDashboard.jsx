import Header from "../Other/Header"
import CreateTask from "../Other/CreateTask"
import AllTask from "../Other/AllTask"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AdminDashboard = () => {
    const data = useContext(AuthContext)
    const adminData = data.admin[0]
    console.log('admin Data' , adminData.firstName)

    return (
        <div className="h-screen w-full p-10">
            <h1>AdminDashboard</h1>
            <Header data={adminData}/>
            <CreateTask data={adminData}/>
            <AllTask data={adminData}/>
        </div>
    )
}

export default AdminDashboard