"use client";
import React, { useState } from "react";
import Image from "next/image";

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import logo from "@/assets/Logo.png";
import client2 from "@/assets/home/trusted/client2.jpeg"
import client8 from "@/assets/home/trusted/client8.jpg"
import client13 from "@/assets/home/trusted/client13.jpg"


const teamMembers = [
  {
    profileImage: client2,
    name: "Rocky",
    text: "Hubs of Joy",
    description:
      "Our operations feel more streamlined than ever. Quiro brought the convenience we were missing!",
    quote:
      "The onboarding is seamless, they came, installed QRs & all, and we were live before you know it!",
  },
  {
    profileImage: client8,
    name: "Mayank",
    text: "Arctic hills",
    description:
      "Quiro is soo convenient, managing kitchen was a hassle for me, Quiro came in and made it really quick!",
    quote:
      "Quiro transformed the way we manage our kitchen—seamless and quick onboarding!",
  },
  {
    profileImage: client13,
    name: "Gaurav",
    text: "Hiker’s house",
    description:
      "Quiro is quite easy to use, my staff got familiar with it within a couple of days",
    quote: "Our staff adapted to Quiro in no time. It's so user-friendly!",
  },
];

const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full text-center mb-[80px] sm:mb-[96px]">
      <Image
        src={logo}
        alt="logo"
        width={1000}
        className="hidden lg:block w-[188.39px] 3xl:mb-[83px] mb-[62.54px]"
      />

      {/* Dynamic Quote */}
      <div className="overflow-hidden w-full mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center items-center" // Center content inside each slide
              style={{ width: "100%" }} // Ensure each slide takes full width
            >
              <p className="text-[14px] leading-[21px] text-[#000000] font-[700] sm:text-[14px] sm:leading-[21px] lg:text-[27.13px] lg:leading-[40.69px] text-center px-[24px] sm:px-[93px] lg:px-[168px]">
                “{member.description}”
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-[265px] sm:max-w-[325px] lg:max-w-[610px] mt-[80px] sm:mt-[43.6px] lg:mt-[79.25px]  3xl:mt-[106px]">
        {/* Carousel Content */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col items-center relative"
              >
                <Image
                  src={member.profileImage}
                  alt={`${member.name}'s profile`}
                  className="w-[48px] lg:w-[90.43px] mx-auto rounded-full "
                />
                <h3 className="text-[13px] font-[500] leading-[19.5px] sm:text-[12.8px] sm:leading-[19.2px] lg:text-[24.11px] lg:leading-[36.17px] mt-[18px] lg:mt-[33.91px] text-[#000000]">
                  {member.name}
                </h3>
                <p className="text-[13px] font-[500] leading-[19.5px] sm:text-[12.8px] sm:leading-[19.2px] lg:text-[24.11px] lg:leading-[36.17px] text-[#006B66]">
                  {member.text}
                </p>
                
              </div>
            ))}
          </div>
        </div>

        {/* Static Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute top-[18%] left-[5%] lg:text-[30px] transform -translate-y-1/2 bg-[#F5F3ED] p-[7.36px] lg:p-[13.88px] rounded-full border-[0.24px] border-[#000000] shadow-[3px_3px_0_rgba(0,0,0,1)]"
        >
          <IoIosArrowRoundBack />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-[18%] right-[5%] lg:text-[30px] transform -translate-y-1/2 bg-[#F5F3ED] p-[7.36px] lg:p-[13.88px] rounded-full border-[0.24px] border-[#000000] shadow-[3px_3px_0_rgba(0,0,0,1)]"
        >
          <IoIosArrowRoundForward />
        </button>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-[52.6px] sm:mt-[55.2px] lg:mt-[104px]">
          {teamMembers.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 mx-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-[#000000]" : "bg-[#D9D9D9]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
