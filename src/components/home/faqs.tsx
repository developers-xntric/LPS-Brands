"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Why is LPS considered the best digital marketing agency in UAE?",
        answer:
            "LPS stands out for its data-driven strategies, creative execution, and 360° impact approach being the best digital marketing agency in UAE, helping brands grow through tailored digital solutions in the UAE and beyond.",
    },
    {
        question: "What services does LPS offer?",
        answer:
            "We offer a full suite of services including digital marketing, branding, public relations, illustration, content creation, process optimization, and strategic consulting.",
    },
    {
        question: "Does LPS handle both local and international brands?",
        answer:
            "Yes, LPS works with a wide range of clients, local startups to global enterprises, delivering strategies that align with regional markets and global ambitions.",
    },
    {
        question: "How does LPS approach brand storytelling?",
        answer:
            "We use a proven brand story framework that crafts emotionally resonant narratives, ensuring your brand connects deeply with your audience in just 30 seconds.",
    },
    {
        question: "Can I consult LPS for PR strategy only?",
        answer:
            "Absolutely. Our PR team specializes in creating proactive and crisis-ready strategies that enhance your brand’s visibility, credibility, and long-term reputation.",
    },
    {
        question: "What industries does LPS specialize in?",
        answer:
            "LPS has worked across various industries including retail, tech, healthcare, real estate, fashion, and lifestyle, delivering personalized strategies for each sector.",
    },
    {
        question: "How can I get started with LPS?",
        answer:
            "You can reach out via our Contact Us page or visit our office to book a discovery session where we understand your goals and tailor a plan accordingly.",
    },
]

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (index: number) => {
        setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
    }

    return (
        <div className="bg-white">
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-10 lg:mb-16">
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
                                <h3 className="lg:text-xl font-semibold text-gray-900 pr-4">{faq.question}</h3>
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
                                    <div className="border-t border-gray-100">
                                        <p className="text-gray-700 leading-tight font-['Exo'] text-[14px] md:text-[15px]">{faq.answer}</p>
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
