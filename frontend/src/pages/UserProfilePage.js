import React from 'react';
import UserProfile from '../components/UserProfile';

const UserProfilePage = () => {
    return <UserProfile user={{ name: "John Doe", email: "john@example.com" }} />;
};

export default UserProfilePage;
