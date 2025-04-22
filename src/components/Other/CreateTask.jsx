

const CreateTask = () => {

    return (
        <div>
            <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
                <form className="flex flex-wrap w-full items-start justify-between ">
                    <div className="w-1/2">
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                            <input type="text" placeholder="make a ui design"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4 placeholder:text-gray-600 text-gray-200"/>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                            <input type="date" 
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4 text-gray-200"/>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                            <input type="text" placeholder="employee name" 
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4 placeholder:text-gray-600 text-gray-200"/>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                            <input type="text" placeholder="role" 
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4 placeholder:text-gray-600 text-gray-200"/>
                        </div>
                    </div>

                    <div className="w-2/5 flex flex-col items-start">
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea name="" id="" cols="30" rows="10" className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-2 border-gray-400 text-gray-200"></textarea>
                        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 rounded px-5 text-sm mt-4 ">Create Task</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default CreateTask