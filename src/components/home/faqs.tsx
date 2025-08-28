"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, SEO optimization, and custom software solutions tailored to your business needs.",
    },
    {
        question: "How long does a typical project take?",
        answer:
            "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications can take 8-16 weeks. We provide detailed timelines during our initial consultation.",
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer:
            "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security monitoring, performance optimization, and technical support to ensure your digital assets continue to perform optimally.",
    },
    {
        question: "What is your development process?",
        answer:
            "Our development process follows agile methodology with clear phases: Discovery & Planning, Design & Prototyping, Development & Testing, Launch & Deployment, and Ongoing Support. We maintain transparent communication throughout each phase.",
    },
    {
        question: "Can you work with our existing systems?",
        answer:
            "We specialize in integrating with existing systems and can work with various platforms, APIs, and databases. We'll assess your current infrastructure and recommend the best integration approach.",
    },
    {
        question: "What are your pricing models?",
        answer:
            "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline. We provide detailed quotes after understanding your specific requirements.",
    },
    {
        question: "Do you offer training for our team?",
        answer:
            "Yes, we provide comprehensive training sessions for your team on how to use and manage the solutions we develop. This includes documentation, video tutorials, and hands-on training sessions to ensure smooth adoption.",
    },
]

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (index: number) => {
        setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg font-['Exo'] text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our services, process, and how we can help your business grow.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-[1px] border-black rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                <ChevronDown
                                    className={`w-5 h-5 text-black transition-transform duration-200 flex-shrink-0 ${openItems.includes(index) ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 pb-5">
                                    <div className="border-t border-gray-100 pt-4">
                                        <p className="text-gray-700 leading-tight font-['Exo']">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
