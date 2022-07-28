const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    first_name: String
    last_name: String
    email:String
    gender:String
    fitness_level:String
    city:String
    state:String
    availability:String 
  }

  type Gym {
    _id:ID
    gym_name: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    gyms: [Gym]!
    gym(gymId: ID!): Gym
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
      gender: String!
      fitness_level: String!
      city: String!
      state: String!
      availability: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
