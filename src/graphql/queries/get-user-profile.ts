import { gql } from "@apollo/client";

export const GET_USER_PROFILE_QUERY = gql`
  query getUserProfile {
    me {
      id
      name
      phone
      profileUrl
      role
      nationality
      selfIntro
    }
  }
`;
