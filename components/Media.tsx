"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const photoSlides = [
  [
    "/gall1.jpeg",
    "/gall2.jpeg",
    "/gall3.jpeg",
    "/gall4.jpeg",
    "/gall5.jpeg",
  ],
  [
    "/gall6.jpeg",
    "/gall7.jpeg",
    "/gall8.jpeg",
    "/gall9.jpeg",
    "/gall10.jpeg",
  ],
];

const videoSlides = [
  [
    "/video1.mp4",
    "/video2.mp4",
    "/video3.mp4",
    "/video4.mp4",
    "/video5.mp4",
  ],
  [
    "/video6.mp4",
    "/video7.mp4",
    "/video8.mp4",
    "/video9.mp4",
    "/video10.mp4",
  ],
];

export default function MediaGallery() {
const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");


const [currentSlide, setCurrentSlide] = useState(0);
const media =
  activeTab === "photos"
    ? photoSlides[currentSlide]
    : videoSlides[currentSlide];

    return (
        <section className="bg-[#f6eed1] py-16">
            <div className="max-w-[1650px] mx-auto px-8">

                {/* Heading */}
                          <h2 className="text-3xl font-semibold text-black mb-10">

                    Our Media
                </h2>

                {/* Tabs */}
                <div className="flex items-center gap-8 border-b border-[#e5dbb8] mb-5">
                    <button
                        onClick={() => setActiveTab("photos")}
                        className={`pb-3 text-[18px] cursor-pointer font-medium transition ${activeTab === "photos"
                                ? "text-green-700 border-b-2 cursor-pointer border-green-700"
                                : "text-black cursor-pointer"
                            }`}
                    >
                        Photos
                    </button>

                    <button
                        onClick={() => setActiveTab("videos")}
                        className={`pb-3 text-[18px] cursor-pointer font-medium transition ${activeTab === "videos"
                                ? "text-green-700 border-b-2 border-green-700"
                                : "text-black"
                            }`}
                    >
                        Videos
                    </button>
                </div>

                <div className="flex gap-4">

                    {/* Gallery */}
                    <div className="flex-1">

                        <div className="grid grid-cols-12 gap-4">

  {/* Large Left Card */}
  <div className="col-span-12 lg:col-span-6 row-span-2">
    {activeTab === "photos" ? (
      <PhotoCard image={media[0]} large />
    ) : (
      <VideoCard video={media[0]} large />
    )}
  </div>

  {/* Top Right */}
  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    {activeTab === "photos" ? (
      <PhotoCard image={media[1]} />
    ) : (
      <VideoCard video={media[1]} />
    )}
  </div>

  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    {activeTab === "photos" ? (
      <PhotoCard image={media[2]} />
    ) : (
      <VideoCard video={media[2]} />
    )}
  </div>

  {/* Bottom Right */}
  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    {activeTab === "photos" ? (
      <PhotoCard image={media[3]} />
    ) : (
      <VideoCard video={media[3]} />
    )}
  </div>

  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    {activeTab === "photos" ? (
      <PhotoCard image={media[4]} />
    ) : (
      <VideoCard video={media[4]} />
    )}
  </div>

</div>

                    </div>

                    {/* Scroll Indicator */}
                    <div className="hidden lg:flex flex-col items-center gap-4">

  {/* Up Button */}
  <button
    onClick={() =>
      setCurrentSlide((prev) =>
        prev === 0
          ? photoSlides.length - 1
          : prev - 1
      )
    }
    className="
      w-10
      h-10
      rounded-full
      bg-white
      shadow
      hover:bg-green-50
      flex
      items-center
      justify-center
      text-lg
    "
  >
    ↑
  </button>

  {/* Scroll Bar */}
  <div className="relative w-[8px] h-[280px] bg-[#ececec] rounded-full">

    <div
      className="
        absolute
        left-1/2
        -translate-x-1/2
        w-[14px]
        h-[70px]
        bg-yellow-400
        rounded-full
        border
        border-yellow-500
        transition-all
        duration-300
      "
      style={{
        top: `${currentSlide * 90}px`,
      }}
    />

  </div>

  {/* Down Button */}
  <button
    onClick={() =>
      setCurrentSlide((prev) =>
        prev === photoSlides.length - 1
          ? 0
          : prev + 1
      )
    }
    className="
      w-10
      h-10
      rounded-full
      bg-white
      shadow
      hover:bg-green-50
      flex
      items-center
      justify-center
      text-lg
    "
  >
    ↓
  </button>

</div>

                </div>

            </div>
        </section>
    );
}

/* ---------------- PHOTOS ---------------- */

function PhotoCard({
    image,
    large = false,
}: {
    image: string;
    large?: boolean;
}) {
    return (
        <div
            className={`
        relative
        overflow-hidden
        rounded-[30px]
        group
        ${large
                    ? "h-[320px] lg:h-[320px]"
                    : "h-[145px]"
                }
      `}
        >
            <Image
                src={image}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
            />
        </div>
    );
}

/* ---------------- VIDEOS ---------------- */

function VideoCard({
    video,
    large = false,
}: {
    video: string;
    large?: boolean;
}) {
    return (
        <div
            className={`
        relative
        overflow-hidden
        rounded-[30px]
        group
        cursor-pointer
        ${large
                    ? "h-[320px] lg:h-[320px]"
                    : "h-[145px]"
                }
      `}
        >
            <video
                src={video}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className={`
            rounded-full
            bg-white/70
            backdrop-blur-sm
            flex items-center justify-center
            group-hover:scale-110
            transition-all duration-300
            ${large
                            ? "w-24 h-24"
                            : "w-16 h-16"
                        }
          `}
                >
                    <Play
                        className={`
              fill-green-700
              text-green-700
              ${large
                                ? "w-10 h-10"
                                : "w-6 h-6"
                            }
            `}
                    />
                </div>
            </div>

            {large && (
                <div className="absolute top-5 right-5">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        ⛶
                    </div>
                </div>
            )}
        </div>
    );
}