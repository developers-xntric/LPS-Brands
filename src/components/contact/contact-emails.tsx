"use client";
import { Button } from "../common/button";

export default function ContactEmails() {
  return (
    <section className="">
      <div className="2xl:max-w-[1700px] mx-auto w-[90%]">
        <h2 className="max-w-4xl text-[30px] leading-[30px] md:text-5xl lg:text-[55px] lg:leading-[55px] font-normal md:leading-tight">
          Reach out to us via email to explore{" "}
          <span className="text-[#00FC09]">business</span> collaborations or{" "}
          <span className="text-[#00FC09]">career</span> opportunities!
        </h2>

        <div className="mt-12 flex  flex-col lg:gap-10 gap-10">
          {/* Business / Partnerships */}
          <div>
            <a
              href="mailto:partner@lps-me.com"
              className="inline-block text-2xl md:text-xl font-medium tracking-tight border-b-2 border-[#00FC09] pb-1 hover:opacity-90 font-['Exo']"
            >
              partner@lps-me.com
            </a>
            <p className="mt-2 text-sm md:text-lg text-secondary">
              For project inquiries, collaborations, and general queries.
            </p>
          </div>

          {/* Careers */}
          <div>
            <a
              href="mailto:hrteam@lps-me.com"
              className="inline-block text-2xl md:text-xl font-medium tracking-tight border-b-2 border-[#00FC09] pb-1 hover:opacity-90 font-['Exo']"
            >
              hrteam@lps-me.com
            </a>
            <p className="mt-2 text-sm md:text-lg text-secondary">
              Join our Dynamic Team
            </p>

            <div className="mt-4">
              <Button
                text="View open positions"
                topT={true}
                bg="bg-black"
                center={false}
                link="/careers"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
