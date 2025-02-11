import { TbBackground } from "react-icons/tb"



function ProfileCard() {
    const style = {
        backgroundColor: 'lightgray' , 
        padding: '15px' , 
        borderRadius : '8px' , 
        color :'black'
    } ; 
  return (

    <div style={style} >
      <h1>Hello world </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus nihil ea alias, est esse reiciendis quis illum magnam ex beatae nobis nostrum dolorem sunt mollitia commodi voluptatem debitis minima.</p>
    </div>
  )
}

export default ProfileCard
