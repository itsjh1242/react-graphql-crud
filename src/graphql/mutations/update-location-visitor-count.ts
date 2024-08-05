import { gql } from "@apollo/client";

export const UPDATE_LOCATION_VISITOR_COUNT = gql`
  mutation UpdateLocationVisitorCount($input: UpdateLocationVisitorCountInput!) {
    updateLocationVisitorCount(input: $input) {
      ok
      error
    }
  }
`;
