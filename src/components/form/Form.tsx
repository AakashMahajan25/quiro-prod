import React from "react";
import gradient from "@/assets/form/gradient.png";

// Icons
import { IoIosCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

// Button imports
import line from "@/assets/buttonLine.png";

const Form: React.FC = () => {
  return (
    <div className="mb-[80px] sm:mb-[72.9px] lg:mb-[110px] mt-[54.61px] sm:mt-[36px] lg:mt-[79px] 3xl:mt-[115px]">
      <div>
        <h4 className="text-[20px] sm:text-[24px] lg:text-[40px] 3xl:text-[56px] leading-[24px] sm:leading-[28.8px] lg:leading-[48px] 3xl:leading-[67.2px] font-[600] text-center">
          We&apos;re Here To Support You
        </h4>
        <p className="pt-[13px] sm:pt-[10px] lg:pt-[16px] 3xl:pt-[24px] text-center text-[12px] sm:text-[11px] lg:text-[18px] px-[49px] sm:px-[179px] leading-[18px] sm:leading-[16.5px] lg:leading-[27px] font-[500]">
          {" "}
          Our team is here for you! Fill in the form, and we’ll get back within
          a flinch
        </p>
      </div>

      {/* Form */}
      <div className="mt-[32.2px] lg:mt-[50px] relative bg-white overflow-hidden mx-[32px] sm:mx-[39px] md:max-w-[750px] md:mx-auto lg:max-w-[1000px] lg:min-w-[900px] lg:mx-auto  xl:max-w-[1000px] xl:mx-auto   2xl:mx-[auto] 2xl:max-w-[1000px] 3xl:max-w-none 3xl:mx-[310px] rounded-[5.31px] sm:rounded-[10.62px] lg:rounded-[20px] pt-[34px] sm:pt-0 pb-[18px] 3xl:pb-[40px]  sm:flex flex-row-reverse justify-end items-center">
        <Image
          src={gradient}
          width={1000}
          alt="gradient"
          className="absolute sm:w-[640px] sm:h-[500px] sm:-right-[80px] lg:w-[900px] lg:h-[650px] md:left-20 md:w-[90vw] xl:left-40 3xl:left-[22vw]"
        />
        <form className=" relative">
          <h5 className="text-[18px] sm:text-[20px] lg:text-[28px] 3xl:text-[40px] font-[600] leading-[21.6px] sm:leading-[24px] lg:leading-[33.6px] 3xl:leading-[48px] text-center sm:text-start text-[#006B66] px-[30px] sm:px-0">
            Move Fast, Break Nothing.
          </h5>

          <div className="pl-[51px] pr-[65px] sm:px-0 pt-[26px] sm:pt-[23.4px] lg:pt-[14px] 3xl:pt-[50px] relative z-10 sm:flex items-start sm:gap-[36px] lg:gap-[54px]">
            <div>
              <div>
                <label
                  htmlFor="Name"
                  className="text-[12px] lg:text-[16px] 3xl:text-[20px] 3xl:leading-[30px] leading-[18px] lg:leading-[24px]  font-[500] block"
                >
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="text-[8px] lg:text-[12px] focus:outline-none 3xl:text-[14px] 3xl:leading-[21px] font-[400] leading-[12px] border-b-[0.27px] sm:border-b-[0.5px] border-black w-full pb-[2.35px] bg-transparent mt-[14px] "
                />
              </div>

              <div className="pt-[15px] sm:hidden">
                <label
                  htmlFor="Phn"
                  className="text-[12px] lg:text-[16px] 3xl:text-[20px] 3xl:leading-[30px] leading-[18px] lg:leading-[24px] font-[500] block"
                >
                  Phone Number *
                </label>
                <input
                  type="text"
                  placeholder="Your Phone number"
                  className="text-[8px] lg:text-[12px] focus:outline-none 3xl:text-[14px] 3xl:leading-[21px] lg:leading-[18px] font-[400] leading-[12px] border-b-[0.27px] sm:border-b-[0.5px] border-black w-full pb-[2.35px] bg-transparent mt-[14px]"
                />
              </div>

              <div className="pt-[15px] sm:pt-[24px] lg:pt-[40px]">
                <label
                  htmlFor="Email"
                  className="text-[12px] lg:text-[16px] leading-[18px] lg:leading-[24px] font-[500] block"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="text-[8px] lg:text-[12px] focus:outline-none 3xl:text-[14px] 3xl:leading-[21px] lg:leading-[18px] font-[400] leading-[12px] border-b-[0.27px] sm:border-b-[0.5px] border-black w-full pb-[2.35px] bg-transparent mt-[14px]"
                />
              </div>

              <div className="pt-[15px] sm:pt-[24px] lg:pt-[40px]">
                <label
                  htmlFor="Help"
                  className="text-[12px] lg:text-[16px] 3xl:text-[20px] 3xl:leading-[30px] leading-[18px] lg:leading-[24px] font-[500] block"
                >
                  How can we help ?
                </label>
                <input
                  type="text"
                  placeholder="Write your message here"
                  className="text-[8px] lg:text-[12px] focus:outline-none 3xl:text-[14px] 3xl:leading-[21px] lg:leading-[18px] font-[400] leading-[12px] border-b-[0.27px] sm:border-b-[0.5px] border-black w-full pb-[2.35px] bg-transparent mt-[14px]"
                />
              </div>
            </div>

            <div className=" hidden sm:block">
              <label
                htmlFor="Phn"
                className="text-[12px]  lg:text-[16px] 3xl:text-[20px] 3xl:leading-[30px] leading-[18px] lg:leading-[24px] font-[500] block"
              >
                Phone Number *
              </label>
              <input
                type="text"
                placeholder="Your Phone number"
                className="text-[8px] lg:text-[12px] 3xl:text-[14px] focus:outline-none lg:leading-[18px] font-[400] leading-[12px] border-b-[0.27px] sm:border-b-[0.5px] border-black w-full pb-[2.35px] bg-transparent mt-[14px]"
              />
            </div>
          </div>

          <div className="w-full flex justify-center sm:justify-start mt-[29px] sm:mt-[31px] lg:mt-[40px]">
            <button className="bg-black relative   text-white  sm:px-10 rounded-[4px] flex items-center w-fit text-[10px] sm:text-[8px] lg:text-[12px] focus:outline-none 3xl:text-[16px] sm:py-4 leading-[15px] sm:leading-[12px] lg:leading-[18px] 3xl:leading-[24px] pl-[19.5px] sm:pl-[11.78px] pr-[21px] sm:pr-[11.06px] lg:px-[10px] 3xl:pl-[22px] 3xl:pr-[20px] py-[7.92px] sm:pt-[6.03px] lg:pt-[5px] sm:pb-[5.73px] lg:pb-[7.9px] 3xl:pt-[15px] 3xl:pb-[14px]">
              Submit
              <Image
                src={line}
                width={100}
                height={0}
                alt="line"
                className="absolute w-full -bottom-[5px] left-0 "
              />
            </button>
          </div>
        </form>

        <div className="bg-[#006B66] lg:min-w-[363px] 3xl:min-w-[475px] mx-[17px] sm:mr-[34px] lg:mr-[52px] 3xl:mr-[82px]  lg:ml-[19.82px] 3xl:ml-[40px] rounded-[5.81px] lg:rounded-[15px] pl-[27px] sm:pl-[31px] lg:pl-[44.18px] 3xl:pl-[59px]  pt-[21px] sm:pt-[38px] lg:pt-[55px] 3xl:pt-[72px] pb-[33px] sm:pb-[63px] lg:pb-[90.84px] pr-[39px]  text-white mt-[23px] 3xl:mt-[40px]  relative sm:pr-[43.5px]">
          <div className=" text-white">
            <h5 className="text-[18px] sm:text-[20px] lg:text-[28px] 3xl:text-[40px] leading-[21px] sm:leading-[24px] lg:leading-[33px] 3xl:leading-[48px] text-white font-[600]">
              Reach us at:
            </h5>
            <p className="text-[10px] sm:text-[9.55px] lg:text-[14px] 3xl:text-[18px] leading-[15px] sm:leading-[14.33px] lg:leading-[21px] 3xl:leading-[27px] font-[500] mt-[8px] sm:mt-[8.06px] lg:mt-[16px] sm:max-w-[177px] lg:max-w-[258px] 3xl:max-w-[361px]">
              Get a personalized online demo and see what else Quiro can do for
              you
            </p>
          </div>

          {/* contact info with icons */}
          <div className=" mt-[27.17px] sm:mt-[37px] lg:mt-[46px] 3xl:mt-[70px]">
            <div className="flex items-center gap-[8px] lg:gap-[19.53px] 3xl:gap-[30px]">
              <div>
                <IoIosCall className="text-[18px] sm:text-[21px] lg:text-[26px] 3xl:text-[40px]" />
              </div>
              <div className="text-[10px] lg:text-[16px] 3xl:text-[18px] leading-[15px] font-[500]">
                +91 9760865508
              </div>
            </div>
            <div className="flex items-center gap-[8px] lg:gap-[19.53px] 3xl:gap-[30px] mt-[18px] 3xl:mt-[27px]">
              <div>
                <GrMail className="text-[18px] sm:text-[21px] lg:text-[26px] 3xl:text-[40px]" />
              </div>
              <div className="text-[10px] lg:text-[16px] 3xl:text-[18px]  leading-[15px] font-[500]">
              info@quiro.in
              </div>
            </div>
            <div className="flex items-center gap-[8px] lg:gap-[19.53px] 3xl:gap-[30px] mt-[18px] 3xl:mt-[27px]">
              <div>
                <HiLocationMarker className="text-[18px] sm:text-[21px] lg:text-[26px] 3xl:text-[40px]" />
              </div>
              <div className="text-[10px] lg:text-[16px] 3xl:text-[18px] leading-[15px] font-[500]">
              sector 44, Gurugram
              </div>
            </div>
          </div>

          {/* Social Handle icons */}
          <div className="flex items-center mt-[31px] sm:mt-[44px] lg:mt-[78px] gap-[15px] ">
            <a href="https://www.facebook.com/people/Quiro/61556699365682/">
              {" "}
              <FaFacebookF  className="lg:text-[20px]" />
            </a>
            <a href="https://www.instagram.com/getquiro/">
              <PiInstagramLogoFill className="lg:text-[20px]" />
            </a>
            <a href="https://x.com/getquiro">
              <FaXTwitter className="lg:text-[20px]" />
            </a>
            <a href="https://www.linkedin.com/company/getquiro/posts/?feedView=all">
              <FaLinkedinIn className="lg:text-[20px]"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
