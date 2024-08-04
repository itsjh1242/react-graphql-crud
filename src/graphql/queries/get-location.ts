import { gql } from "@apollo/client";

export const GET_LOCATION = gql`
  query GetLocation($input: GetLocationInput!) {
    getLocation(input: $input) {
      ok
      error
      placeName
      placeNumber
      placeVisitorCount
    }
  }
`;
