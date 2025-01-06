import React from "react";
import NoticeHeader from "./components/NoticeHeader";
import Notice from "./components/Notice";

export default function page() {
  return (
    <div className="bg-[#f0f0f0] h-[100vh]">
      <NoticeHeader />
      <div className="px-6">
        <Notice />
      </div>
    </div>
  );
}
