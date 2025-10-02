import Image from "next/image";

function Welcome() {
  return (
    <>
      <section className="flex items-center justify-center">
        <Image
          src="/images/welcome.webp"
          alt="welcome image"
          width={1200}
          height={250}
          priority
          className="box-content w-360"
        />
      </section>
    </>
  );
}

export default Welcome;
