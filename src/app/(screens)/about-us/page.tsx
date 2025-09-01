import { AboutLPS } from '@/components/about/about-lps'
import { ClientsSection } from '@/components/about/client-section'
import ImageSection from '@/components/about/image-section'
import AboutHero from '@/components/careers/careers-hero'
import { MeetThePears } from '@/components/home/meet-the-pears'
import React from 'react'


export const metadata = {
  title: "Who We Are - LPS Brands",
  description:
    "Who we are: a 360° impact builder fusing Gen X craft with Gen Z power to deliver bold, high-impact marketing for modern brands across industries and platforms.",
  alternates: {
    canonical: "https://lps-me.com/about-us",
  },
};

const AboutUs = () => {
    return (
        <div>
            <AboutHero id='test-about' heading='Who We Are' highlight='Who We Are' text='<p className="text-xl font-medium font-[`Exo`] leading-tight">
            LPS Brands is a 360 Impact Builder that uniquely blending new-age cool with at-scale execution for iconic brands across industries. We don’t just claim expertise—we are masters of both traditional and new-age marketing. Bringing the craftsmanship of Gen X with the execution power of Gen Z, we have evolved into a truly integrated agency, delivering marketing success stories that define the new age. The result? Turbo-charged growth and global recognition by driving real-world business impact. <br/><br/> We are LPS, a 360° marketing agency built for modern platforms, the new breed of creators, and innovative formats.
            </p>' bottom={false} />
            <ImageSection />
            <AboutLPS />
            <MeetThePears />
            <ClientsSection />
           
        </div>
    )
}

export default AboutUs
