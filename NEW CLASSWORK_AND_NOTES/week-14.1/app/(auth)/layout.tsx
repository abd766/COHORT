import React from "react";

export default function ({children}: {
    children: React.ReactNode
}) {
  return (
    <div>
      <div className="border-b p-4 text-center">20% off for few days</div>
    {children}
    </div>
  );
}
