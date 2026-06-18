"use client";

import Image from "next/image";
import Link from "next/link";

const logos = [
  {
    image: "/download.png",
    link: "https://www.incredibleindia.gov.in",
  },
  {
    image: "/download1.png",
    link: "https://digitalindia.gov.in",
  },
  {
    image: "/download2.png",
    link: " https://www.digilocker.gov.in",
  },
  {
    image: "/download3.png",
    link: " https://digitalindia.gov.in ",
  },
  {
    image: "/download4.png",
    link: "https://www.pmindia.gov.in",
  },
  {
    image: "/download5.png",
    link: "hhttps://swachhbharatmission.gov.in",
  },
];

// https://www.india.gov.in  
export default function GovernmentPartners() {
  return (
    <section className="bg-[#e8e0c9] py-8 px-10 overflow-hidden">

      <div className="marquee group">

        <div className="marquee-content">

          {[...logos, ...logos].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-shrink-0
                w-[160px]
                h-[76px]
                bg-white
                rounded-xl
                shadow-sm
                mx-3
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-md
              "
            >
              <Image
                src={item.image}
                alt="Partner Logo"
                width={120}
                height={50}
                className="object-contain max-h-[50px]"
              />
            </Link>
          ))}

        </div>

      </div>

      <style jsx>{`
        .marquee {
          overflow: hidden;
          width: 100%;
        }

        .marquee-content {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .group:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}