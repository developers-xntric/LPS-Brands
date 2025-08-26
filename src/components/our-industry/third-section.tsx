import Image from "next/image";

export default function ThirdSection({img,heading,para1,para2}:{img:string,heading:string,para1:string,para2:string}) {
  return (
    <div className="my-20">
      <div className="w-[90%] mx-auto 2xl:max-w-[1740px]">
        <div className="flex justify-between items-center gap-12 ">
          {/* Image Column */}
          <div className="relative w-1/2">
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
          <div className="space-y-6 w-1/2">
            <h2 className="text-[55px] font-semibold max-w-[50%] text-[#101820] leading-[55px] mb-10">
              {heading}
            </h2>
            <div className=" max-w-[85%]  relative">
              <div className="border-l border-[#000000] w-full h-[100%] absolute"></div>
              <div className=" w-2 h-2 bg-[#00FE0B] rounded-full absolute top-1  left-4"></div>
              <div className="ml-10">
                <p className="text-gray-700 leading-relaxed text-[20px] font-['Exo']">
                  {para1}
                </p>
                <p className="text-gray-700 leading-relaxed text-[20px] mt-10 font-['Exo']">
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
