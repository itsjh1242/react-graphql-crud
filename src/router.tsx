import { createBrowserRouter } from "react-router-dom";
import { DayzenHome, Login } from "./routes";

import { Root } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <DayzenHome /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
