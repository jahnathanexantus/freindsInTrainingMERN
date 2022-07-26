import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
mutation addProfile($username: String!, $email: String!, $password: String!, ) {
	addProfile(username: $username , email: $email, password: $password, ) {
	  token
	  profile {
		_id
		username
		email
		password
	  }
	}
  }`;

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
		username
		email
		gender
	  }
	}
  }
`;

export const EDIT_PROFILE = gql`
mutation editProfile($gender: String!,$fitness_level: String!,$city: String!,$state: String!,$availability: String!) {
	editProfile(gender: $gender,fitness_level: $fitness_level,city: $city,state: $state,availability: $availability){
		gender
		fitness_level
		city
		state
		availability
	}
}`