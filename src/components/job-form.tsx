"use client";

import * as React from "react";
import { X, Upload, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface ApplicationFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export default function JobForm({ isOpen, onClose, jobTitle }: ApplicationFormModalProps) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        about: "",
    });
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate file type and size
            const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
            const maxSize = 10 * 1024 * 1024; // 10MB
            if (!validTypes.includes(file.type)) {
                setError("Please upload a PDF or DOC file.");
                setResumeFile(null);
                return;
            }
            if (file.size > maxSize) {
                setError("File size exceeds 10MB.");
                setResumeFile(null);
                return;
            }
            setError(null);
            setResumeFile(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        if (!resumeFile) {
            setError("Please upload a CV.");
            setIsSubmitting(false);
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("fullName", formData.fullName);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone); // Mapping Phone to portfolioLink for API compatibility
        formDataToSend.append("position", formData.position || jobTitle); // Fallback to jobTitle if position is empty
        formDataToSend.append("resume", resumeFile);
        formDataToSend.append("about", formData.about); // Including About as summary

        try {
            const response = await fetch("https://blog.xntric.me/lps-apply", {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error("Failed to send application.");
            }

            const result = await response.text();
            console.log(result);
            setFormData({ fullName: "", email: "", phone: "", position: "", about: "" });
            setResumeFile(null);
            onClose();
        } catch (err) {
            setError("Error sending application. Please try again.");
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 font-['Exo']">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-scroll no-scrollbar py-4 relative">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-2xl lg:text-4xl font-bold text-blue">Take a step closer to joining our Pear Squad, fill out the form</h2>
                        <button onClick={onClose} className="text-black hover:text-black transition-colors absolute right-4 lg:right-10 top-5">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Application Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div className="flex lg:flex-row flex-col justify-between gap-5">
                            <div className="lg:w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Full Name"
                                />
                            </div>

                            {/* Email */}
                            <div className="lg:w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex lg:flex-row flex-col justify-between gap-5">
                            <div className="lg:w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone*</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Phone"
                                />
                            </div>

                            {/* Position */}
                            <div className="lg:w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Position*</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.position}
                                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Position"
                                />
                            </div>
                        </div>

                        {/* About */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">About*</label>
                            <textarea
                                required
                                value={formData.about}
                                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Tell us about yourself"
                            />
                        </div>

                        {/* CV Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">CV*</label>
                            <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center bg-green-50">
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="resume-upload"
                                />
                                <label htmlFor="resume-upload" className="cursor-pointer">
                                    <Upload className="mx-auto h-12 w-12 text-green-500 mb-4" />
                                    <p className="text-gray-600">
                                        <span className="font-semibold text-green-600">Drop file here</span> or{" "}
                                        <span className="font-semibold text-green-600">Browse</span>
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">Max file size: 10MB (PDF, DOC)</p>
                                </label>
                                {resumeFile && (
                                    <p className="text-sm text-gray-700 mt-2">Selected: {resumeFile.name}</p>
                                )}
                            </div>
                            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center group">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-green text-black h-[50px] px-6 rounded-full text-lg flex items-center font-normal transition-all duration-300 hover:bg-[#2054FC] hover:text-white disabled:opacity-50"
                            >
                                <span className="relative">{isSubmitting ? "Submitting..." : "Send Inquiry"}</span>
                            </Button>

                            {/* Arrow Circle */}
                            <div
                                className="w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 delay-150 transform group-hover:-translate-x-3 bg-black"
                            >
                                <ArrowRight className="h-6 w-6 font-bold text-white" />
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}