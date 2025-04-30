import Header from "../Other/Header"
import TaskListNumber from "../Other/TaskListNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({data}) => {
    console.log('data from employee dashboard : ', data)
    return (
        <div className="p-10 bg-[#1c1c1c] h-screen">
            <h1>Employee Dashboard</h1>
            <Header data = {data}/>
            <TaskListNumber data = {data}/>
            <TaskList data = {data}/>
        </div>
    )
}

export default EmployeeDashboard