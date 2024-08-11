import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const Root = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-max min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
