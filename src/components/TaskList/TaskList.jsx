import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
    return (
        <div id="TaskList" className="flex items-center justify-start gap-5 flex-nowrap overflow-x-auto h-[55%] w-full py-5 mt-3 rounded-2xl"> 
            {
                data.tasks.map((e, index) => {
                    if(e.active){
                        return <AcceptTask data={e}/>
                    }
                    if(e.completed){
                        return <CompleteTask data={e}/>
                    }   
                    if(e.failed){
                        return <FailedTask data={e}/>
                    }
                    if(e.newTask){
                        return <NewTask data={e}/>
                    }
                })
            }
        </div>
    )
}

export default TaskList