

const TaskListNumber = () => {

    return (
        <div className="flex screen mt-10 justify-between gap-5">
            <div className="h-40 w-[45%] rounded-xl p-[10px] bg-red-400">
                <h2 className="text-3xl font-semibold ">0</h2>
                <h3 className="text-2xl font-medium">New Task</h3>
            </div>
            <div className="h-40 w-[45%] rounded-xl p-[10px] bg-blue-400">
                <h2 className="text-3xl font-semibold ">0</h2>
                <h3 className="text-2xl font-medium">New Task</h3>
            </div>
            <div className="h-40 w-[45%] rounded-xl p-[10px] bg-yellow-400">
                <h2 className="text-3xl font-semibold ">0</h2>
                <h3 className="text-2xl font-medium">New Task</h3>
            </div>
            <div className="h-40 w-[45%] rounded-xl p-[10px] bg-green-400">
                <h2 className="text-3xl font-semibold ">0</h2>
                <h3 className="text-2xl font-medium">New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber