"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission here
    }

    return (
        <section className="py-16 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                    Have Questions or Ready to Start Your Project?
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-foreground">Get in Touch with Us Today!</h3>
            </div>

            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Full Name Field */}
                    <div className="space-y-2">
                        <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                            Full Name
                        </label>
                        <Input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="h-12 text-base border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="h-12 text-base border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                            Phone
                        </label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                                <div className="w-6 h-4 bg-gradient-to-b from-green-500 via-white to-black flex items-center justify-center rounded-sm">
                                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                                </div>
                                <span className="text-gray-500">•</span>
                            </div>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="050 123 4567"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="h-12 text-base border-gray-300 rounded-lg pl-16"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                    <Button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full text-base h-auto"
                    >
                        Connect with an expert
                    </Button>
                </div>
            </form>
        </section>
    )
}
