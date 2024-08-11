import { useReactiveVar } from "@apollo/client";
import { Link } from "react-router-dom";
import dayzenLogo from "../assets/dayzen-logo.svg";
import { isLoggedInVar } from "@/lib/reactiveVars";
import { HeaderCustomDropdown } from "./custom-dropdown";
import { useGetUserProfileQuery } from "@/graphql/generated";

export const Header = () => {
  // isLogined?
  const isLogin = useReactiveVar(isLoggedInVar);

  // gql
  const { data: userData } = useGetUserProfileQuery({ skip: !isLogin });

  return (
    <header className="relative flex justify-between items-center w-screen h-20 px-24">
      <Link to="/">
        <img src={dayzenLogo} alt="logo_dayzen" className="h-12 cursor-pointer" />
      </Link>
      <HeaderCustomDropdown isLogin={isLogin} userData={userData} />
    </header>
  );
};
