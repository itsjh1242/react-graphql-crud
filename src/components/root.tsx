import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-max">
        <Outlet />
      </div>
    </div>
  );
};
