import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const Root = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-max min-h-screen">
        <Header />
        <div className="flex-grow px-24">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
