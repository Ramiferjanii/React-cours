import { useState } from "react"

const Profile = () => {

  const [profile , setProfile]  = useState ({
        name : '' , 
        age : ''
    })


    const handleChange = e => {
        const {name , value } = e.target


        setProfile((prevProfile)=> ({
            ...prevProfile , 
            [name]:value , 
        })) 
    }


  return (
    <div>
    <h2> User profile </h2>
    <div>
        <label > Name : 
        <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>
    </div>



    <label >
        Age : 
        <input type="number" name="age" value={profile.age} onChange={handleChange} />

    </label>

    <h3> Profile information </h3>

    <p>Name : {profile.name}</p>
    <p>Age : {profile.age}</p>

    </div>
  )
}

export default Profile
