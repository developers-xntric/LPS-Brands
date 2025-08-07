import LogoLPS from "@/components/icons/lps-logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/home/hero-bg.png')] bg-center bg-cover h-screen">
      <div className="2xl:max-w-[1440px] mx-auto w-[95%]">
        <div className="p-4 ms-6">
          <LogoLPS />
        </div>
        <div className="flex justify-center">
          <Image src={"/home/hero-gif.gif"} alt="Hero" width={650} height={650} />
        </div>
      </div>
    </div>
  );
}
