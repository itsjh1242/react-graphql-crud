import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query GetLocations {
    getAllLocation {
      ok
      locations {
        placeName
        placeNumber
        placeVisitorCount
      }
    }
  }
`;
