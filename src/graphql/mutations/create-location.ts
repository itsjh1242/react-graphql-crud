import { gql } from "@apollo/client";

export const CREATE_LOCATION = gql`
  mutation CreateLocation($CreateLocationInput: CreateLocationInput!) {
    createLocation(input: $CreateLocationInput) {
      ok
      error
    }
  }
`;
