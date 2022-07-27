import React from "react";

// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_PROFILES} from "../../utils/queries";


const Profile = () => {
	const { loading, data } = useQuery(QUERY_PROFILES);
     const profileData = data?.profile || {};
     
    if (loading) {
        return <div>Loading...</div>
    }
	return (
		<div className="myProfile">
            <h1>Profile</h1>
			<ul>{profileData.map((ud)=> <li key={ud.name} >{ud.name}</li>)}</ul>
		</div>
	);
};

export default Profile;
