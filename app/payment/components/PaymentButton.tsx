import React from "react";
import { useRouter } from "next/navigation";

interface PaymentButtonProps {
  price: number;
}

export default function PaymentButton({ price }: PaymentButtonProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/payment/tosspayment')
  }
  const fomattedPrice = price.toLocaleString();
  return (
    <button className="fixed w-[90%] max-w-[691px] bottom-[5vh] left-1/2 text-center -translate-x-1/2 bg-[#093AEE] rounded-[999px] p-4" onClick={handleNavigate}>
      <span className="text-white font-[400]">{fomattedPrice}원 결제하기</span>
    </button>
  );
}
