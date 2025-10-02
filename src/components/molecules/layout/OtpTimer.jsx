"use client";
import { useEffect, useState } from "react";
import ResendOtpButton from "../../atoms/layout/ResendOtpButton";
import Timer from "../../atoms/layout/Timer";

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
    <div className="mb-5 flex items-center justify-center gap-x-2">
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
