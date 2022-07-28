import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
	mutation addProfile(
		$first_name: String!
		$last_name: String!
		$email: String!
		$password: String!
		$gender: String!
		$fitness_level: String!
		$city: String!
		$state: String!
		$availability: String!
	) {
		addProfile(
			first_name: $first_name
			email: $email
			password: $password
			gender: $gender
			fitness_level: $fitness_level
			city: $city
			state: $state
			availability: $availability
		) {
			token
			profile {
				_id
				first_name
				last_name
				email
				password
				gender
				fitness_level
				city
				state
				availability
			}
		}
	}
`;

export const ADD_SKILL = gql`
	mutation addSkill($profileId: ID!, $skill: String!) {
		addSkill(profileId: $profileId, skill: $skill) {
			_id
			name
			skills
		}
	}
`;

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			profile {
				_id
				name
			}
		}
	}
`;
