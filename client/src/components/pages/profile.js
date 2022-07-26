import React from "react";

// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_PROFILES} from '../utils/queries';


const profile = () => {
	const { loading, data } = useQuery(QUERY_PROFILES);
     const profile = data?.profile || {};
     
    if (loading) {
        return <div>Loading...</div>
    }
	return (
		<div className="myProfile">
            <h1>Profile</h1>
			<ul>{profile.map((userData)=>{
                <li key={userData} >{userData}</li>
            })}</ul>
		</div>
	);
};

export default profile;
