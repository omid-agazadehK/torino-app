import React from "react";

export default function ProfileContainer({ children, title }) {
  return (
    <div className="w-full rounded-xl border border-black/20 p-3">
      <h5>{title}</h5>
      {children}
    </div>
  );
}
