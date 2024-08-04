import React from "react";
import ReactDOM from "react-dom/client";

import router from "./router";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo.ts";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
    </ApolloProvider>
  </React.StrictMode>
);
