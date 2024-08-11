import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CustomAvatarProps {
  imageUrl?: string | null | undefined;
}

export const CustomAvatar: React.FC<CustomAvatarProps> = ({ imageUrl }) => {
  return (
    <Avatar>
      <AvatarImage src={imageUrl ? imageUrl : "https://github.com/shadcn.png"} alt="@shadcn" />
      <AvatarFallback>?</AvatarFallback>
    </Avatar>
  );
};
