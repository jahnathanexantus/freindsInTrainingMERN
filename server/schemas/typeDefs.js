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

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
