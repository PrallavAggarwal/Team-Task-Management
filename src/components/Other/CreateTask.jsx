import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"


const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('task created.')
        console.log(`task title : ${taskTitle}`)
        console.log(`task description : ${taskDescription}`)
        console.log(`task assign to : ${assignTo}`)
        console.log(`task category : ${category}`)
        console.log(`task date : ${taskDate}`)

        setNewTask({taskTitle, taskDate, taskDescription, category, active:false, failed:true, newTask:true, completed:false })

        const data = userData.employees
        console.log(data)

        data.forEach((element) => {
            if(assignTo === element.firstName){
                element.tasks.push(newTask)
                element.tasks.newTasks = element.tasks.newTasks + 1
            }
        })
        setUserData({...userData, employees:data})

        setAssignTo('')
        setCategory('')
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')
    }
    console.log('new userData', userData)
    return (
        <div>
            <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
                <form className="flex flex-wrap w-full items-start justify-between " onSubmit={submitHandler}>
                    <div className="w-1/2">
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                            <input type="text" placeholder="make a ui design"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4 placeholder:text-gray-600 text-gray-200"
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }} />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                            <input type="date" 
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4 text-gray-200"
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}/>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                            <input type="text" placeholder="employee name" 
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4 placeholder:text-gray-600 text-gray-200"
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}/>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                            <input type="text" placeholder="Design, Code, Research etc." 
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4 placeholder:text-gray-600 text-gray-200"
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="w-2/5 flex flex-col items-start">
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea name="" id="" cols="30" rows="10" className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-2 border-gray-400 text-gray-200"
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}></textarea>
                        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 rounded px-5 text-sm mt-4 ">Create Task</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default CreateTask