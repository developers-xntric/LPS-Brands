"use client";
import React, { useState } from "react";
import LogoLPS from "../icons/lps-logo";
import { Button } from "../common/button";

const IDENTITY_OPTIONS = [
    "Leadership Branding",
    "Corporate Branding",
    "Social Media",
    "Public Relations",
];

const COMMUNICATION_OPTIONS = [
    "Creative",
    "Production",
    "Influencers",
    "Gen AI",
    "Short Form Video",
];

const EXPERIENCE_OPTIONS = ["Digital", "Events", "Website & Apps", "Gaming"];

function ContactHero() {
    const [step, setStep] = useState<1 | 2>(1);

    // step 1 selections
    const [identity, setIdentity] = useState<string[]>([]);
    const [communication, setCommunication] = useState<string[]>([]);
    const [experiences, setExperiences] = useState<string[]>([]);

    // step 2 fields
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        details: "",
        brief: null as File | null,
    });

    const toggleFrom = (list: string[], setter: (s: string[]) => void, v: string) => {
        setter(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setForm((f) => ({ ...f, brief: file }));
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // You can replace this with your API call
        console.log({
            selections: { identity, communication, experiences },
            form,
        });
        alert("Submitted! (Check console for payload)");
    };

    // tiny pill checkbox component
    const Pill = ({
        checked,
        label,
        onClick,
    }: {
        checked: boolean;
        label: string;
        onClick: () => void;
    }) => (
        <button
            type="button"
            onClick={onClick}
            className={`px-5 py-3 rounded-full border text-md tracking-wide transition
        ${checked ? "bg-[#00FC09] border-[#00FC09]" : "border-black/20 bg-white"}
      `}
        >
            {label}
        </button>
    );

    return (
        <div className={`bg-[url('/home/Hero.png')] bg-center bg-cover pb-16`}>
            <div className={`2xl:max-w-[1700px] mx-auto w-[90%]`}>
                {/* Top Left LPS Logo */}
                <div className="pt-4">
                    <LogoLPS />
                </div>

                {/* Main two-column layout */}
                <div className="mt-10 lg:mt-16 grid lg:grid-cols-2 gap-10 items-start">
                    {/* Left: existing heading + copy */}
                    <div>
                        <div className="mt-10 flex flex-col uppercase items-start -space-y-8">
                            <h1 className="text-[52px] md:text-[80px] font-bold flex flex-col leading-none">
                                <span>Let’s work</span>
                                <span className="gradient-text">— together.</span>
                            </h1>
                        </div>
                        <div className="max-w-xl py-8">
                            <p className="text-lg font-medium font-['Exo'] leading-tight">
                                Hey there! 👋 Could you take a moment to fill out this quick
                                form? It’s super short, promise!
                                <br />
                                <br />
                                Not a fan of forms? No worries, we’re just a message away on{" "}
                                <strong>Instagram</strong> and <strong>TikTok!</strong>
                            </p>
                        </div>
                    </div>

                    {/* Right: Form card */}
                    <div className="w-full">
                        <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/10 shadow-xl p-6 md:p-8">
                            {/* Form heading required on the form */}
                            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight uppercase max-w-md">
                                <span>Let us know about your </span>
                                <span className="text-blue">project </span>
                                <span>So We Can Connect You With The Right </span>
                                <span className="text-blue">pear</span>
                            </h2>

                            {/* Step indicator */}
                            <div className="mt-4 mb-6 flex items-center gap-2">
                                <span
                                    className={`h-2 w-8 rounded-full ${step === 1 ? "bg-[#00FC09]" : "bg-black/15"
                                        }`}
                                />
                                <span
                                    className={`h-2 w-8 rounded-full ${step === 2 ? "bg-[#00FC09]" : "bg-black/15"
                                        }`}
                                />
                            </div>

                            {step === 1 ? (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setStep(2);
                                    }}
                                    className="space-y-6 font-['Exo']"
                                >
                                    {/* Identity */}
                                    <div>
                                        <label className="block text-lg font-bold uppercase tracking-wide mb-2">
                                            Identity
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {IDENTITY_OPTIONS.map((opt) => (
                                                <Pill
                                                    key={opt}
                                                    label={opt}
                                                    checked={identity.includes(opt)}
                                                    onClick={() => toggleFrom(identity, setIdentity, opt)}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Communication Campaigns */}
                                    <div>
                                        <label className="block text-lg font-bold uppercase tracking-wide mb-2">
                                            Communication Campaigns
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {COMMUNICATION_OPTIONS.map((opt) => (
                                                <Pill
                                                    key={opt}
                                                    label={opt}
                                                    checked={communication.includes(opt)}
                                                    onClick={() =>
                                                        toggleFrom(communication, setCommunication, opt)
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Experiences */}
                                    <div>
                                        <label className="block text-lg font-bold uppercase tracking-wide mb-2">
                                            Experiences
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {EXPERIENCE_OPTIONS.map((opt) => (
                                                <Pill
                                                    key={opt}
                                                    label={opt}
                                                    checked={experiences.includes(opt)}
                                                    onClick={() =>
                                                        toggleFrom(experiences, setExperiences, opt)
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-2 flex justify-end">
                                        <button
                                            type="submit"
                                            className="px-5 py-3 rounded-xl font-semibold text-black bg-[#00FC09] hover:opacity-90 transition"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={onSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                htmlFor="fullName"
                                                className="block text-lg font-normal font-['Exo'] mb-1"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                id="fullName"
                                                name="fullName"
                                                type="text"
                                                value={form.fullName}
                                                onChange={onChange}
                                                className="w-full rounded-xl border border-black/15 px-3 py-2 outline-none focus:border-[#00FC09]"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-lg font-normal font-['Exo'] mb-1"
                                            >
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={onChange}
                                                className="w-full rounded-xl border border-black/15 px-3 py-2 outline-none focus:border-[#00FC09]"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-lg font-normal font-['Exo'] mb-1"
                                            >
                                                Phone
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={form.phone}
                                                onChange={onChange}
                                                className="w-full rounded-xl border border-black/15 px-3 py-2 outline-none focus:border-[#00FC09]"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="company"
                                                className="block text-lg font-normal font-['Exo'] mb-1"
                                            >
                                                Company Name
                                            </label>
                                            <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                value={form.company}
                                                onChange={onChange}
                                                className="w-full rounded-xl border border-black/15 px-3 py-2 outline-none focus:border-[#00FC09]"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="details"
                                            className="block text-lg font-normal font-['Exo'] mb-1"
                                        >
                                            Project Details
                                        </label>
                                        <textarea
                                            id="details"
                                            name="details"
                                            rows={5}
                                            value={form.details}
                                            onChange={onChange}
                                            className="w-full rounded-xl border border-black/15 px-3 py-2 outline-none focus:border-[#00FC09] resize-y"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="brief"
                                            className="block text-lg font-normal font-['Exo'] mb-1"
                                        >
                                            Project Brief (upload)
                                        </label>
                                        <input
                                            id="brief"
                                            name="brief"
                                            type="file"
                                            onChange={onFile}
                                            className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-[#00FC09] file:text-black file:font-semibold file:cursor-pointer"
                                            accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.zip"
                                        />
                                        {form.brief && (
                                            <p className="mt-1 text-xs text-black/70">
                                                Selected: {form.brief.name}
                                            </p>
                                        )}
                                    </div>

                                    <div className="pt-2 flex items-center justify-between gap-3">
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();      // don’t let the form submit
                                                e.stopPropagation();     // don’t bubble to form handlers
                                                setStep(1);              // go back to choices
                                            }}
                                            className="px-5 py-3 rounded-xl font-semibold border border-black/20 hover:bg-black/5 transition"
                                        >
                                            Previous
                                        </button>

                                        <Button topT={true} bg="bg-black" text="Send Inquiry" />
                                    </div>


                                    {/* (Optional) include hidden selections so they submit with the form if you post it */}
                                    <input type="hidden" name="identity" value={identity.join(", ")} />
                                    <input type="hidden" name="communication" value={communication.join(", ")} />
                                    <input type="hidden" name="experiences" value={experiences.join(", ")} />
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactHero;
