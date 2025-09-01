"use client";
import React, { useState } from "react";
import JobForm from "../job-form";
import { Button } from "../common/button";

function LastSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="flex flex-col items-start gap-8 py-10 2xl:max-w-[1700px] mx-auto w-[90%] md:w-[95%] ">
        <h2 className="text-[30px] md:text-[50px] font-['Asgard'] font-semibold leading-[30px] md:leading-[50px] ">
          Didn’t find a role that <br /> clicks? <br /> Let us know what suits
          you <br /> best!
        </h2>
        <Button text="Submit Your Resume" bg="bg-black" onClick={openModal} />
      </div>
      <JobForm
        isOpen={isModalOpen}
        onClose={closeModal}
        jobTitle="Your Job Title Here"
      />
    </div>
  );
}

export default LastSection;
