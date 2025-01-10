"use client";

import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import PaymentTicket from "./PaymentTicket";
import PaymentButton from "./PaymentButton";

export interface Coupon {
  couponId: number;
  type: "percentage" | "fixed";
  name: string;
  daysUntilExpiry: number;
  discount: number;
}

const coupons: Coupon[] = [
  {
    couponId: 1,
    type: "percentage",
    name: "회원가입 기념 50% 할인권",
    daysUntilExpiry: 1,
    discount: 50,
  },
  {
    couponId: 2,
    type: "percentage",
    name: "회원가입 기념 50% 할인권",
    daysUntilExpiry: 1,
    discount: 50,
  },
  {
    couponId: 3,
    type: "percentage",
    name: "회원가입 기념 40% 할인권",
    daysUntilExpiry: 1,
    discount: 40,
  },
  {
    couponId: 4,
    type: "percentage",
    name: "회원가입 기념 40% 할인권",
    daysUntilExpiry: 1,
    discount: 40,
  },
  {
    couponId: 5,
    type: "percentage",
    name: "회원가입 기념 30% 할인권",
    daysUntilExpiry: 1,
    discount: 30,
  },
];

export default function PaymentTicketComponent() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);
  const [price, setPrice] = useState(10000);

  const bottomSheetOpen = () => {
    setIsBottomSheetOpen((prev) => !prev);
  };

  const handlCouponSelection = (coupon: Coupon) => {
    setSelectedCoupon((prev) =>
      prev?.couponId === coupon.couponId ? null : coupon
    );
  };

  useEffect(() => {
    if (selectedCoupon) {
      const discountAmout = 10000 * (selectedCoupon.discount / 100);
      setPrice(10000 - discountAmout);
    } else {
      setPrice(10000);
    }
  }, [selectedCoupon]);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-[1rem] py-6 px-4 space-y-6">
        <div className="flex justify-between items-center">
          <span className="font-[700] text-md">할인쿠폰</span>
          <span className="font-[500] text-[#7E7F83] text-[14px]">
            {coupons.length}장 보유
          </span>
        </div>
        <button
          className="flex items-center justify-between w-full"
          onClick={bottomSheetOpen}
        >
          <span
            className={`text-md ${
              selectedCoupon
                ? "font-[700] text-[#093AEE]"
                : "font-[500] text-[#4C4D4F]"
            }`}
          >
            {selectedCoupon
              ? `${selectedCoupon.name} 적용`
              : "쿠폰을 선택해주세요!"}
          </span>
          <MdKeyboardArrowRight color="#4C4D4F" size={24} />
        </button>
        <div
          className={`fixed bg-[#F0F0F0] inset-0 transition-all duration-300 ${
            isBottomSheetOpen ? "-translate-y-0" : "translate-y-full"
          } transform transition-all h-[100vh] w-full px-6 z-[100]`}
        >
          <div className="flex items-center relative justify-center">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2"
              onClick={bottomSheetOpen}
            >
              <Image src="/src/icon/Cancel.svg" alt="" width={24} height={24} />
            </button>
            <span className="font-[700]">할인쿠폰</span>
          </div>
          <div className="pt-8">
            <div className="flex flex-col gap-4">
              {coupons.map((coupon, index) => (
                <PaymentTicket
                  key={index}
                  coupon={coupon}
                  isSelected={selectedCoupon?.couponId === coupon.couponId}
                  onToggle={handlCouponSelection}
                />
              ))}
            </div>
          </div>
          <button
            className="fixed w-[90%] bottom-[8vh] left-1/2 text-center -translate-x-1/2 bg-[#093AEE] rounded-[999px] p-4 text-white font-[400]"
            onClick={bottomSheetOpen}
          >
            사용하기
          </button>
        </div>
      </div>
      <div className="bg-white rounded-[1rem] py-6 px-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[17px] font-bold">결제 금액</span>
          <span className="text-[17px] font-bold">
            {selectedCoupon ? `${price}원` : "10,000원"}
          </span>
        </div>
        <hr />
        <div className="font-[400] text-[#7E7F83] flex justify-between items-center">
          <span>주차요금</span>
          <span>10,000원</span>
        </div>
        {selectedCoupon ? (
          <div className="font-[400] text-[#7E7F83] flex justify-between items-center">
            <span>쿠폰</span>
            <span>
              -{(10000 * (selectedCoupon.discount / 100)).toLocaleString()}원
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <PaymentButton price={price} />
    </div>
  );
}
