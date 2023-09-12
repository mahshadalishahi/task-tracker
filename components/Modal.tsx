import { PropsWithChildren } from 'react'
interface PropsType {
	onClickOk?: ()=> void
	onClickCancel?: ()=> void

  }
 
const Modal: React.FC<PropsWithChildren<PropsType>> = ({children, onClickCancel, onClickOk}) => (
    <div
	className="absolute right-0 left-0 top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
>
	<div className="mt-3 text-center">
	 
			 {children}
 		<div className="items-center px-4 py-3">
 
			<button
				id="ok-btn"
				onClick={onClickOk}

				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-2 w-full px-4 rounded"
			>
				Ok
			</button>

            <button
				id="cancel-btn" 
				onClick={onClickCancel}
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 my-2 w-full px-4 rounded"
			>
				Cancel
			</button>
		</div>
	</div>
</div>
)

export default Modal
