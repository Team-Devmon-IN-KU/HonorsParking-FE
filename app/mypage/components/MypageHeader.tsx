"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import SideBar from "@/app/common/SideBar";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MyPageHeader() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const newNotification = 1;
  const username = "김선엽";

  const toggleSideBar = () => {
    setIsSideBarOpen(true);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <div className="w-full">
      <div className="relative w-full bg-[#2A2A2A] rounded-b-[6%]">
        <div className="flex justify-between items-center p-6 w-full">
          <button className="justify-self-start" onClick={toggleSideBar}>
            <Image
              src="/src/icon/MyPageSideBar.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>
          <button className="justify-self-end">
            {newNotification > 0 ? (
              <Image
                src="/src/icon/MyPageNewNotification.svg"
                alt=""
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/src/icon/MyPageNotification.svg"
                alt=""
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
        <div className="relative pl-6 py-10 w-full overflow-hidden">
          <button className="text-white flex items-center">
            <span className="text-[1.25rem] font-[700]">{username} 님</span>
            <MdKeyboardArrowRight size={20} />
          </button>
          <Image
            src="/src/image/MyPageCar.png"
            alt=""
            width={250}
            height={20}
            className="absolute bottom-0 right-0"
          />
        </div>
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
            isSideBarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } z-[1000]`}
          onClick={closeSideBar}
        >
          <div
            className={`fixed inset-0 top-0 left-0 shadow-lg transform transition-transform duration-300 w-[80vw] ${
              isSideBarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
