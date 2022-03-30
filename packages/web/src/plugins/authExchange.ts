import { makeOperation } from "@urql/core";
import { useApplicationStore } from "@/store/Application.store";
import { authExchange } from "@urql/exchange-auth";
type authState = {
  token?: string;
};

export default authExchange<authState>({
  didAuthError: ({ error }) => {
    return error.graphQLErrors.some((e) => e.extensions?.code === "FORBIDDEN");
  },
  willAuthError: ({ authState }) => {
    if (!authState) return true;
    // e.g. check for expiration, existence of auth etc
    return false;
  },
  getAuth: async ({ authState }) => {
    const applicationStore = useApplicationStore();
    if (!authState) {
      if (!applicationStore.credentials) return null;
      const token = applicationStore.credentials.token;
      if (token) return { token };
    }
    console.log("Something wrong with auth state, logging out.");
    applicationStore.logout();

    //TODO: Has a auth state, but its stale or something?
    return null;
  },
  addAuthToOperation: ({ authState, operation }) => {
    if (!authState || !authState.token) {
      return operation;
    }
    const fetchOptions =
      typeof operation.context.fetchOptions === "function"
        ? operation.context.fetchOptions()
        : operation.context.fetchOptions || {};

    return makeOperation(operation.kind, operation, {
      ...operation.context,
      fetchOptions: {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: `Bearer ${authState.token}`,
        },
      },
    });
  },
});
