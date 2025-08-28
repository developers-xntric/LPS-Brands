"use client"

import { X } from "lucide-react"

interface JobDetailsModalProps {
    isOpen: boolean
    onClose: () => void
    onJoinTeam: () => void
    job: {
        title: string
        category: string
        location: string
        type: string
        description: string
    }
}

export default function JobDetailsModal({ isOpen, onClose, onJoinTeam, job }: JobDetailsModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Job Title</p>
                            <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Role Overview */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">Role Overview:</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We are seeking an integrated Art Director with client facing experience, campaign leadership and
                            experience in social/digital engagements. The ideal candidate will be Arabic first and have a proven track
                            record of creating visually compelling content and campaigns that engage and captivate audiences across
                            various digital platforms.
                        </p>
                    </div>

                    {/* Required Skills & Experience */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">Required Skills & Experience:</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Bachelor's degree in Graphic design, Visual Arts, Marketing, or a related field.</li>
                            <li>• 7+ years of experience in a creative role, with a focus on digital and social media.</li>
                            <li>
                                • Strong portfolio showcasing innovative digital campaigns, video content (TikTok, Reels), animation and
                                motion graphics.
                            </li>
                            <li>
                                • Proficiency in design software including Adobe Creative Suite (Photoshop, Illustrator, InDesign, After
                                Effects).
                            </li>
                            <li>
                                • Experience with video editing and video production tools, with the ability to deliver engaging
                                content.
                            </li>
                            <li>
                                • Deep understanding of social media platforms, including Instagram, Facebook, TikTok, Twitter, and
                                emerging channels.
                            </li>
                            <li>• Excellent visual design skills, with a keen eye for detail and aesthetics.</li>
                            <li>• Strong leadership and project management abilities.</li>
                            <li>• Experience working at a global advertising agency or a similar setting is a plus.</li>
                            <li>• Understanding of consumer behaviors and industry trends.</li>
                            <li>• Ability to work in a fast-paced environment and manage multiple priorities effectively.</li>
                            <li>
                                • Experience presenting creative ideas to clients, with strong interpersonal and client facing skills.
                            </li>
                            <li>• Candidates with a "hands-on media spend maximum of 5M" immediate availability preferred.</li>
                        </ul>
                    </div>

                    {/* Key Responsibilities */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">Key Responsibilities:</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>
                                • Develop and execute creative concepts for creative, social media and digital campaigns, ensuring
                                alignment with brand strategy and objectives.
                            </li>
                            <li>
                                • Lead the creative development process from concept to execution, including posts, videos, animations,
                                TikTok Reels, web graphics, and other online materials.
                            </li>
                            <li>
                                • Collaborate with copywriters, designers, and other team members to produce high-quality creative work
                                for both social media and digital platforms.
                            </li>
                            <li>
                                • Stay up to date with the latest trends and best practices in social media and digital marketing,
                                incorporating innovative ideas into creative work.
                            </li>
                            <li>
                                • Manage multiple projects simultaneously, ensuring timely delivery and adherence to brand guidelines.
                            </li>
                            <li>
                                • Provide clear and constructive feedback to team members, fostering a collaborative and productive work
                                environment.
                            </li>
                            <li>
                                • Work closely with clients to understand their vision and translate it into powerful visual content for
                                social media and digital platforms.
                            </li>
                            <li>
                                • Collaborate with internal creative teams, including designers, writers, and production staff to create
                                cohesive and integrated campaign execution.
                            </li>
                            <li>
                                • Oversee the production process, ensuring the final output meets the highest standards of quality,
                                creativity, and platform optimization.
                            </li>
                            <li>
                                • Conceptualize and execute 360-degree campaigns across social media, digital, and off-line channels.
                            </li>
                        </ul>
                    </div>

                    {/* Why Join Us */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-3">Why Join Us:</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Be part of a leading digital agency with a reputation for creativity and innovation.</li>
                            <li>• Work with a diverse and talented team of professionals.</li>
                            <li>• Opportunities for professional growth and development.</li>
                            <li>• Competitive salary and benefits package.</li>
                            <li>• A collaborative and inclusive work environment.</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-600">
                            LPS Brands is an equal opportunity employer. We celebrate diversity and are committed to creating an
                            inclusive environment for all employees.
                        </p>
                    </div>

                    {/* Join Our Team Button */}
                    <button
                        onClick={onJoinTeam}
                        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors w-full"
                    >
                        Join Our Team →
                    </button>
                </div>
            </div>
        </div>
    )
}
