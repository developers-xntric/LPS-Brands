"use client";
import { Button } from "../common/button";

export default function ContactEmails() {
    return (
        <section className="py-16 md:py-24">
            <div className="2xl:max-w-[1700px] mx-auto w-[90%]">
                <h2 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-normal leading-tight">
                    Reach out to us via email to explore{" "}
                    <span className="text-[#00FC09]">business</span> collaborations or{" "}
                    <span className="text-[#00FC09]">career</span> opportunities!
                </h2>

                <div className="mt-12 flex justify-end gap-40 px-40">
                    {/* Business / Partnerships */}
                    <div>
                        <a
                            href="mailto:partner@lps-me.com"
                            className="inline-block text-2xl md:text-4xl font-medium tracking-tight border-b-2 border-[#00FC09] pb-1 hover:opacity-90 font-['Exo']"
                        >
                            partner@lps-me.com
                        </a>
                        <p className="mt-2 text-sm md:text-xl text-secondary">
                            Projects, collaborations and queries.
                        </p>
                    </div>

                    {/* Careers */}
                    <div>
                        <a
                            href="mailto:hrteam@lps-me.com"
                            className="inline-block text-2xl md:text-4xl font-medium tracking-tight border-b-2 border-[#00FC09] pb-1 hover:opacity-90 font-['Exo']"
                        >
                            hrteam@lps-me.com
                        </a>
                        <p className="mt-2 text-sm md:text-xl text-secondary">
                            Join our dynamic Team
                        </p>

                        <div className="mt-4">
                            <Button text="View open positions" topT={true} bg="bg-black" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
