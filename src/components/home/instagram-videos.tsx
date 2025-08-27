"use client"

import { InstagramVideo, InstagramVideosProps } from "@/data/blog-section"
import Image from "next/image"

export default function InstagramVideos({ videos }: InstagramVideosProps) {
    const handleVideoClick = (video: InstagramVideo) => {
        window.open(video.url, "_blank")
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {videos.map((video, index: number) => (
                    <div
                        key={video.id}
                        className="overflow-hidden cursor-pointer transition-transform duration-300"
                        onClick={() => handleVideoClick(video)}
                    >
                        <div className="relative">
                            <Image src={video.thumbnail} alt={video.title} className="w-full h-[350px] object-cover" width={600} height={600} />
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                                {index !== 2 && <svg style={{
                                    color: "rgba(255,255,255,1)"
                                }} className="svg-inline--fa fa-play fa-w-14 sbi_playbtn" width={50} aria-label="Play" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
