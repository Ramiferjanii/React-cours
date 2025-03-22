
import { FormEvent, useRef, useState } from "react"


type formData = {
    name: string , 
    email : string , 
    password: string 
}




const Form = () => {
        const [submitted, setSubmitted] = useState<formData>(
            {
                name: '' ,
                email : '' ,
                password : '' 
            }
        )

const name = useRef<HTMLInputElement>(null)
const email = useRef<HTMLInputElement> (null)
const password = useRef<HTMLInputElement>(null)

const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nameValue = name.current!.value
    const emailValue = email.current!.value
    const passwordValue = password.current!.value
    setSubmitted({
        name: nameValue,
        email: emailValue,
        password: passwordValue
    })
}
  return (
    <form className="form-container" onSubmit={handleSubmit}>
    <input className="form-input" type="text" placeholder="Enter you name "  ref={name} />
    <input className="form-input" type="email" placeholder="Enter you email "  ref={email} />
    <input className="form-input" type="password" placeholder="Enter you password "  ref={password} />
    <button type="submit" className="submit-btn" >Submit</button>


    <section>
        <h1>Name : {submitted.name } </h1>
        <h1>email : {submitted.email }</h1>
        <h1>Password : {submitted.password }</h1>
    </section>
    </form>
  )
}

export default Form
