"use client";

import type React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Wrapper from "../layout/wrapper";
import { Button } from "../common/button";

// dynamic import to avoid any SSR hiccups
const PhoneInput = dynamic(
  () => import("react-phone-input-2").then((m) => m.default),
  { ssr: false }
);

// import the library styles
import "react-phone-input-2/lib/style.css";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "", // will hold formatted number, e.g. "+971 50 123 4567"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Wrapper>
      <div className="py-16">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-5xl">
            Have Questions or Ready to Start Your Project? Get in Touch with Us Today!
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="flex gap-6 mb-8 font-['Exo']">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-lg font-bold text-foreground">
                Full Name
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="h-12 text-base border-black rounded-lg w-96"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-lg font-bold text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="h-12 text-base border-black rounded-lg w-96"
                required
              />
            </div>

            {/* Phone with country dropdown + flags */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-lg font-bold text-foreground">
                Phone
              </label>

              <PhoneInput
                country={"ae"}                  
                value={formData.phone}
                onChange={(_val, _country, _e, formattedValue) =>
                  setFormData((prev) => ({ ...prev, phone: formattedValue }))
                }
                placeholder="050 123 4567"
                inputProps={{ id: "phone", name: "phone", required: true }}

                // Tailwind styling (override lib CSS with !)
                containerClass="!w-96"
                inputClass="!w-96 !h-12 !text-base !border !border-black !rounded-lg"
                buttonClass="!border !border-black !rounded-l-lg"
                dropdownClass="!text-base !w-[380px] !py-4"
              />
            </div>
          </div>

          <div className="flex justify-start">
            <Button text="Connect with an expert" bg="bg-black" />
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
