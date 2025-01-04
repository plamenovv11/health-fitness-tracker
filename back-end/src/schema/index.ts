import { gql } from "apollo-server-express";
import { mergeTypeDefs } from "@graphql-tools/merge";

const userTypeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
    }

    type AuthPayload {
        user: User!
        token: String!
    }

    type Query {
        login(username: String!, password: String!): AuthPayload!
    }

    type Mutation {
        register(username: String!, email: String!, password: String!): User!
    }
`;

const userActivityTypeDefs = gql`
    type UserActivity {
        id: ID!
        userId: Int!
        date: String!
        caloriesBurned: Int
        stepsCounted: Int
    }

    extend type Query {
        getUserActivities(userId: Int!): [UserActivity]
    }
`;


export const typeDefs = mergeTypeDefs([userTypeDefs, userActivityTypeDefs]);
