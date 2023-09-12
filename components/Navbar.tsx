import Modal from 'components/Modal'
import { STATUS } from 'constant';
import { useTasks } from 'context/provider';
import { StatusType } from 'context/types';
import Link from 'next/link'
import { useState } from 'react'
 

const Navbar: React.FC = () =>  {
  const [title, setTitle] = useState<string>('');
  const [status, setStatus] = useState<STATUS>('completed')
  const [open, setOpen] = useState<boolean>(false)

  const { create } = useTasks();
  return(
    <header className="bg-neutral-100 flex-row-reverse sticky top-0 z-20 lg:flex-row	justify-between  items-center flex px-5 py-2.5 lg:py-5 md:px-8 lg:px-16">
      <Link className="text-neutral-900 font-bold" href="/">
       Task Tracker
      </Link>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>setOpen(true)}>Create Task</button>
      {open && 
        <Modal onClickCancel={()=> setOpen(false)} 
               onClickOk={()=> {
                  create(title,status)
                  setOpen(false)
                }}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              title
            </label>
            <input 
              className="shadow appearance-none border bg-neutral-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text"  
              onChange={(e)=> setTitle(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="status">
              Status
            </label>
            <div className="relative">
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
          </div>
      </Modal>}
    </header>
  )}


export default Navbar
