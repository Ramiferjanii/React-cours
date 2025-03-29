
const Model:React.FC<{children:React.ReactNode ; onClose:()=> void }> = ({children , onClose}) => {
  return (
    <div className="fixed insert-0 bg-black bg-opacity-50 flex items-flex justify-center " >
        <div className="bg-white p-4 rounded-lg shadow relative">
            {children}


            <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 " >X</button>
        </div>
      
    </div>
  )
}

export default Model
