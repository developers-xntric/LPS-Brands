import Image from "next/image";
import Wrapper from "../layout/wrapper";

export default function BrandingStart({ heading, para, para2 }: { heading?: string; para?: string; para2?: string; }) {
  return (
    <Wrapper>
      <div className=" mx-auto px-6 py-16 space-y-32">
        <div className="relative ">
          {/* Main image container */}
          <div className="relative">
            <Image
              src="/services/branding-start-bg.webp"
              alt="Diverse team of professionals collaborating around a table"
              width={1200}
              height={400}
              className="w-full h-[400px] 2xl:h-full object-cover rounded-[120px]"
            />

            {/* Blue speech bubble overlay */}
            <div className="absolute bottom-[-70px] left-20 bg-blue text-white px-8 py-6 rounded-full max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center">
                {heading ? heading : "The Future of Leadership Branding Starts Here"}
              </h2>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="grid md:grid-cols-2 gap-10  leading-relaxed">
          <div>
            <p className="text-secondary font-medium leading-7 text-lg font-['Exo'] max-w-4xl mx-auto">
              {para ? para : "Leadership branding is no more optional in a society where leaders are expected to inspire, influence, and start change. At LPS, we think that in the crowded scene of today, visionary leaders differ mostly in their strong personal leadership brand. We create magnetic identities that platforms promote, communities gather behind, and businesses remember; we do not just create exposure."}
            </p>
          </div>

          <div>
            <p className="text-secondary font-medium leading-7 text-lg font-['Exo'] max-w-4xl mx-auto">
              {para2 ? para2 : "Supported by 360° strategic thinking, cultural intelligence, digital fluency, and creative accuracy, we realise your brand of leadership. Whether your narrative is that of a rising thought leader or a C-suite executive, our methodology turns it into a captivating, future-ready brand poised for actual influence.True leadership is felt in an era of loudness and homogeneity, not just seen. And at LPS, our ability to make it remember is mostly dependent on leadership branding."}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
