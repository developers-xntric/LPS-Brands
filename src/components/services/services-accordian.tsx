import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AccordionItemData {
  id: string;
  title: string;
  href?: string;
}

interface IdentitySectionProps {
  title: string;
  description: string;
  accordionItems: AccordionItemData[];
  videoSrc: string;
  layout: "video-left" | "video-right";
  defaultAccordionValue?: string;
  className?: string;
}

export function ServiceAccordian({
  title,
  description,
  accordionItems,
  videoSrc,
  layout = "video-left",
  className,
}: IdentitySectionProps) {
  const isVideoLeft = layout === "video-left";

  const ContentSection = () => (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-[30px] md:text-5xl font-bold font-['Asgard'] text-primary">
          {title}
        </h2>
        <p className="md:text-lg text-base 2xl:text-xl text-primary font-['Exo'] leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>

      <div className="space-y-2">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-none">
            <Link
              href={`${item.href}`}
              className="group flex items-center justify-between py-4 px-0 border-b hover:border-[#00FC09] cursor-pointer"
            >
              <div className="text-[20px] md:text-2xl 2xl:text-[30px] font-['Exo'] font-bold text-blue transition-colors hover:text-blue-600">
                {item.title}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black group-hover:bg-[#00FC09] rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-10 group-hover:h-10">
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-transform duration-300 group-hover:-rotate-45 " />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  const VideoSection = () => (
    <div className="relative">
      <div className="rounded-lg overflow-hidden bg-muted">
        <Image
          src={`${videoSrc}`}
          width={500}
          height={1000}
          alt="Careers"
          className="w-full h-full 2xl:h-[650px] object-cover"
        />
      </div>
    </div>
  );

  return (
    <section className={cn("md:py-16 py-10 ", className)}>
      <div className="2xl:max-w-[1740px] mx-auto w-[90%]">
        <div
          className={cn(
            "grid gap-10", // smaller gap on mobile
            "md:gap-8", // slightly bigger on tablet
            "lg:grid-cols-2 lg:gap-16", // large screens as before
            isVideoLeft ? "lg:grid-cols-[1fr,1fr]" : "lg:grid-cols-[1fr,1fr]"
          )}
        >
          {isVideoLeft ? (
            <>
              <div className="order-1 lg:order-1">
                <VideoSection />
              </div>
              <div className="order-2 lg:order-2">
                <ContentSection />
              </div>
            </>
          ) : (
            <>
              <div className="order-1 lg:order-2">
                <VideoSection />
              </div>
              <div className="order-2 lg:order-1">
                <ContentSection />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
