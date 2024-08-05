import { createBrowserRouter } from "react-router-dom";
import { Home, Test } from "./routes";
import { Root } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

export default router;
