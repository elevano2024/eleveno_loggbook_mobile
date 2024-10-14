// apolloClient.ts
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  split,
  ApolloLink,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";

const isDev = process.env.NODE_ENV === "development";
const isBrowser = typeof window !== "undefined";

// Initialize Apollo Client instance with cache persistence
const cache = new InMemoryCache();

// Error handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

// HTTP link
const httpLink = new HttpLink({
  uri: isDev
    ? process.env.EXPO_PUBLIC_HASURA_ENDPOINT_DEV
    : process.env.EXPO_PUBLIC_HASURA_ENDPOINT_PROD,
});

// Create a WebSocket link only if in the browser
let wsLink;
if (isBrowser) {
  wsLink = new WebSocketLink(
    new SubscriptionClient(
      isDev
        ? (process.env.EXPO_PUBLIC_HASURA_ENDPOINT_WS_DEV as string)
        : (process.env.EXPO_PUBLIC_HASURA_ENDPOINT_WS_PROD as string),
      {
        reconnect: true,
        connectionParams: {
          headers: {
            "x-hasura-admin-secret": isDev
              ? process.env.EXPO_PUBLIC_HASURA_ADMIN_SECRET_DEV
              : process.env.EXPO_PUBLIC_HASURA_ADMIN_SECRET_PROD,
          },
        },
      },
      global.WebSocket // Use the standard WebSocket implementation
    )
  );
}

// Auth link
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      "x-hasura-admin-secret": isDev
        ? process.env.EXPO_PUBLIC_HASURA_ADMIN_SECRET_DEV
        : process.env.EXPO_PUBLIC_HASURA_ADMIN_SECRET_PROD,
    },
  }));
  return forward(operation);
});

// Split links, so we can send data to each link
const link = isBrowser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink || httpLink,
      authLink.concat(httpLink)
    )
  : authLink.concat(httpLink);

// Apollo Client instance
const apolloClient = new ApolloClient({
  link,
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network", // Use cached data first
    },
    query: {
      fetchPolicy: "cache-first", // Use cached data first
    },
  },
});

export default apolloClient;
