import { createBrowserRouter } from "react-router-dom";
import { DatePicker, DayzenHome, Dialog, Home, Test, Toast, Login } from "./routes";

import { Root } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "test", element: <Test /> },
      { path: "toast", element: <Toast /> },
      { path: "dialog", element: <Dialog /> },
      { path: "date-picker", element: <DatePicker /> },
      // dayzen
      { path: "/dayzen", element: <DayzenHome /> },
    ],
  },
]);

export default router;
