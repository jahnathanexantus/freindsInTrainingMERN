import React from "react";

// import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";

import { QUERY_PROFILES } from "../../utils/queries";
import uuid from "react-uuid";

const Profile = () => {
	const { loading, data } = useQuery(QUERY_PROFILES);
	const profileData = data?.profiles || [];

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="myProfile">
			<h1>Profiles</h1>
			<div className="profiles">
				{profileData.map((profile) => {
					console.log(profile);
					let { first_name, last_name, city, state, gender, fitness_level } =
						profile;
					return (
						<div key={uuid()} className="profileCard">
							<div className="profileCardPhoto"></div>
							<div className="profileCardBody">
								<p
									style={{ fontWeight: "bold" }}
								>{`${first_name} ${last_name}`}</p>
								<p>{`Location: ${city}, ${state}`}</p>
								<p>{`Gender: ${gender}`}</p>
								<p>{`Fitness Level: ${fitness_level}`}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Profile;
