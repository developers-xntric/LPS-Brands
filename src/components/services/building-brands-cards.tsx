
import Image from "next/image";
import Wrapper from "../layout/wrapper";

interface CardProps {
  heading?: string;
  para?: string;
  t1?: string;
  p1?: string;
  t2?: string;
  p2?: string;
  t3?: string;
  p3?: string;
}

export default function BuildingBrandsCards(props: CardProps) {
  return (
    <Wrapper >
      <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-secondary mb-6  font-['Asgard']">
            {props.heading ? props.heading : "Building Brands Behind Iconic Leaders"}
          </h2>
          <p className="text-secondary font-medium leading-7 text-xl font-['Exo'] max-w-4xl mx-auto">
            {props.para ? props.para : "At LPS, leadership branding is seen as a transforming trip with both deliberate and flexible nature. It starts with intense self-discovery and develops into deliberate impact on many other platforms. Every step originates in strategic design thinking, empathy, and insight."}
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-3 font-['Asgard']">
          {/* Strategic Discovery Card */}
          <div className="bg-[#101820] text-white p-7 rounded-3xl transition-all duration-300 hover:bg-[#00FC09] hover:text-gray-900 group cursor-pointer">
            <div className="mb-6">
              <Image
                src="/services/branding-card1.svg"
                alt="megaphone"
                width={1000}
                height={1000}
                className="w-12 h-12 group-hover:hidden"
              />
              <Image
                src="/services/branding-card1-black.svg"
                alt="megaphone"
                width={1000}
                height={1000}
                className="w-12 h-12 hidden group-hover:block"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-[#101820] transition-colors duration-300">
              {props.t1 ? props.t1 : "Strategic Discovery"}
            </h3>
            <p className="text-white font-['Exo'] group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
              {props.p1 ? props.p1 : "We work closely with you to uncover your leadership DNA—your values, vision, and differentiators. This forms the foundation of your personal narrative and positioning strategy."}
            </p>
          </div>

          {/* Content and Platform Mapping Card */}
          <div className="bg-[#0653EC] text-white p-7 rounded-3xl transition-all duration-300 hover:bg-gray-900 hover:text-white group cursor-pointer">
            <div className="mb-6">
              <Image
                src="/services/branding-card2.svg"
                alt="megaphone"
                width={1000}
                height={1000}
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
              {props.t2 ? props.t2 : "Content and Platform Mapping"}
            </h3>
            <p className="text-white font-['Exo'] group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
              {props.p2 ? props.p2 : "We identify the most effective formats and channels to amplify your voice—balancing long-term thought leadership with short-form digital storytelling for omnichannel impact."}
            </p>
          </div>

          {/* Execution with Purpose Card */}
          <div className="bg-green text-gray-900 p-7 rounded-3xl transition-all duration-300 hover:bg-[#0653EC] hover:text-white group cursor-pointer">
            <div className="mb-6">
              <Image
                src="/services/branding-card3.svg"
                alt="megaphone"
                width={1000}
                height={1000}
                className="w-12 h-12 group-hover:hidden"
              />
              <Image
                src="/services/branding-card3-white.svg"
                alt="megaphone"
                width={1000}
                height={1000}
                className="w-12 h-12 hidden group-hover:block"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
              {props.t3 ? props.t3 : "Execution with Purpose"}
            </h3>
            <p className="text-secondary font-['Exo'] group-hover:text-blue-100 transition-colors duration-300 leading-relaxed">
              {props.p3 ? props.p3 : "From ghostwritten articles to keynote coaching, social median design to PR amplification, every element is curated with precision. We don't just create visibility—we build legacy."}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
