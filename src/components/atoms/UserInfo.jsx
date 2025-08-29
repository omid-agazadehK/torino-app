import React from "react";

function UserInfo({onClick}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center gap-x-1 text-primary cursor-pointer hover:text-secondary transition-colors duration-200"
    >
      <Icons name="profile" className="size-6" />
      <span className="text-lg">09370841433</span>
      <Icons name="arrow-down" className="size-6" />
    </div>
  );
}

export default UserInfo;
