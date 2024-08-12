import { BookOpenText, CakeSlice, CalendarDays, ChartNoAxesCombined, Cloud, House, LayoutGrid, LogOut, Menu, Star } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CustomAvatar } from "./custom-avatar";
import { removeToken } from "@/lib/token-helper";
import { useNavigate } from "react-router-dom";
import { GetUserProfileQuery, UserRole } from "@/graphql/generated";
import { Badge } from "./ui/badge";

export const CustomDropdown = () => {
  return <div></div>;
};

interface CustomHeaderCustomDropdownProps {
  isLogin: boolean;
  userData: GetUserProfileQuery | undefined;
}

const roleSwitcher = (role: UserRole | undefined) => {
  switch (role) {
    case "Manager":
      return "매니저";
    case "Client":
      return "게스트";
    case "Host":
      return "호스트";
    default:
      return "";
  }
};

export const HeaderCustomDropdown: React.FC<CustomHeaderCustomDropdownProps> = ({ isLogin, userData }) => {
  const navigate = useNavigate();

  // user
  const user = {
    user_name: userData?.me.name,
    user_role: roleSwitcher(userData?.me.role),
    user_profile_url: userData?.me.profileUrl,
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center border rounded-full px-3 py-2 gap-4 cursor-pointer">
          <CustomAvatar imageUrl={user.user_profile_url} />
          <Menu />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          {isLogin ? (
            <div className="flex gap-2 w-full">
              <p className="w-2/3 truncate">{user.user_name}</p>
              <Badge variant="outline">
                <p className="">{user.user_role}</p>
              </Badge>
            </div>
          ) : (
            "Dayzen 로그인하기"
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {!isLogin && (
          <DropdownMenuItem
            onClick={() => {
              handleLogin();
            }}
          >
            <Cloud className="mr-2 h-4 w-4" />
            <span>로그인</span>
          </DropdownMenuItem>
        )}
        {isLogin && (
          <>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <LayoutGrid className="mr-2 h-4 w-4" />
                <span>호스트 홈</span>
                <DropdownMenuShortcut>호스트</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <House className="mr-2 h-4 w-4" />
                <span>내 숙소</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>일정</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ChartNoAxesCombined className="mr-2 h-4 w-4" />
                <span>통계</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BookOpenText className="mr-2 h-4 w-4" />
                <span>예약 내역</span>
                <DropdownMenuShortcut>공통</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CakeSlice className="mr-2 h-4 w-4" />
                <span>위시리스트</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Star className="mr-2 h-4 w-4" />
                <span>리뷰</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                handleLogout();
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>로그아웃</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
