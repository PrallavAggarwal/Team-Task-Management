

const CompleteTask = ({data}) => {
    return (
        <div className="h-full w-[40%] rounded-2xl bg-blue-500 flex-shrink-0 p-5 ">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-400 px-3 py-1 rounded text-sm">
                    {data.category}
                </h3>
                <h4 className="text-sm">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
            <p className="text-sm mt-2">{data.taskDescription}</p>
            <div>
                <button className="bg-green-500 py-1 px-2 text-sm">
                    completed Task
                </button>
            </div>
        </div>
    )
}

export default CompleteTask