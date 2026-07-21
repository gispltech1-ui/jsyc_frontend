"use client";

import Image from "next/image";
import Link from "next/link";
import { Send, MessageCircle } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-8 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1.2fr_1.2fr] gap-12">

          {/* Logo Section */}
          <div>

            <div className="flex items-start gap-4">

              <Image
                src="/govjhar 3.svg"
                alt="JSYC"
                width={100}
                height={80}
                className="object-contain shrink-0"
              />

              <div>
                <h2 className="text-[#e6c65a] text-[28px] leading-tight">
                  JSYC Platform
                </h2>

                <p className="text-gray-300 text-[16px] leading-7 mt-1">
                  Digital Enrolment &
                  <br />
                  Management
                </p>
              </div>

            </div>

            {/* Newsletter */}
            <div className="mt-16">

              <label className="block text-[14px] mb-3">
                Newsletter
              </label>

              <div className="relative max-w-[280px]">

                <input
                  type="email"
                  placeholder="Your email"
                  className="
                    w-full
                    h-11
                    rounded-full
                    bg-white
                    text-black
                    px-5
                    pr-14
                    text-sm
                    outline-none
                  "
                />

                <button
                  className="
                    absolute
                    right-1
                    top-1
                    w-9
                    h-9
                    rounded-full
                    bg-[#3b82f6]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Send size={15} />
                </button>

              </div>

            </div>

          </div>

          {/* Site Map */}
          <div>

            <h3 className="text-[16px] font-semibold mb-5">
              Site Map
            </h3>

            <ul className="space-y-2 text-[14px] text-gray-300">

              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white">
                  About City
                </Link>
              </li>

              <li>
                <Link href="/departments" className="hover:text-white">
                  Department's
                </Link>
              </li>

              <li>
                <Link href="/information" className="hover:text-white">
                  Information
                </Link>
              </li>

             

            </ul>

          </div>


          {/* Contact */}
<div>
  <h3 className="text-[16px] font-semibold mb-5">
    Contact Us
  </h3>

  <div className="space-y-5 text-gray-300 text-[14px]">

    <div>
      <p className="text-white font-medium mb-1">
        Head Office
      </p>
      <p className="leading-6">
       Jharkhand State Youth Commission, Ranchi,
 Engineering Hostel Building, Ground Floor, Sec. -3,
 Golchakkar, H.E.C., Dhurwa, Ranchi.
      </p>
    </div>

    <div>
      <p className="text-white font-medium mb-1">
        Phone
      </p>
      <p>+91 98765 *****</p>
    </div>

    <div>
      <p className="text-white font-medium mb-1">
        Email
      </p>
      <p>jsyc.rnc@gmail.com</p>
      {/* <p>support@jsyc.in</p> */}
    </div>

    <div>
      <p className="text-white font-medium mb-1">
        Working Hours
      </p>
      <p>Mon - Fri : 10:00 AM - 6:00 PM</p>
    </div>

  </div>
</div>

        

          {/* Social */}
          <div>

            <h3 className="text-[16px] font-semibold mb-5">
              Social
            </h3>

            <div className="flex gap-3 mb-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#d85a00] flex items-center justify-center"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#d85a00] flex items-center justify-center"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#d85a00] flex items-center justify-center"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#d85a00] flex items-center justify-center"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#d85a00] flex items-center justify-center"
              >
                <MessageCircle size={16} />
              </a>

            </div>

            <div className="bg-white h-[82px] px-4 flex items-center justify-center">
              <Image
                src="/footer3.svg"
                alt="Swachh Bharat"
                width={180}
                height={50}
                className="w-full h-[45px] object-contain"
              />

              {/* <div className="bg-white h-[82px] px-4 flex items-center justify-center"> */}
                <Image
                  src="/footer1.svg"
                  alt="Digital India"
                  width={180}
                  height={50}
                  className="w-full h-[45px] object-contain"
                />
              {/* </div> */}

                <Image
                  src="/footer2.svg"
                  alt="Ministry"
                  width={180}
                  height={50}
                  className="w-full h-[45px] object-contain"
                />
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-5">
          <p className="text-center text-xs text-gray-400">
            © 2026 JSYC | All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}