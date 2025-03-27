import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import profile1 from "../../assets/aboutus/Team/profile.1.png";
import profile3 from "../../assets/aboutus/Team/faceProfile3.png";
import profile4 from "../../assets/aboutus/Team/faceprofile.4.png";
import profile5 from "../../assets/aboutus/Team/faceprofile.5.png";
import profile6 from "../../assets/aboutus/Team/faceprofile.6.png";
import profile7 from "../../assets/aboutus/Team/faceprofile.7.png";
import profile8 from "../../assets/aboutus/Team/profile8.png";

// Team members data
const teamMembers = [
  { profileImage: profile1, name: "Yash Kumar", text: "Founder & CEO" },
  { profileImage: profile7, name: "Vikrant Vasu", text: "Operations Team" },
  { profileImage: profile3, name: "Shikhir Kalia", text: "Fractional CTO" },
  { profileImage: profile8, name: "Aakash Mahajan", text: "Head Of Technology" },
  { profileImage: profile8, name: "Raunaq", text: "Partner" },
  { profileImage: profile8, name: "Gurman Singh", text: "Partner" },
  { profileImage: profile8, name: "Keshav Tayal", text: "Entrepreneur in Residence" },
  
  { profileImage: profile5, name: "Guneet Singh", text: "Partner" },
  {
    profileImage: profile6,
    name: "Aanchal Patel",
    text: "Brand & Product Designer",
  },
  { profileImage: profile4, name: "Sumit Jain", text: "Partner" },
  
  { profileImage: profile8, name: "Kunal Khandelwal", text: "Software Engineer" },
  { profileImage: profile8, name: "Kashish Tayal", text: "Marketing Intern" },
  { profileImage: profile8, name: "Trapti Singh", text: "Marketing Intern" },
  { profileImage: profile8, name: "Saurabh Kumar Tiwari", text: "Development Intern" },
  // { profileImage: profile9, name: "Raunak Arora", text: "Product" },
];

// Helper function to chunk the team members into groups of 4
const chunkArray = (array: Array<TeamMember>, chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

// Chunk the team members into groups of 4 for the md screen carousel
const chunkedTeamMembers = chunkArray(teamMembers, 4);

// Add interface for team member type
interface TeamMember {
  profileImage: StaticImageData;
  name: string;
  text: string;
}

const Team: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center  sm:px-[52px] lg:px-[126px] 3xl:px-[160px]">
      <div className="pb-2 lg:pb-[100px] sm:self-start lg:self-center">
        <p className="billyOhioText -translate-x-4 sm:-translate-x-0  font-[400] text-[24px] leading-[28.8px] sm:text-[26px] sm:leading-[31.2px] lg:text-[40px] lg:leading-[48px]  text-[#006B66]">
          Empower
        </p>
        <h5 className="text-[20px] font-[600] leading-[24px] sm:text-[32px] lg:text-[40px] 3xl:text-[48px] lg:leading-[57.6px] sm:leading-[38.4px]">
          Meet the Dream Team
        </h5>
      </div>

      {/* Carousel for md and larger screens */}
      <div className="hidden sm:block lg:hidden">
        <Carousel className="w-full max-w-none">
          <CarouselContent>
            {chunkedTeamMembers.map((group, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-2 gap-4">
                  {group.map((member: TeamMember, idx: number) => (
                    <div key={idx} className="p-1">
                      <Card className="border-0 shadow-none">
                        <CardContent className="flex flex-col items-center justify-center bg-[#F5F3ED] p-6">
                          <div className="relative h-fit w-fit">
                            <div className="absolute top-10 sm:top-0 sm:right-3 right-28 text-4xl bg-white text-[#000000] cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-1.5 z-20">
                              <FaLinkedin className="text-2xl" />
                            </div>

                            <Image
                              src={member.profileImage}
                              alt={`${member.name}'s Profile`}
                              className="w-[180px] h-[180px]"
                            />
                          </div>
                          <p className="billyOhioText mt-2 text-[24px] font-[400] leading-[29px] text-[#006B66]">
                            {member.name}
                          </p>
                          <p className="mt-1 text-center text-[14px] font-[500] leading-[16.8px] text-[#000000]">
                            {member.text}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Custom chevron navigation */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
            <CarouselPrevious className="text-white bg-black rounded-full p-2 text-2xl hover:bg-gray-700">
              <FaChevronLeft />
            </CarouselPrevious>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            <CarouselNext className="text-white bg-black rounded-full p-2 text-2xl hover:bg-gray-700">
              <FaChevronRight />
            </CarouselNext>
          </div>
        </Carousel>
      </div>

      {/* Carousel for smaller screens */}
      <div className="block sm:hidden lg:hidden">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-0 shadow-none">
                    <CardContent className="flex flex-col items-center justify-center bg-[#F5F3ED] p-6">
                      {/* <div className="absolute top-8 right-24 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-1.5">
                        <FaLinkedin className="text-xl" />
                      </div> */}
                      <Image
                        src={member.profileImage}
                        alt={`${member.name}'s Profile`}
                        className="w-[203px] h-[206px] "
                      />
                      <p className="billyOhioText mt-[20px] text-[24px] font-[400] leading-[29px] text-[#006B66]">
                        {member.name}
                      </p>
                      <p className="mt-1 text-center text-[13px] font-[500] leading-[15.6px] text-[#333333]">
                        {member.text}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Custom chevron navigation */}
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
            <CarouselPrevious className="text-[#000000] text-xl">
              <FaChevronLeft />
            </CarouselPrevious>
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
            <CarouselNext className="text-[#000000] text-xl">
              <FaChevronRight />
            </CarouselNext>
          </div>
        </Carousel>
      </div>

      {/* Grid for lg screens */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-[200px] 3xl:gap-x-[260px] lg:gap-y-[102px] 3xl:gap-y-[126px] ">
        <div className="p-0">
          <Card className="border-0 shadow-none">
            <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-1 right-5 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/yashkumar-quiro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile1}
                alt="Yash Kumar's Profile"
                width={1000}
                className="3xl:w-[358px] 3xl:h-[358px]  lg:w-[238px] lg:h-[236px]"
              />
              <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                Yash Kumar
              </p>
              <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                Founder & CEO
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-0 shadow-none">
            <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-5 right-8 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/vikrantvasu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile7}
                alt="Vikrant Vasu's Profile"
                width={1000}
                className="3xl:w-[357.74px] 3xl:h-[359.42px]  lg:w-[216px] lg:h-[236px]"
              />
              <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                Vikrant Vasu
              </p>
              <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                Operations
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-0 shadow-none">
            <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-1 right-5 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/shikhir-kalia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile3}
                alt="Shikhir Kalia's Profile"
                width={1000}
                className="3xl:w-[358px] 3xl:h-[358px]  lg:w-[236px] lg:h-[236px]"
              />
              <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                Shikhir Kalia
              </p>
              <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                Fractional CTO
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-0 shadow-none">
            <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-1 right-5 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/aakash-mahajan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile8}
                alt="Aakash Mahajan's Profile"
                width={1000}
                className="3xl:w-[358px] 3xl:h-[358px]  lg:w-[252.4px] lg:h-[236px]"
              />
              <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                Aakash Mahajan
              </p>
              <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                Head Of Technology
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-0 shadow-none">
            <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-1 right-5 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile8}
                alt="Raunaq's Profile"
                width={1000}
                className="3xl:w-[358px] 3xl:h-[358px]  lg:w-[252.4px] lg:h-[236px]"
              />
              <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                Raunaq
              </p>
              <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                Partner
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-0 shadow-none">
            <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-1 right-5 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/gurman-singh-banga-264029195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile8}
                alt="Gurman Singh's Profile"
                width={1000}
                className="3xl:w-[358px] 3xl:h-[358px]  lg:w-[252.4px] lg:h-[236px]"
              />
              <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                Gurman Singh
              </p>
              <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                Partner
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-0 shadow-none">
            <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-1 right-5 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/gurman-singh-banga-264029195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile8}
                alt="Gurman Singh's Profile"
                width={1000}
                className="3xl:w-[358px] 3xl:h-[358px]  lg:w-[252.4px] lg:h-[236px]"
              />
              <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                Keshav Tayal
              </p>
              <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
              Entrepreneur in Residence 

              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-0 shadow-none">
            <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-5 right-5 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/guneet-singh-87a652146/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile5}
                alt="Guneet Singh's Profile"
                width={1000}
                className="3xl:w-[323.21px] 3xl:h-[375.72px]  lg:w-[235px] lg:h-[236px]"
              />
              <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                Guneet Singh
              </p>
              <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                Partner
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-0 shadow-none">
            <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-5 right-5 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/aanchal-patel-b985531b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile6}
                alt="Aanchal Patel's Profile"
                width={1000}
                className="3xl:w-[352px] 3xl:h-[375px]  lg:w-[248.84px] lg:h-[236px]"
              />
              <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                Aanchal Patel
              </p>
              <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                Brand & Product
              </p>
            </CardContent>
          </Card>
        </div>


        <div>
          <Card className="border-0 shadow-none">
            <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-5 right-7 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/sumitjain34/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile4}
                alt="Sumit Jain's Profile"
                width={1000}
                className="3xl:w-[342.22px] 3xl:h-[375.72px]  lg:w-[241.46px] lg:h-[236px]"
              />
              <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                Sumit Jain
              </p>
              <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                Partner
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="">
          <Card className="border-0 shadow-none">
            <CardContent className="relative  flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-5 right-10 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/shrutichauhan559/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile8}
                alt="Shruti Chauhan's Profile"
                width={1000}
                className="3xl:w-[348.28px] 3xl:h-[359.42px]  lg:w-[227.45px] lg:h-[236px]"
              />
              <div>
                <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                  Kunal Khandelwal
                </p>
                <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                  Software Engineer
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="">
          <Card className="border-0 shadow-none">
            <CardContent className="relative  flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-5 right-10 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/shrutichauhan559/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile8}
                alt="Shruti Chauhan's Profile"
                width={1000}
                className="3xl:w-[348.28px] 3xl:h-[359.42px]  lg:w-[227.45px] lg:h-[236px]"
              />
              <div>
                <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                  Kashish Tayal
                </p>
                <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                  Marketing Intern
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="">
          <Card className="border-0 shadow-none">
            <CardContent className="relative  flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-5 right-10 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/shrutichauhan559/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile8}
                alt="Shruti Chauhan's Profile"
                width={1000}
                className="3xl:w-[348.28px] 3xl:h-[359.42px]  lg:w-[227.45px] lg:h-[236px]"
              />
              <div>
                <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                  Trapti Singh
                </p>
                <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                  Marketing Intern
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="">
          <Card className="border-0 shadow-none">
            <CardContent className="relative  flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-5 right-10 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
              <a
                  href="https://www.linkedin.com/in/shrutichauhan559/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile8}
                alt="Shruti Chauhan's Profile"
                width={1000}
                className="3xl:w-[348.28px] 3xl:h-[359.42px]  lg:w-[227.45px] lg:h-[236px]"
              />
              <div>
                <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                  Saurabh Kumar Tiwari
                </p>
                <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                  Development Intern
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* <div>
          <Card className="border-0 shadow-none">
            <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
              <div className="absolute top-5 right-8 3xl:right-10 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
                <a
                  href="https://www.linkedin.com/in/raunakarora01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </div>

              <Image
                src={profile9}
                alt="Raunak Arora's Profile"
                width={1000}
                className="3xl:w-[340px] 3xl:h-[360px]  lg:w-[236px] lg:h-[236px]"
              />
              <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                Raunak Arora
              </p>
              <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                Product
              </p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default Team;
