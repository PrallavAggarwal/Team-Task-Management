import Header from "../Other/Header"
import TaskListNumber from "../Other/TaskListNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = (props) => {
    console.log('data from employee dashboard : ', props.data)
    return (
        <div className="p-10 bg-[#1c1c1c] h-screen">
            <h1>Employee Dashboard</h1>
            <Header changeUser = {props.changeUser} data = {props.data}/>
            <TaskListNumber data = {props.data}/>
            <TaskList data = {props.data}/>
        </div>
    )
}

export default EmployeeDashboard