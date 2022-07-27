import React from "react";

// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_PROFILES} from "../../utils/queries";


const Profile = () => {
	const { loading, data } = useQuery(QUERY_PROFILES);
    const profileData = data?.profiles || [];
    
    if (loading) {
        return <div>Loading...</div>
    }
	return (
		<div className="myProfile">
            <h1>Profile</h1>
			{
				profileData.map((profile) => (
				  <div key={profile._id} className="card mb-3">
					<h4 className="card-header bg-primary text-light p-2 m-0">
					  {profile.first_name} <br />
					  <span style={{ fontSize: '1rem' }}>
						had this thought on {profile.last_name}
					  </span>
					</h4>
					<div className="card-body bg-light p-2">
					  <p>{profile.city}</p>
					</div>
				  </div>
				))}
		</div>
	);
};

export default Profile;
