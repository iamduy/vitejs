import React from "react";
import { Outlet } from "react-router-dom";
const PublicLayout: React.FC<any> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
