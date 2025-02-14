import { useContext } from 'react';
import { UserContext } from "./UserContext"; // Ensure path matches
const UserProfile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
        </div>
    );
};

export default UserProfile;