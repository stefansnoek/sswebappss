import React from 'react';
import UserProfile from '../components/UserProfile';

const UserProfilePage = () => {
    return <UserProfile user={{ name: "Stefan", email: "john@example.com" }} />;
};

export default UserProfilePage;
