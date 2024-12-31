"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginFormContainer() {
  const router = useRouter();
  const userInfo = {
    userId: "sunyeop12",
    password: "123",
  };

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (id === userInfo.userId && password === userInfo.password) {
      router.push("/");
    } else {
      alert("로그인 정보가 일치하지 않습니다.");
    }
  };

  return (
    <div className="bg-white rounded-t-[32px] w-full px-4 pt-8">
      <div className="flex flex-col items-center w-full gap-6">
        <div className="flex flex-col w-[95%] gap-1">
          <span className="text-[#7E7F83]">이메일</span>
          <input
            className="rounded-[12px] border border-1 p-4 focus:placeholder-transparent focus:outline-none focus:border-[#093AEE]"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-[95%] gap-1">
          <span className="text-[#7E7F83]">비밀번호</span>
          <input
            className="rounded-[12px] border border-1 p-4 focus:placeholder-transparent focus:outline-none focus:border-[#093AEE]"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 w-[95%] items-center">
          <button
            className="font-[500] text-white bg-[#093AEE] rounded-[3rem] w-full p-5 text-[17px]"
            onClick={handleLogin}
          >
            로그인
          </button>
          <button className="border border-1 border-[#093AEE] font-[500] text-[#093AEE] p-5 w-full text-[17px] rounded-[3rem]">
            회원가입
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 mt-10">
        <span className="text-[#7E7F83] text-[16px] font-[500]">
          SNS로 간편하게 시작하기
        </span>
        <div className="flex flex-row gap-8">
          <button>
            <Image
              src="/src/image/KakaoLogin.png"
              alt=""
              width={60}
              height={50}
            />
          </button>
          <button>
            <Image
              src="/src/image/NaverLogin.png"
              alt=""
              width={60}
              height={50}
            />
          </button>
          <button>
            <Image
              src="/src/image/GoogleLogin.png"
              alt=""
              width={60}
              height={50}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
