import React from "react";
import Image from "next/image";

interface FooterNavProps {
  currentpage: "home" | "parking" | "ticket" | "mypage";
}

export default function FooterNav({ currentpage }: FooterNavProps) {
  return (
    <div className="fixed bottom-0 w-full h-[100px] bg-[#000000C7] flex flex-row justify-between rounded-[3rem] px-12">
      <button className="flex flex-col justify-center items-center gap-2">
        <Image
          src={currentpage === "home" ? "/src/icon/OnHome.svg" : "/src/icon/Home.svg"}
          alt=""
          width={24}
          height={24}
        />
        <span
          className={`${
            currentpage === "home" ? "text-white" : "text-[#64656A]"
          } font-[500]`}
        >
          홈
        </span>
      </button>
      <button className="flex flex-col justify-center items-center gap-2">
        <Image
          src={
            currentpage === "parking"
              ? "/src/icon/OnParking.svg"
              : "/src/icon/Parking.svg"
          }
          alt=""
          width={24}
          height={24}
        />
        <span
          className={`${
            currentpage === "parking" ? "text-white" : "text-[#64656A]"
          } font-[500]`}
        >
          주차장
        </span>
      </button>
      <button className="flex flex-col justify-center items-center gap-2">
        <Image
          src={
            currentpage === "ticket" ? "/src/icon/OnTicket.svg" : "/src/icon/Ticket.svg"
          }
          alt=""
          width={24}
          height={24}
        />
        <span
          className={`${
            currentpage === "ticket" ? "text-white" : "text-[#64656A]"
          } font-[500]`}
        >
          이용권
        </span>
      </button>
      <button className="flex flex-col justify-center items-center gap-2">
        <Image
          src={
            currentpage === "mypage" ? "/src/icon/OnMyPage.svg" : "/src/icon/MyPage.svg"
          }
          alt=""
          width={24}
          height={24}
        />
        <span
          className={`${
            currentpage === "mypage" ? "text-white" : "text-[#64656A]"
          } font-[500]`}   
        >
          마이
        </span>
      </button>
    </div>
  );
}
