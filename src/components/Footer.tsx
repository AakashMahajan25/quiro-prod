import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../assets/Logo.png";
import footer from "../assets/footerbg.png";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-start bg-[#F5F3ED] p-8 lg:pb-0 lg:pt-28 pt-10 lg:px-20  space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full px-2 md:pt-5 lg:-pt-5 lg:px-0">
          {/* Logo */}
          <div className="flex flex-col items-start justify-start w-full sm:mb-0 mb-16 lg:pb-10">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={80}
              className="mx-auto sm:mx-0 h-auto w-[102px] lg:w-[122px]"
            />
          </div>

          {/* Company and Resources Sections */}
          <div className="flex justify-between sm:justify-start lg:gap-32 sm:gap-10 md:flex-row items-start w-full gap-8 mb-16 lg:mb-20">
            <div className="flex flex-col items-start space-y-2">
              <h1 className="font-semibold text-[16px] sm:text-[10px] text-[#00413E] mb-3 lg:text-[24px]">
                Company
              </h1>
              <ul className="space-y-2">
                <li className="text-[16px] sm:text-[10px] lg:text-lg text-[#00413ECC]">
                  <Link href={"/aboutus"}>About us</Link>
                </li>
                <li className="text-[16px] sm:text-[10px] lg:text-lg text-[#00413ECC]">
                  <Link href={"/business"}>For Businesses</Link>
                </li>
                <li className="text-[16px] sm:text-[10px] lg:text-lg text-[#00413ECC]">
                  <Link href={"/customers"}>For Customers</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-2 mr-20 sm:mr-0">
              <h1 className="font-semibold text-[16px] text-[#00413E] sm:text-[10px] lg:text-[24px] mb-3">
                Resources
              </h1>
              <ul className="space-y-2">
                <li className="text-[16px] lg:text-lg text-[#00413ECC] sm:text-[10px] relative ">
                  <div className="text-[10px] font-[500] leading-[15px] text-[#9E326D] absolute left-[110%] -top-2  border rounded-full w-max bg-[#f4e1e5] border-[#9E326D] pl-[5px] pt-[2px] pb-[3px] pr-[4px]">
                    Coming soon
                  </div>
                  Documentation
                </li>
                <li className="text-[16px] lg:text-lg text-[#00413ECC] sm:text-[10px]">
                  <Link href={"/pricing"}>Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section with Background and Address */}
        <div className="lg:w-1/2 h-full w-full sm:flex flex-col justify-between lg:items-end lg:pt-6">
          <div
            className="w-full bg-cover bg-center rounded-xl hidden sm:block p-6 lg:p-10 mb-8"
            style={{ backgroundImage: `url(${footer.src})` }}
          >
            <div className="flex flex-col space-y-4 lg:py-4">
              <div>
                <h1 className="font-semibold text-lg sm:text-[10px] lg:text-xl text-[#F5F3ED]">
                  Address
                </h1>
                <p className="text-sm lg:text-base sm:text-[10px] text-[#F5F3ED]">
                  2nd FLOOR, PLOT NO.4, Minarch Tower, Sector 44, Gurgaon,
                  Haryana - 122003
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-lg lg:text-xl sm:text-[10px] text-[#F5F3ED]">
                  Email
                </h1>
                <p className="text-sm lg:text-base text-[#F5F3ED] sm:text-[10px]">
                  info@quiro.in
                </p>
              </div>
              <div>
                <p className="text-xs lg:text-sm text-[#F5F3ED] opacity-60 sm:text-[10px]">
                  CIN: U62020HR2024PTC126724 | DPIIT Recognition number:
                  DIPP165445
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Bottom Section for Socials and Copyright */}
      <div className="bg-[#F5F3ED] px-8 lg:px-20 pb-8 flex flex-col sm:flex-row gap-[29px]">
        {/* Social Icons and Description */}
        <div className="flex flex-col items-start sm:mb-8 w-full sm:w-1/2">
          <div className="flex space-x-4 mx-auto sm:mx-0">
            <a
              href="https://www.facebook.com/people/Quiro/61556699365682/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] cursor-pointer"
            >
              <FaFacebook className="text-xl lg:text-2xl cursor-pointer text-[#00413E]" />
            </a>
            <a
              href="https://www.instagram.com/getquiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] cursor-pointer"
            >
              <AiFillInstagram className="text-xl lg:text-2xl cursor-pointer text-[#00413E]" />
            </a>
            <a
              href="https://x.com/getquiro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] cursor-pointer"
            >
              <BsTwitterX className="text-xl lg:text-2xl cursor-pointer text-[#00413E]" />
            </a>
            <a
              href="https://www.linkedin.com/company/getquiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] cursor-pointer"
            >
              <FaLinkedin className="text-xl lg:text-2xl cursor-pointer text-[#00413E]" />
            </a>
            <a
              href="mailto:info@quiro.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] cursor-pointer"
            >
              <GrMail className="text-xl lg:text-2xl cursor-pointer text-[#00413E]" />
            </a>
          </div>
          <p className="text-[12px] sm:text-[10px] text-center sm:text-start lg:text-base mt-4 text-[#00413ECC] lg:max-w-[65%]">
            Quiro is a platform built with the HoReCa community, for business
            owners & their guests.
          </p>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:text-right  items-center text-center lg:text-right w-full sm:w-1/2">
          <p className="text-[12px] lg:text-base text-[#00413ECC] sm:self-end">
            © 2024 Quiro Horizon Private Limited. All rights reserved.
          </p>
          <ul className="flex mx-auto sm:mx-0 space-x-4 mt-6 self-end">
            <Link
              href={
                "/refundpolicy"
              }
            >
              <li className="cursor-pointer hover:underline text-[#00413ECC] text-[10px] sm:text-[8px] lg:text-sm 3xl:text-[16px] border-b border-b-[#00413ECC] hover:border-b-0">
                Refund Policy
              </li>
            </Link>
            <Link
              href={
                "/termsofservices"
              }
            >
              <li className="cursor-pointer hover:underline text-[#00413ECC] text-[10px] sm:text-[8px] lg:text-sm 3xl:text-[16px] border-b border-b-[#00413ECC] hover:border-b-0">
                Terms & Condition
              </li>
            </Link>
            <Link
              href={
                "/privacypolicy"
              }
            >
              <li className="cursor-pointer hover:underline text-[#00413ECC] text-[10px] sm:text-[8px] lg:text-sm 3xl:text-[16px] border-b border-b-[#00413ECC] hover:border-b-0">
                Privacy Policy
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <h1 className="text-center font-[400] sm:text-lg text-[10px] text-[#00413ECC] pb-4">
        Crafted with{" "}
        <span className="inline-block text-[#006B66] align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#006B66"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>{" "}
        by{" "}
        <a href="https://www.yourwebsite.shop/" className="">
          YourWebsite.shop
        </a>
      </h1>
    </>
  );
};

export default Footer;
