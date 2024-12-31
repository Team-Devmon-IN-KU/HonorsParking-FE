import React from "react";
import FooterNav from "../common/FooterNav";
import MyPageHeader from "./components/MypageHeader";

export default function page() {
  return (
    <div>
      <MyPageHeader />
      <FooterNav currentpage="mypage" />
    </div>
  );
}
