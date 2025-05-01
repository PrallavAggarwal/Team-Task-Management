import Header from "../Other/Header"
import CreateTask from "../Other/CreateTask"
import AllTask from "../Other/AllTask"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AdminDashboard = ({changeUser}) => {
    const [userData, setUserData] = useContext(AuthContext)
    console.log('userData : ', userData)
    const adminData = userData.admin[0]
    console.log('admin Data' , adminData.firstName)

    return (
        <div className="h-screen w-full p-10">
            <h1>AdminDashboard</h1>
            <Header changeUser = {changeUser} data={adminData}/>
            <CreateTask data={adminData}/>
            <AllTask data={adminData}/>
        </div>
    )
}

export default AdminDashboard