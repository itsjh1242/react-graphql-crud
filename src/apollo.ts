import { ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { isLoggedInVar, authTokenVar } from "./lib/reactiveVars";

const httpLink = createHttpLink({
  // uri: process.env.NODE_ENV === "production" ? "https://api.dayzen.me:9000/graphql" : "https://localhost:9000/graphql",
  uri: "https://api.dayzen.me:9000/graphql",
});

const wsLink = new WebSocketLink({
  uri: process.env.NODE_ENV === "production" ? "wss://api.dayzen.me:9000/graphql" : "wss://localhost:9000/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      "x-jwt": authTokenVar() || "",
    },
  },
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-jwt": authTokenVar() || "",
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  authLink.concat(httpLink)
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
          token: {
            read() {
              return authTokenVar();
            },
          },
        },
      },
    },
  }),
});
