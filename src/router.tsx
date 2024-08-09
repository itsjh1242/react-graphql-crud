import { createBrowserRouter } from "react-router-dom";
import { DatePicker, Dialog, Home, Test, Toast } from "./routes";
import { Root } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "test", element: <Test /> },
      { path: "toast", element: <Toast /> },
      { path: "dialog", element: <Dialog /> },
      { path: "date-picker", element: <DatePicker /> },
    ],
  },
]);

export default router;
