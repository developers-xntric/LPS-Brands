"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ArrowUpRight } from "lucide-react"

const tabData = {
    identity: {
        title: "Identity",
        services: ["Leadership Branding", "Corporate Branding", "Social Media", "Public Relations"],
        description: "Leadership Branding, Corporate Branding",
    },
    communications: {
        title: "Communication\nCampaigns",
        services: ["Creative", "Production", "Events", "Influencers", "Gen AI", "Short Form Video"],
        description: "Social Media, Public Relations",
    },
    experiences: {
        title: "Experiences",
        services: ["Digital", "Website & Apps", "Events", "Gaming"],
        description: "Engaging brand experiences tailored to your audience",
    },
}

export default function WorkTabs() {
    const [activeTab, setActiveTab] = useState<keyof typeof tabData>("communications")

    return (
        <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-start mb-16">
                    <div className="max-w-md">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Delivering Solutions
                            <br />
                            with <span className="text-green-400">Unmatched Expertise</span>
                        </h1>
                    </div>
                    <Button className="bg-green-400 hover:bg-green-500 text-black font-medium px-6 py-3 rounded-full">
                        View Services
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Services */}
                    <div className="space-y-8">
                        {/* Identity Section */}
                        <div
                            className={`space-y-4 cursor-pointer transition-all duration-300 rounded-2xl p-6 ${activeTab === "identity" ? "border border-green-400/30 bg-green-400/5" : "border border-transparent"
                                }`}
                            onClick={() => setActiveTab("identity")}
                        >
                            <div
                                className={`inline-block px-4 py-2 rounded-full ${activeTab === "identity" ? "bg-green-400 text-black" : "bg-slate-800 text-white"
                                    }`}
                            >
                                <span className="text-sm font-medium">Identity</span>
                            </div>
                            <p className="text-slate-300 leading-relaxed">{tabData.identity.description}</p>
                        </div>

                        {/* Communication Campaigns Section */}
                        <div
                            className={`space-y-4 cursor-pointer transition-all duration-300 rounded-2xl p-6 ${activeTab === "communications"
                                    ? "border border-green-400/30 bg-green-400/5"
                                    : "border border-transparent"
                                }`}
                            onClick={() => setActiveTab("communications")}
                        >
                            <div
                                className={`inline-block px-4 py-2 rounded-full ${activeTab === "communications" ? "bg-green-400 text-black" : "bg-slate-800 text-white"
                                    }`}
                            >
                                <span className="text-sm font-medium">Communications</span>
                            </div>
                            <p className="text-slate-300 leading-relaxed">{tabData.communications.description}</p>
                        </div>

                        {/* Experiences Section */}
                        <div
                            className={`space-y-4 cursor-pointer transition-all duration-300 rounded-2xl p-6 ${activeTab === "experiences" ? "border border-green-400/30 bg-green-400/5" : "border border-transparent"
                                }`}
                            onClick={() => setActiveTab("experiences")}
                        >
                            <div
                                className={`inline-block px-4 py-2 rounded-full ${activeTab === "experiences" ? "bg-green-400 text-black" : "bg-slate-800 text-white"
                                    }`}
                            >
                                <span className="text-sm font-medium">Experiences</span>
                            </div>
                            <p className="text-slate-300 leading-relaxed">{tabData.experiences.description}</p>
                        </div>
                    </div>

                    {/* Right Side - Dynamic Content Card */}
                    <div className="lg:sticky lg:top-12">
                        <Card className="bg-white text-black p-8 rounded-3xl">
                            <div className="space-y-6">
                                {/* Icon */}
                                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                    <ArrowUpRight className="h-6 w-6 text-white" />
                                </div>

                                {/* Dynamic Title */}
                                <h2 className="text-2xl font-bold whitespace-pre-line">{tabData[activeTab].title}</h2>

                                {/* Dynamic Services List */}
                                <div className="space-y-3">
                                    {tabData[activeTab].services.map((service, index) => (
                                        <div key={index} className="text-slate-600 font-medium">
                                            {service}
                                        </div>
                                    ))}
                                </div>

                                {/* Connect Toggle */}
                                <div className="flex items-center justify-between pt-4">
                                    <span className="text-sm font-medium">Connect with an expert</span>
                                    <Switch className="data-[state=checked]:bg-green-400" />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
