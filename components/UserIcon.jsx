import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const UserIcon = ({ size = "sm" }) => {
  return (
    <Avatar
      className={cn(
        "w-[26px] h-[26px]" && size === "lg" && "w-[56px] h-[56px] "
      )}
    >
    <AvatarImage src="https://i.ibb.co/gjzHDN2/Cute-Yawning-Cat.jpg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserIcon;