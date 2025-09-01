function Timer({ countDown }) {
  const minute = String(Math.floor(countDown / 60)).padStart(2, "0");
  const second = String(Math.floor(countDown % 60)).padStart(2, "0");
  return (
    <div className="flex items-center justify-cente gap-x-0.5  text-sm">
      {countDown > 0 ? (
        <>
          <p>
            {minute}:{second}
          </p>
          <span>تا ارسال مجدد کد</span>
        </>
      ) : (
        <p>کد منقضی شد</p>
      )}
    </div>
  );
}

export default Timer;
