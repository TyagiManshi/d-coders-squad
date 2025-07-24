import Image from "next/image";

export default function Home() {
  return (
<div className="w-screen h-svh flex justify-center items-center text-center bg-cover bg-center bg-no-repeat bg-[url(../assets/hero-bg.jpg)]">
  <h1 className="font-inter text-[var(--foreground)] text-[6vw] font-bold tracking-[-0.5rem] leading-[1] uppercase [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
    D
    <span className="font-space-grotesk tracking-normal text-[var(--foreground-alt)] ml-2">Coders </span>
    <span className="ml-2">Squad</span>
  </h1>
</div>
  );
}
