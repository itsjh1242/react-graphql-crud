import { gql } from "@apollo/client";

export const CREATE_LOCATION = gql`
  mutation CreateLocation($input: CreateLocationInput!) {
    createLocation(input: $input) {
      ok
      error
    }
  }
`;
