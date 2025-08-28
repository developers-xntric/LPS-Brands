"use client"

import type React from "react"

import { X, Upload, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

interface ApplicationFormModalProps {
    isOpen: boolean
    onClose: () => void
    jobTitle: string
}

export default function ApplicationFormModal({ isOpen, onClose, jobTitle }: ApplicationFormModalProps) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        portfolioLink: "",
    })

    if (!isOpen) return null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 font-['Exo']">
            <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto py-4">
                <div className="p-6 flex gap-12">
                    {/* Header */}
                    <div className="w-1/2">
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-4xl font-bold text-gray-900">Application Form</h2>
                            {/* <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X size={24} />
                            </button> */}
                        </div>

                        {/* Position */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Position:</h3>
                            <p className="text-lg font-semibold text-gray-800">{jobTitle}</p>
                        </div>

                        {/* Role Overview */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Role Overview:</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We are seeking an integrated Art Director with client facing experience, campaign leadership and
                                experience in social/digital engagements. The ideal candidate will be Arabic first and have a proven track
                                record of creating visually compelling content and campaigns that engage and captivate audiences across
                                various digital platforms.
                            </p>
                        </div>
                    </div>

                    {/* Application Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name*</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Joseph"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name*</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="You@example.com"
                            />
                        </div>

                        {/* Portfolio Link */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio Link*</label>
                            <input
                                type="url"
                                required
                                value={formData.portfolioLink}
                                onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Paste your link here"
                            />
                            <p className="text-sm text-red-500 mt-1">
                                *Applying for a creative role? Share your portfolio link, if not, just skip your LinkedIn.
                            </p>
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Submit your Resume*</label>
                            <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center bg-green-50">
                                <Upload className="mx-auto h-12 w-12 text-green-500 mb-4" />
                                <p className="text-gray-600">
                                    <span className="font-semibold text-green-600">Drop file here</span> or{" "}
                                    <span className="font-semibold text-green-600">Browse</span>
                                </p>
                                <p className="text-sm text-gray-500 mt-1">Max file size: 10MB (PDF, DOC)</p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className={`flex items-center group`}>
                            <Button className="bg-green text-black h-[50px] px-6 rounded-full text-lg flex items-center font-normal transition-all duration-300 hover:bg-[#2054FC] hover:text-white">
                                <span className={`relative`}>Send Inquiry</span>
                            </Button>

                            {/* Arrow Circle */}
                            <div
                                className={`w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 delay-150 transform group-hover:-translate-x-3 bg-black`}
                            >
                                <ArrowRight
                                    className={`h-6 w-6 font-bold text-white`}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
