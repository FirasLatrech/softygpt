import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="w-8 h-8 scale-150 border rounded-full ">
      <AvatarImage className="p-1" src="/test.png" />
    </Avatar>
  );
};
