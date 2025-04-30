import Header from "../Other/Header"
import CreateTask from "../Other/CreateTask"
import AllTask from "../Other/AllTask"

const AdminDashboard = () => {
    return (
        <div className="h-screen w-full p-10">
            <h1>AdminDashboard</h1>
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard