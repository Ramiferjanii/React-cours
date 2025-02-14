import { useState } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../contexts/UserContext';

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'John Doe' });
    const updateUser = (newUpdate) => {
        setUser({ name: newUpdate });
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Add prop type validation
UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};


export default {UserProvider , UserContext}; // Add this line