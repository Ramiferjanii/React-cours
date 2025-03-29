
import UserCard from "../components/UserCard"

const peopleToFollorw = [
    {name: "rami ben ferjnai" , following:false}  , 
    {name: "Ruben bator" , following:false}  , 
    {name: "ben mahmoud yousri" , following:false}  , 
    {name: "abdrahmen galel" , following:false}  , 



] 










const PeapleToFollow = () => {



  return (
    <div className="bg-white p-4 rouned-lg shadow" >
        <h3 className="font-semibold text-lg mb-4">People to Follow </h3>
        <div className="space-y-4">
            {peopleToFollorw.map((person , index) => (
                <UserCard key={index} person={person} />
            ))}
        </div>
      
    </div>
  )
}

export default PeapleToFollow
