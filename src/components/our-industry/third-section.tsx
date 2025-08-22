import Image from "next/image";

export default function ThirdSection() {
  return (
    <div className="my-20">
      <div className="w-[90%] mx-auto 2xl:max-w-[1740px]">
        <div className="flex justify-between items-center gap-12 ">
          {/* Image Column */}
          <div className="relative w-1/2">
            <Image
              src="/our-industry/6.png"
              alt="How LPS Helps This Industry"
              width={1000}
              height={1000}
              className="w-full h-full object-center rounded-[20px]"
              priority
            />
          </div>
          {/* Content Column */}
          <div className="space-y-6 w-1/2">
            <h2 className="text-[64px] font-medium text-[#101820] leading-[60px] mb-10">
              How LPS Helps <br /> This Industry
            </h2>
            <div className=" max-w-[85%]  relative">
              <div className="border-l border-[#000000] w-full h-[100%] absolute"></div>
              <div className=" w-2 h-2 bg-[#00FE0B] rounded-full absolute top-1  left-4"></div>
              <div className="ml-10">
                <p className="text-gray-700 leading-relaxed text-[20px] font-['Exo']">
                  Working with government agencies, LPS helps to reinvent
                  communication with intent and strength. We humanise messaging
                  by converting policies into understandable language and
                  practical application. We create multichannel marketing
                  inspired, informed, and included. Our strategic narratives
                  increase public involvement, help to clear uncertainty, and
                  foster trust.
                </p>
                <p className="text-gray-700 leading-relaxed text-[20px] mt-10 font-['Exo']">
                  We design accessible, transparent, functional mobile-first
                  digital experiences. From public health consciousness to
                  social welfare campaigns - we make sure the message inspires
                  actual behaviour. Governments using LPS conduct dialogues that
                  transform communities, not just provide information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
