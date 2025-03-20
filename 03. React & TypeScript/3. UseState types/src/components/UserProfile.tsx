import { useState } from "react"

interface UserProfileState {
    name :string ,
    age : number , 
    email : string 
}



const UserProfile = () => {







        const [profile , setProfile ] = useState <UserProfileState>({
            name: "" ,
            age:0 , 
            email:""
        })


const updateName = (name : string) => {
    setProfile(prevState => ({...prevState , name}))
}
const updateEmail = (email : string) => {
    setProfile(prevState => ({...prevState , email}))
}
const updateAge = (age : number) => {   
    setProfile(prevState => ({...prevState , age}))
}

  return (
    <div>
    <h2>User prfile </h2>


    <input type="text" placeholder="name" value={profile.name} onChange={e => updateName(e.target.value) }  />
    <input type="number" onChange={e => updateAge(Number(e.target.value))} placeholder="age" value={profile.age > 0 ? profile.age : " " } />

    <input type="email" value={profile.email} onChange={e => updateEmail(e.target.value)} />

    <h3>Profile Summary :</h3>

    <p>Name : {profile.name} </p>
    <p>Age : {profile.age} </p>
    <p>Email : {profile.email} </p>

    
    </div>
  )
}

export default UserProfile
