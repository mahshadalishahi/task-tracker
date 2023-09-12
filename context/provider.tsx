import React, { PropsWithChildren, useContext, useReducer } from 'react';
import { TaskContext } from './context';
import { ProviderContext } from './types';
import { defaultState, state_reducer } from './helpers';
 
function Provider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(state_reducer, defaultState);
 
  const api: ProviderContext = {
    create(title, status){
      dispatch(
        { type: 'create',  value:{
          title,
          status
        } }
      )
    },
    deleteTask(id) {
      dispatch(
        { type: 'delete',  value:  id }
      )
    }, 
    changeStatus(id, status) {
      dispatch(
        { type: 'change-status',  value: {
          id,
          status
        } }
      )
    },
    changeTitle(id, title) {
      dispatch(
        { type: 'change-title',  value: {
          id,
          title
        } 
      }
      )
    },
    getTasks(){
      return state.tasks
    } 

  };



  return (
    <TaskContext.Provider value={api}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default Provider;

export function useTasks(): ProviderContext {
  const context = useContext(TaskContext);
  if (!context)
    throw Error('useTasks can only be used within the Provider component');
  return context;
}