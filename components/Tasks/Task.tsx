
import { StatusType, Task } from 'context/types'
import { useTasks } from 'context/provider'
import { useState } from 'react';
import { STATUS } from 'constant';

interface PropsType {
   task:Task 
}

const Task: React.FC<PropsType> = ({ task }) =>{
    const { deleteTask, changeStatus, changeTitle }= useTasks();
    const [title, setTitle] = useState<string>(task.title);
    const [status, setStatus]= useState<StatusType>(task.status)
    const [editStatus, setEditStatus]= useState<boolean>(false)
    const [editTitle, setEditTitle]= useState<boolean>(false)

     const onClickEditStatus= ()=> {
        if(!editStatus) setEditStatus(true);
        if(editStatus) {
            changeStatus(task.id, status);
            setEditStatus(false);
        }
    }
  const onClickEditTitle= ()=> {
        if(!editTitle) setEditTitle(true);
        if(editTitle){
            changeTitle(task.id, title);
            setEditTitle(false);
        }
    }
    return (
        <div className='bg-neutral-100 text-neutral-700 p-8 m-4 rounded'>
            <div className='flex items-center'>
                Title:{!editTitle && <p className="ml-2">{task.title}</p> }  
                {editTitle && <input 
                                    className="ml-2 appearance-none border bg-neutral-100 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text"  
                                    onChange={(e)=> setTitle(e.target.value)} value={title}/>
                }
                <button
                    id="ok-btn"
                    onClick={onClickEditTitle}
                    className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-2 px-4 rounded">
                    {editTitle? "Confirm" : "Edit"}
                </button>
            </div> 
             <div className='flex items-center'>
                Status:{!editStatus && <p className="ml-2">{task.status}</p> }  
                {editStatus &&
                    <div className="ml-2 relative">
                        <select 
                            className="block appearance-none w-full bg-neutral-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="status"
                            value={status}
                            onChange={(e)=> setStatus(e.target.value as StatusType)}>
                            <option>{STATUS.COMPLETED}</option>
                            <option>{STATUS.INCOMPLETE}</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                }
                <button
                    id="ok-btn"
                    onClick={onClickEditStatus}
                    className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-2 px-4 rounded">
                    {editStatus? "Confirm" : "Edit"}
                </button>
            </div> 
            <button
                id="cancel-btn" 
                onClick={()=>deleteTask(task.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 my-2 w-full px-4 rounded">
                Delete
            </button>
        </div>    
    )

}

export default Task
