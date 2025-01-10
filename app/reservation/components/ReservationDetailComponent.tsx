"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReservationDetailComponents() {
  const [isBookMark, setIsBookMark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookMark = () => {
    setIsBookMark((prev) => !prev);
  };
  const router = useRouter();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      className="flex flex-col w-full bg-[#fff] p-4 rounded-[16px] gap-4"
      onClick={() => router.push("/reservation/place")}
    >
      {/* 예약 컴포넌트 헤더 */}
      <div className="flex flex-row justify-between">
        {/* 주소지 */}
        <div className="flex flex-row gap-3">
          <Image src="/src/image/Sample.png" alt="" width={48} height={48} />
          <div className="flex flex-col items-start justify-center">
            <span className="font-[700]">A타워</span>
            <span className="text-[#7E7F83] font-[500]">
              경기도 용인시 처인구
            </span>
          </div>
        </div>
        {/* 즐겨찾기 버튼 */}
        <button onClick={handleBookMark}>
          {isBookMark ? (
            <Image
              src="/src/icon/OnBookMark.svg"
              alt=""
              width={30}
              height={30}
            />
          ) : (
            <Image src="/src/icon/BookMark.svg" alt="" width={30} height={30} />
          )}
        </button>
      </div>
      <div className="w-full grid grid-cols-2 gap-3">
        <div className="bg-[#F7F7F7] rounded-[16px] p-3 flex flex-col gap-5">
          <div className="flex flex-row items-center justify-start">
            <Image src="/src/icon/Parking.svg" alt="" width={30} height={30} />
            <span className="text-[#4C4D4F] font-[500]">주차공간</span>
          </div>
          <span className="text-xl font-[700] pl-3 pb-2">100개</span>
        </div>
        <div className="bg-[#F7F7F7] rounded-[16px] p-3 flex flex-col gap-5">
          <div className="flex flex-row items-center justify-start">
            <Image src="/src/icon/ElectCar.svg" alt="" width={30} height={30} />
            <span className="text-[#4C4D4F] font-[500]">전기차</span>
          </div>
          <span className="text-xl font-[700] pl-3 pb-2">30개</span>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-start pl-2">
        <span className="text-[#2A2A2A] font-[700] text-lg">1,500원</span>
        <span className="text-[#7E7F83] font-[500] text-[15px]">시간당</span>
      </div>
      <button
        className="rounded-[999px] bg-[#093AEE] p-3 text-white font-[400]"
        onClick={handleModalOpen}
      >
        예약하기
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-[16px] w-[90%] max-w-md">
            <h2 className="text-[17px] font-[700] mb-4">
              정말 예약하시겠습니까?
            </h2>
            <div className="bg-[#F7F7F7] rounded-[10px] p-4 space-y-4">
              <span className="text-[#093AEE] font-[700] text-md">
                용인 공영주차장
              </span>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-[500] text-[#7E7F83]">
                    시간당
                  </span>
                  <span className="font-[700] text-[#2a2a2a] text-md">
                    500원
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-[500] text-[#7E7F83]">
                    입차 시작 시간
                  </span>
                  <span className="font-[700] text-[#2a2a2a] text-md">
                    오후 6시 10분
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 mt-6">
              <button
                className="rounded-[999px] bg-white p-4 px-12 font-[500] text-md text-[#2a2a2a]"
                onClick={handleModalClose}
              >
                취소
              </button>
              <button
                className="rounded-[999px] bg-[#093AEE] p-4 px-12 text-white font-[500]"
                onClick={() => {
                  alert("예약되었습니다!");
                  handleModalClose();
                }}
              >
                예약하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
