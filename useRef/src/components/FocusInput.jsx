import { useRef } from "react"


const FocusInput = () => {

    const inputRef = useRef(null) ; 
    const FocusInput = () => {
        if (inputRef.current) { 
            inputRef.current.focus() ; 
        }
    }

  return (
    <div>
        <input type="text" ref={inputRef} placeholder="click that buttom to focus " />
        <button onClick={FocusInput} >Focus input </button>
    </div>
  )
}

export default FocusInput
