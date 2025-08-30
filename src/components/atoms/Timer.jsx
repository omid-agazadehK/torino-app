import { useEffect, useState } from "react";

function Timer() {
  const [countDown, setCountDown] = useState(120);
  useEffect(() => {
    if (countDown === 0) return;
    const id = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [countDown]);
  const minute = String(Math.floor(countDown / 60)).padStart(2, "0");
  const second = String(Math.floor(countDown % 60)).padStart(2, "0");
  return (
    <div className="flex items-center justify-cente gap-x-0.5 mb-7 text-sm">
      <p>
        {minute}:{second}
      </p>
      <span>تا ارسال مجدد کد</span>
    </div>
  );
}

export default Timer;
