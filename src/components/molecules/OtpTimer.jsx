"use client";
import { useEffect, useState } from "react";
import ResendOtpButton from "../atoms/ResendOtpButton";
import Timer from "../atoms/Timer";

export default function OtpTimer({ phoneNumber }) {
  const [countDown, setCountDown] = useState(120);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (countDown <= 0) {
      setIsExpired(true);
      return;
    }
    const timer = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countDown]);
  return (
    <div className="flex gap-x-2 items-center justify-center mb-5 ">
      {!isExpired ? (
        <Timer countDown={countDown} />
      ) : (
        <ResendOtpButton
          phoneNumber={phoneNumber}
          setIsExpired={setIsExpired}
          setCountDown={setCountDown}
        />
      )}
    </div>
  );
}
