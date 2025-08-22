import ImageSection from '@/components/about/image-section'
import AboutHero from '@/components/careers/careers-hero'
import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <AboutHero heading='Who we are' highlight='we' text='<p>
            LPS Brands is a 360 Impact Builder that uniquely blending new-age cool with at-scale execution for iconic brands across industries. We don’t just claim expertise—we are masters of both traditional and new-age marketing. Bringing the craftsmanship of Gen X with the execution power of Gen Z, we have evolved into a truly integrated agency, delivering marketing success stories that define the new age. The result? Turbo-charged growth and global recognition by driving real-world business impact. <br/><br/> We are LPS, a 360° marketing agency built for modern platforms, the new breed of creators, and innovative formats.+
            </p>' bottom={false} />
            <ImageSection />
        </div>
    )
}

export default AboutUs
