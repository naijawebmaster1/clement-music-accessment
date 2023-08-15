import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { defaultNavItems, defaultNavItemsExtra, NavItem } from "../defaultNavItems";
import { Icon } from '@iconify/react';
import { useAuth } from "context/AuthContext";
// add NavItem prop to component prop
type Props = {
  collapsed: boolean;
  navItems?: NavItem[];
  navItemsExtra?: NavItem[];
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};
const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  navItemsExtra = defaultNavItemsExtra,
  shown,
  setCollapsed,
}: Props) => {
  const [isChecked, setIsChecked] = useState(false)
  const { isDarkMode, setisDarkMode } = useAuth();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    setisDarkMode(!isDarkMode)
  }

  function isScreenWidthBeyond768() {
    return window.innerWidth > 768;
  }

  function useScreenWidthBeyond768() {
    const [isBeyond768, setIsBeyond768] = useState(false);

    useEffect(() => {
      function handleResize() {
        setIsBeyond768(window.innerWidth > 768);
      }

      // Initial check
      handleResize();
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return isBeyond768;
  }
  const isBeyond768 = useScreenWidthBeyond768();
  return (
    <div
      className={classNames({
        "bg-black-shadeOne text-white fixed md:static md:translate-x-0 z-20": true,
        "transition-all duration-300 ease-in-out": true,
        "w-full": !collapsed,
        "w-16": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={classNames({
          "flex flex-col justify-between h-screen sticky inset-0 w-full": true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            "flex items-center  transition-none": true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,

          })}
        >
          <button
            className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full "
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon icon="eva:menu-fill" style={{ fontSize: '24px', color: "#FFFFFF" }} />
          </button>
          {!collapsed && <img src="./icons/logo.svg" alt="" srcSet="" />}
        </div>
        <nav className="flex-grow ">
          <ul
            className={classNames({
              "my-2 flex flex-col gap-2 items-stretch ": true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "text-indigo-100 hover:bg-indigo-900 flex": true, //colors
                    "transition-colors duration-300": true, //animation
                    "rounded-md py-0 mx-0 gap-4 ": !collapsed,
                    "rounded-full py-2 mx-3 w-10 h-10": collapsed,
                  })}
                >
                  <Link href={item.href} className={`flex gap-4   py-2 `}
                    style={{
                      background: (item.href == "/") ? 'linear-gradient(90.09deg, rgba(71, 119, 225, 0.1) 2.8%, rgba(5, 38, 109, 0.074) 99.9%)' : "",
                      borderLeftWidth: (item.href == "/") ? '4px' : "",
                      borderLeftColor: (item.href == "/") ? '#1D4ED8' : "", // Blue-900 color
                      // borderLeftStyle: (item.href == "/") ?  'solid': "" ,
                      color: (item.href == "/") ? "#1D4ED8" : "",
                      padding: (collapsed) ? "30px 5px" : "30px 30px"
                    }}
                  >
                    {item.icon}
                    <span
                      className="text-tiny"
                    >{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
            <hr className="border-t-2 border-[#2A2D3C]" />
            {navItemsExtra.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "text-indigo-100 hover:bg-indigo-900 flex": true, //colors
                    "transition-colors duration-300": true, //animation
                    "rounded-md py-0 mx-0 gap-4 ": !collapsed,
                    "rounded-full py-2 mx-3 w-10 h-10": collapsed,

                  })}
                >
                  <Link href={item.href} className="flex gap-4 px-8  py-2 "
                    style={{
                      background: (item.href == "/") ? 'linear-gradient(90.09deg, rgba(71, 119, 225, 0.1) 2.8%, rgba(5, 38, 109, 0.074) 99.9%)' : "",
                      borderLeftWidth: (item.href == "/") ? '4px' : "",
                      borderLeftColor: (item.href == "/") ? '#1D4ED8' : "", // Blue-900 color
                      padding: (collapsed) ? "30px 5px" : "30px 30px"

                    }}
                  >
                    {item.icon}
                    <span className="text-tiny ">{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr className="border-t-2 border-[#2A2D3C]" />
          <div className="h-20"></div>
          <div className="flex my-2 p-2 pt-10">
            {!collapsed && <span className="text-sm text-white  p-1 px-2">
              Dark Mode
            </span>}
            <span className="">
              <>
                <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                  <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className='sr-only'
                  />
                  <span
                    className={`slider mx-2 flex h-4 w-[30px] items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
                      }`}
                  >
                    <span
                      className={`dot h-3 w-3 rounded-full bg-white duration-200 ${isChecked ? 'translate-x-[12px]' : ''
                        }`}
                    ></span>
                  </span>
                </label>
              </>
            </span>
          </div>
        </nav>
      </div>
    </div >
  );
};
export default Sidebar;


