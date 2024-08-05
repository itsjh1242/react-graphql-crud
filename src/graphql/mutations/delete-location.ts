import { gql } from "@apollo/client";

export const DELETE_LOCATION = gql`
  mutation DeleteLocation($input: DeleteLocationInput!) {
    deleteLocation(input: $input) {
      ok
      error
    }
  }
`;
