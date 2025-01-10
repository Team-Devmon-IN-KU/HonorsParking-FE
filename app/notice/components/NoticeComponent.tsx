import React from "react";

interface noticeProps {
  title: string;
  message: string;
  date: string;
}

export default function NoticeComponent({ title, message, date }: noticeProps) {
  return (
    <div className="bg-white rounded-[1rem] p-4 flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-[#2A2A2A] font-[700] text-[17px]">{title}</span>
        <span className="text-[#C5C8CB] font-[400] text-[13px]">{date}</span>
      </div>
      <span className="font-[400] text-[1rem] text-[#7E7F83]">{message}</span>
    </div>
  );
}
