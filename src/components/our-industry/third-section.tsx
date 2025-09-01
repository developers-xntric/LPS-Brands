import Image from "next/image";

export default function ThirdSection({img,heading,para1,para2}:{img:string,heading:string,para1:string,para2:string}) {
  return (
    <div className="my-20">
      <div className="w-[90%] mx-auto 2xl:max-w-[1740px]">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-8 ">
          {/* Image Column */}
          <div className="relative lg:w-1/2">
            <Image
              src={img}
              alt="How LPS Helps This Industry"
              width={1000}
              height={1000}
              className="w-full h-full object-center rounded-[20px]"
              priority
            />
          </div>
          {/* Content Column */}
          <div className="space-y-6 lg:w-1/2">
            <h2 className="2xl:text-[55px] text-[28px] md:text-[38px] font-semibold 2xl:max-w-[80%] text-[#101820] md:leading-[40px] leading-[32px] xl:leading-[46px] mb-10">
              {heading}
            </h2>
            <div className=" md:max-w-[85%]  relative">
              <div className="border-l border-[#000000] w-full h-[100%] absolute"></div>
              <div className=" w-2 h-2 bg-[#00FE0B] rounded-full absolute top-1  left-4"></div>
              <div className="ml-10">
                <p className="text-[#101820] leading-relaxed text-[15px] 2xl:text-[20px] font-['Exo']">
                  {para1}
                </p>
                <p className="text-[#101820] leading-relaxed text-[15px] 2xl:text-[20px] mt-10 font-['Exo']">
                  {para2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
