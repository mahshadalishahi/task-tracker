
import { StatusType } from 'context/types'
import { useTasks } from 'context/provider'
import { useState } from 'react';
import Task from './Task';

interface PropsType {
   status:StatusType 
}

const Tasks: React.FC<PropsType> = ({status }) =>{
    const {getTasks }= useTasks();
     const tasks= getTasks();
   
    return (
        <div> 
            {tasks.map(task=> task.status === status && <Task task={task} key={task.id}/>)}
        </div>
    )
}

export default Tasks
