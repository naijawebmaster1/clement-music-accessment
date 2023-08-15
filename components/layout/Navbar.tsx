import React from "react";
import classNames from "classnames";
import { Icon } from '@iconify/react';


type Props = {
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        "bg-black-shadeOne text-gray-light": true, // colors
        "flex items-center": true, // layout
        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true, //positioning & styling
      })}
    >
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Icon icon="eva:menu-fill" style={{ fontSize: '24px', color: "white" }} />
      </button>
      <div className="flex justify-between absolute left-0 right-0 px-4 top-4">
        <div className="flex my-2">
          <img className="w-7 mr-3" src="/icons/music.svg" alt="happy" />
          <p className="text-lg text-white mr-3 font-semibold">
            Bass
          </p>
          <span className="mt-1">
            <Icon icon="mingcute:down-fill" style={{ fontSize: '18px' }} />
          </span>
        </div>
        <div className="flex my-2">
          <div className="mr-10 md:block hidden">
            <form method="GET">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" className="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
                </span>
                <input type="search" name="q" className="py-2 text-sm text-white bg-black-shadeTwo rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search" autoComplete="off" />
              </div>
            </form>
          </div>
          <div className="relative mr-10 mt-1">
            <Icon icon="basil:notification-outline" style={{ fontSize: '24px', color: "white" }} />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red rounded-full"></div>
          </div>
          <span className="text-lg text-white mr-3 font-semibold bg-blue-500 rounded-full p-1 px-2">
            SA
          </span>
          <span className="mt-1">
            <Icon icon="mingcute:down-fill" style={{ fontSize: '18px' }} />
          </span>
        </div>
      </div>
      <div className="flex-grow"></div>
    </nav>
  );
};

export default Navbar;
