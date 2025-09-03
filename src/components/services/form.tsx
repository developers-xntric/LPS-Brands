/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import type React from "react";
import { useState } from "react";
// If your Button doesn’t forward "type", use a native <button> instead.
import { Button } from "../common/button";
import Wrapper from "../layout/wrapper";

const PhoneInput = dynamic(
  () => import("react-phone-input-2").then((m) => m.default),
  { ssr: false }
);

import "react-phone-input-2/lib/style.css";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error" | ""; msg: string }>({ type: "", msg: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback({ type: "", msg: "" });
    setSubmitting(true);

    try {

      const resp = await fetch("https://blog.xntric.me/lps-service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      const text = await resp.text();
      if (!resp.ok) throw new Error(text || "Request failed");

      setFeedback({ type: "success", msg: text || "Submitted successfully." });
      setFormData({ fullName: "", email: "", phone: "" });
    } catch (err: any) {
      setFeedback({
        type: "error",
        msg:
          err?.message ||
          "Something went wrong sending your info. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <div className="flex 2xl:justify-center">
        <div className="py-16">
          <div className="mb-12">
            <h2 className="text-[30px] leading-[34px] md:text-6xl font-semibold text-foreground 2xl:leading-tight 2xl:max-w-5xl">
              Have Questions or Ready to Start Your Project? Get in Touch with Us Today!
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 flex-col gap-6 mb-8 font-['Exo']">
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
                  className="h-12 text-base border-black rounded-lg 2xl:w-96"
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
                  className="h-12 text-base border-black rounded-lg 2xl:w-96"
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
                  inputProps={{ id: "phone", name: "phone", required: true, placeholder: "050 123 4567" }}
                  containerClass="2xl:!w-96"
                  inputClass="2xl:!w-96 !w-[100%] !h-12 !text-base !border !border-black !rounded-lg"
                  buttonClass="!border !border-black !rounded-l-lg"
                  dropdownClass="!text-base lg:!w-[245px] 2xl:!w-[380px] !w-[280px] !py-4"
                />
              </div>

            </div>

            {/* Feedback */}
            {feedback.msg && (
              <div
                className={`mb-4 text-sm px-4 py-3 rounded-lg ${feedback.type === "success"
                  ? "bg-green-100 text-green-800"
                  : feedback.type === "error"
                    ? "bg-red-100 text-red-800"
                    : ""
                  }`}
              >
                {feedback.msg}
              </div>
            )}

            <div className="flex justify-start">
              <Button
                text={submitting ? "Sending..." : "Connect with an expert"}
                bg="bg-black"
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
