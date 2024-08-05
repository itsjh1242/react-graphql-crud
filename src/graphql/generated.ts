import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateLocationInput = {
  placeName: Scalars['String']['input'];
  placeNumber?: InputMaybe<Scalars['Int']['input']>;
  placeVisitorCount: Scalars['Int']['input'];
};

export type CreateLocationOutput = {
  __typename?: 'CreateLocationOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteLocationInput = {
  placeNumber: Scalars['Int']['input'];
};

export type DeleteLocationOutput = {
  __typename?: 'DeleteLocationOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetAllLocationOutput = {
  __typename?: 'GetAllLocationOutput';
  error?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Array<Location>>;
  ok: Scalars['Boolean']['output'];
};

export type GetLocationInput = {
  placeNumber: Scalars['Int']['input'];
};

export type GetLocationOutput = {
  __typename?: 'GetLocationOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  placeName?: Maybe<Scalars['String']['output']>;
  placeNumber?: Maybe<Scalars['Int']['output']>;
  placeVisitorCount?: Maybe<Scalars['Int']['output']>;
};

export type Location = {
  __typename?: 'Location';
  placeName: Scalars['String']['output'];
  placeNumber: Scalars['Int']['output'];
  placeVisitorCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLocation: CreateLocationOutput;
  deleteLocation: DeleteLocationOutput;
  updateLocationVisitorCount: UpdateLocationVisitorCountOutput;
};


export type MutationCreateLocationArgs = {
  input: CreateLocationInput;
};


export type MutationDeleteLocationArgs = {
  input: DeleteLocationInput;
};


export type MutationUpdateLocationVisitorCountArgs = {
  input: UpdateLocationVisitorCountInput;
};

export type Query = {
  __typename?: 'Query';
  getAllLocation: GetAllLocationOutput;
  getLocation: GetLocationOutput;
};


export type QueryGetLocationArgs = {
  input: GetLocationInput;
};

export type UpdateLocationVisitorCountInput = {
  placeNumber: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};

export type UpdateLocationVisitorCountOutput = {
  __typename?: 'UpdateLocationVisitorCountOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateLocationMutationVariables = Exact<{
  input: CreateLocationInput;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation: { __typename?: 'CreateLocationOutput', ok: boolean, error?: string | null } };

export type DeleteLocationMutationVariables = Exact<{
  input: DeleteLocationInput;
}>;


export type DeleteLocationMutation = { __typename?: 'Mutation', deleteLocation: { __typename?: 'DeleteLocationOutput', ok: boolean, error?: string | null } };

export type UpdateLocationVisitorCountMutationVariables = Exact<{
  input: UpdateLocationVisitorCountInput;
}>;


export type UpdateLocationVisitorCountMutation = { __typename?: 'Mutation', updateLocationVisitorCount: { __typename?: 'UpdateLocationVisitorCountOutput', ok: boolean, error?: string | null } };

export type GetLocationQueryVariables = Exact<{
  input: GetLocationInput;
}>;


export type GetLocationQuery = { __typename?: 'Query', getLocation: { __typename?: 'GetLocationOutput', ok: boolean, error?: string | null, placeName?: string | null, placeNumber?: number | null, placeVisitorCount?: number | null } };

export type GetLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsQuery = { __typename?: 'Query', getAllLocation: { __typename?: 'GetAllLocationOutput', ok: boolean, locations?: Array<{ __typename?: 'Location', placeName: string, placeNumber: number, placeVisitorCount: number }> | null } };


export const CreateLocationDocument = gql`
    mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    ok
    error
  }
}
    `;
export type CreateLocationMutationFn = Apollo.MutationFunction<CreateLocationMutation, CreateLocationMutationVariables>;

/**
 * __useCreateLocationMutation__
 *
 * To run a mutation, you first call `useCreateLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLocationMutation, { data, loading, error }] = useCreateLocationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLocationMutation(baseOptions?: Apollo.MutationHookOptions<CreateLocationMutation, CreateLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLocationMutation, CreateLocationMutationVariables>(CreateLocationDocument, options);
      }
export type CreateLocationMutationHookResult = ReturnType<typeof useCreateLocationMutation>;
export type CreateLocationMutationResult = Apollo.MutationResult<CreateLocationMutation>;
export type CreateLocationMutationOptions = Apollo.BaseMutationOptions<CreateLocationMutation, CreateLocationMutationVariables>;
export const DeleteLocationDocument = gql`
    mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
    ok
    error
  }
}
    `;
export type DeleteLocationMutationFn = Apollo.MutationFunction<DeleteLocationMutation, DeleteLocationMutationVariables>;

/**
 * __useDeleteLocationMutation__
 *
 * To run a mutation, you first call `useDeleteLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLocationMutation, { data, loading, error }] = useDeleteLocationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteLocationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLocationMutation, DeleteLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLocationMutation, DeleteLocationMutationVariables>(DeleteLocationDocument, options);
      }
export type DeleteLocationMutationHookResult = ReturnType<typeof useDeleteLocationMutation>;
export type DeleteLocationMutationResult = Apollo.MutationResult<DeleteLocationMutation>;
export type DeleteLocationMutationOptions = Apollo.BaseMutationOptions<DeleteLocationMutation, DeleteLocationMutationVariables>;
export const UpdateLocationVisitorCountDocument = gql`
    mutation UpdateLocationVisitorCount($input: UpdateLocationVisitorCountInput!) {
  updateLocationVisitorCount(input: $input) {
    ok
    error
  }
}
    `;
export type UpdateLocationVisitorCountMutationFn = Apollo.MutationFunction<UpdateLocationVisitorCountMutation, UpdateLocationVisitorCountMutationVariables>;

/**
 * __useUpdateLocationVisitorCountMutation__
 *
 * To run a mutation, you first call `useUpdateLocationVisitorCountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLocationVisitorCountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLocationVisitorCountMutation, { data, loading, error }] = useUpdateLocationVisitorCountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLocationVisitorCountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLocationVisitorCountMutation, UpdateLocationVisitorCountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLocationVisitorCountMutation, UpdateLocationVisitorCountMutationVariables>(UpdateLocationVisitorCountDocument, options);
      }
export type UpdateLocationVisitorCountMutationHookResult = ReturnType<typeof useUpdateLocationVisitorCountMutation>;
export type UpdateLocationVisitorCountMutationResult = Apollo.MutationResult<UpdateLocationVisitorCountMutation>;
export type UpdateLocationVisitorCountMutationOptions = Apollo.BaseMutationOptions<UpdateLocationVisitorCountMutation, UpdateLocationVisitorCountMutationVariables>;
export const GetLocationDocument = gql`
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

/**
 * __useGetLocationQuery__
 *
 * To run a query within a React component, call `useGetLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetLocationQuery(baseOptions: Apollo.QueryHookOptions<GetLocationQuery, GetLocationQueryVariables> & ({ variables: GetLocationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, options);
      }
export function useGetLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, options);
        }
export function useGetLocationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, options);
        }
export type GetLocationQueryHookResult = ReturnType<typeof useGetLocationQuery>;
export type GetLocationLazyQueryHookResult = ReturnType<typeof useGetLocationLazyQuery>;
export type GetLocationSuspenseQueryHookResult = ReturnType<typeof useGetLocationSuspenseQuery>;
export type GetLocationQueryResult = Apollo.QueryResult<GetLocationQuery, GetLocationQueryVariables>;
export const GetLocationsDocument = gql`
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

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLocationsQuery(baseOptions?: Apollo.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
      }
export function useGetLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export function useGetLocationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsSuspenseQueryHookResult = ReturnType<typeof useGetLocationsSuspenseQuery>;
export type GetLocationsQueryResult = Apollo.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;