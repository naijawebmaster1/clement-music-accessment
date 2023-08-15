import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuth } from "context/AuthContext";
const Layout = (props: PropsWithChildren) => {
  const { isCollapsed, showSidebar, setShowSidebar, setSidebarCollapsed } = useAuth();
  return (
    <div
      className={classNames({
        "grid bg-zinc-100 min-h-screen": true,
        "grid-cols-sidebar": !isCollapsed,
        "md:grid-cols-sidebar-collapsed": isCollapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
        fontFamily: 'poppins',
      })}
    >
      <Sidebar
        collapsed={isCollapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
      />
      <div className="">
        <Navbar onMenuButtonClick={() => setShowSidebar((prev: boolean) => !prev)} />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
