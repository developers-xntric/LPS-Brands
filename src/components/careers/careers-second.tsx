"use client"

import { Clock3, MapPin } from "lucide-react"
import { useState } from "react"
import JobDetailsModal from "./job-details-modal"
import ApplicationFormModal from "@/components/application-form-modal"

export default function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [showJobDetails, setShowJobDetails] = useState(false)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  const careersData = [
    {
      category: "Marketing",
      title: "Marketing Executive",
      description: "We're looking for a mid-level marketing expert to join our team.",
      location: "Remote Friendly",
      type: "Full-time",
    },
    {
      category: "Software Development",
      title: "Back-end Developer",
      description: "We're looking for a junior Back-end Developer to join our team.",
      location: "Remote Friendly",
      type: "Full-time",
    },
    {
      category: "Product",
      title: "UI/UX Designer",
      description: "We're looking for a senior UI/UX Designer to join our team ",
      location: "Remote Friendly",
      type: "Full-time",
    },
    {
      category: "Product",
      title: "Product Designer",
      description: "We're looking for a mid-level Product Designer to join our team.",
      location: "Remote Friendly",
      type: "Full-time",
    },
    {
      category: "Product",
      title: "Art Director",
      description: "We're looking for a Art Director to join our team.",
      location: "Remote Friendly",
      type: "Full-time",
      button: "Learn More",
    },
  ]

  const handleLearnMore = (job: any) => {
    setSelectedJob(job)
    setShowJobDetails(true)
  }

  const handleJoinTeam = () => {
    setShowJobDetails(false)
    setShowApplicationForm(true)
  }

  const closeAllModals = () => {
    setShowJobDetails(false)
    setShowApplicationForm(false)
    setSelectedJob(null)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-36 md:pt-60 2xl:pt-[350px] ">
        <div className="2xl:max-w-[1700px] mx-auto w-[90%] md:w-[95%] flex flex-col space-y-12">
          <div className="text-left ">
            <h2 className="text-[30px] md:text-[50px] font-['Asgard'] font-semibold ">Join our team</h2>
            <p className="text-lg font-['Exo'] leading-relaxed max-w-xl">
              Our philosophy is simple hire a team of diverse, passionate individuals and foster a culture that empowers
              you to do your best work.
            </p>
          </div>

          {/* Cards from Array */}
          <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 ">
            {careersData.map((job, index) => (
              <div key={index} className="bg-[#101820] text-white px-6 md:px-8 py-10 rounded-[25px]">
                <div className="flex items-center justify-center bg-[#132d29] w-fit rounded-[20px] px-2 py-1">
                  <span className="text-green text-xs xl:text-lg font-semibold px-2 py-1 rounded">{job.category}</span>
                </div>
                <h2 className="text-[29px] md:text-[30px] xl:text-[40px] leading-[30px] md:leading-[50px] font-bold mt-5 md:mt-10">
                  {job.title}
                </h2>
                <p className="2xl:text-2xl text-[13px] md:text-base font-['Exo'] leading-relaxed py-3 text-white">
                  {job.description}
                </p>
                <div className="mt-4 flex items-center gap-5 ">
                  <span className="mr-2 flex items-center font-light gap-2 text-[15px] md:text-[20px]">
                    <MapPin size={20} /> {job.location}
                  </span>
                  <span className="flex items-center font-light gap-2 text-[15px] md:text-[20px]">
                    <Clock3 size={20} /> {job.type}
                  </span>
                </div>
                {job.button && (
                  <button
                    onClick={() => handleLearnMore(job)}
                    className="bg-green text-secondary w-full py-2 rounded-3xl mt-4 text-xl hover:bg-white transition-all duration-200"
                  >
                    {job.button}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="text-left ">
            <h2 className="text-[30px] md:text-[50px] font-['Asgard'] font-semibold ">Life at LPS Brands</h2>
            <p className="text-[15px] md:text-lg font-['Exo'] leading-relaxed max-w-xl">
              At LPS Brands, we believe in building a workplace where innovation, creativity, and collaboration thrive.
              Our team is made up of diverse, passionate individuals, and we are committed to providing a supportive
              environment that allows you to grow and excel.
            </p>
          </div>
        </div>
      </div>

      {selectedJob && (
        <JobDetailsModal
          isOpen={showJobDetails}
          onClose={closeAllModals}
          onJoinTeam={handleJoinTeam}
          job={selectedJob}
        />
      )}

      {selectedJob && (
        <ApplicationFormModal isOpen={showApplicationForm} onClose={closeAllModals} jobTitle={selectedJob.title} />
      )}
    </>
  )
}
