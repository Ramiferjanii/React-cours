import { FaUser, FaUserCircle } from "react-icons/fa";

interface UserCardProps {
        person: {
        name: string;
        age: number;
        location: string;
    };
    }
    








const UserCard = ({ index , person }) => {

    
  return (
    <div className="flex items-center justify-between" >
        <section className="flex items-center">
            <FaUserCircle className="text-3xl mr-3 text-gray-500" />
            <span>{person.name}</span>
            
        </section>
       <button>{person.following ? "following " : "follow"} </button>
    </div>
  )
}

export default UserCard
