import Image from "next/image";
import React from "react";
import apos2 from "@/assets/home/AbsoluteImages/apos2.png";
import kamal from "@/assets/home/AbsoluteImages/Kamal.png";
import fstars from "@/assets/home/5star.png";
import wolarr from "@/assets/home/walloflove/wolarr.png";
// import wolcusimg3desk from "@/assets/home/walloflove/wolcusimg3desk.png";
import rajesh from "@/assets/home/AbsoluteImages/Rajesh.png";

// Real people import
import Pradeep from "@/assets/home/walloflove/Pradeep.jpeg";
import client9 from "@/assets/home/trusted/client9.jpg";
import client10 from "@/assets/home/trusted/client10.jpg";
import client10tab from "@/assets/home/trusted/client10Tab.jpg";
import client11 from "@/assets/home/trusted/client11.jpg";
import client7 from "@/assets/home/trusted/client7.jpg";
import wall1 from "@/assets/home/walloflove/wall1.png"
import wall2 from "@/assets/home/walloflove/wall2.png"
import wall3 from "@/assets/home/walloflove/wall3.png"
import wall4 from "@/assets/home/walloflove/wall4.png"
import wall4tab from "@/assets/home/walloflove/wall4tab.png"
import wall4mob from "@/assets/home/walloflove/wall4mob.png"

const WallOfLove: React.FC = () => {
  return (
    <div className="lg:pb-[105px] sm:pb-[100px] pb-[102px]">
      <div className="text-center pb-6">
        <h5 className="text-[20px] sm:text-[24px] sm:leading-[28.8px] lg:text-[40px] 3xl:text-[48px] lg:leading-[48px] 3xl:leading-[57.6px] font-[600] w-fit mx-auto relative">
          <span className="billyOhioText text-[#006B66] absolute font-[400] text-[24px] leading-[28.8px] lg:text-[38px] 3xl:text-[36px] lg:leading-[57px] 3xl:leading-[54px] sm:text-[24px] sm:leading-[28.8px]  sm:px-0 lg:-left-8 lg:-top-10 sm:-left-6 -left-4 -top-6">
            Cheers
          </span>
          Wall of Love
        </h5>
        <p className="text-[13px] leading-[19.5px] lg:pt-[16.02px] 3xl:pt-[16px] sm:pt-[0px] pt-[11px] lg:text-[16px] 3xl:text-[20px] lg:leading-[24px] 3xl:leading-[30px] font-[500]">
          Less from us, more from our happy customers
        </p>
      </div>

      {/* Mobile screen masonry */}

      <div className="flex gap-[16px]  max-w-[330px] sm:hidden mx-auto lg:hidden">
        {/* First column */}
        <div className="w-[55%] flex flex-col gap-[20px]">
          {/* Row 1 */}
          <div className="relative w-full">
            <Image src={wall4mob} alt="g1mob" className="absolute w-full  z-0" />

            <div className="relative pt-[28px] pr-[50px] pl-[18px] z-10 ">
            <p className="text-[8px] pb-[3px]">“A Seamless Experience”</p>
              <p className="text-[8px] font-[500] leading-[12px] pb-[5px] pt-[0px]">
                &apos;Quiro has transformed how we manage our hotel operations.
                The QR-based ordering and request &quot;
              </p>
              <p className="text-[10px] font-[400] leading-[15px] pb-[12px]">
                Gaurav,{" "}
                <span className="text-[10px] text-[#006B66] font-[600]">
                  Hiker&apos;s House
                </span>
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="border border-[#006B66] rounded-[10px] bg-white">
          <p className="text-[8px] pt-[12px] pl-[18px] pr-[20px]">“Flawless Integration, Happy Customers”</p>
            <p className="text-[8px] leading-[12px] font-[500] pl-[18px] pr-[20px] pt-[12px] pb-[30px]">
              &quot;The Quiro system integrates perfectly with our hotel operations. Our customers love the convenience, and so do we!&quot;
            </p>
            <div className="flex items-center gap-[36px] pl-[18px] pr-[18px] pb-[22px]">
              <div>
                <p className="text-[10px] leading-[15px] font-[400]">Uttam</p>
                <p className="text-[10px] leading-[15px] font-[600] text-[#006B66]">
                  Uttam Zaika
                </p>
              </div>
              <div>
                <Image
                  src={client11}
                  alt="uttamzaika"
                  width={1000}
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Row 3 */}

          <div className="border  border-[#006B66] rounded-[10px] bg-white  ">
            <div className="pt-[26px] pb-[11px]">
              <Image
                src={client7}
                alt="wolimg1"
                width={1000}
                className="w-[70px] h-[70px] mx-auto rounded-full"
              />
            </div>
            <div className="pb-[6px]">
              <Image src={fstars} alt="stars" className="w-[83px] mx-auto" />
            </div>
            <div className="text-[10px] leading-[15px] font-[500] text-center pb-[6px]">
            <p className="text-[8px] pb-[8px] pl-[18px] pr-[20px]">“Flawless Integration, Happy Customers”</p>
              &quot;It was difficult to manage guest requests earlier. Quiro took the stress out of managing guest requests. It’s so quick and easy—exactly what we needed!&quot;
            </div>
            <p className=" billyOhioText text-[14px] text-[#006B66] pb-[14px] text-center">
              Kamal
            </p>
          </div>
        </div>

        {/* Second column */}

        <div className="w-[40%] flex flex-col gap-[15px] mt-5">
          {/* First row */}
          <div className="relative">
            <Image
              src={wall1}
              alt="g2mob"
              width={1000}
              className="absolute w-[125px] z-0"
            />
            <div className="relative z-10 pt-[72px] text-center">
              <p className="text-[8px] pb-[6px]">“I really appreciate Quiro”</p>
              <p className="text-[7px] leading-[10.5px] px-[10px] font-[500] pb-[11px]">
                “The onboarding is seamless—they came, installed QRs & all, and we were live before you know it!”
              </p>
              <p className="text-[8px] leading-[12px]">
                Nitin,{" "}
                <span className="text-[#006B66] font-[600]">
                  Hotel Lujo Grand
                </span>
              </p>
            </div>
          </div>

          {/* Second row */}
          <div className="px-[8px] rounded-[10px] pt-[7px] border border-[#006B66] bg-white mt-[10px]">
            <div>
              <Image
                src={client9}
                alt="wolimg2"
                className="rounded-[6px] w-full"
              />
            </div>
            <p className="text-[7px] pt-[6px] pb-[0px] text-start">“Made Our Dining Service Smoother”</p>
            <p className="text-[6px] leading-[9px] font-[500] pt-[6px]">
              &quot;Quiro&apos;s menu management feature has simplified our
              dining service.&quot;
            </p>
            <p className="billyOhioText text-[10px] text-end pr-[12px] text-[#006B66] pb-[4px]">
              Mayank
            </p>
          </div>

          {/* Thirs row */}
          <div className="pt-[8px] px-[7px] bg-white rounded-[10px] border border-[#006B66] relative">
            <div className="h-[94px] overflow-hidden rounded-[6px]">
              <Image src={client10} alt="wolimg2" />
            </div>
            <p className="text-[7px] pt-[6px] pb-[0px] text-center">“Incredible Efficiency Boost”</p>
            <p className="text-[6px] font-[500] text-center pt-[8px]">
              &apos;The QR-based request system keeps everything organized, and guest satisfaction has noticeably increased.&apos;
            </p>
            <p className="billyOhioText text-[#006B66] text-[12px] text-center pb-[11px]">
              Rajesh
            </p>
            <Image
              src={apos2}
              width={1000}
              alt="apos2"
              className="absolute w-[35px] bottom-1 right-1 translate-y-1/2"
            />
          </div>
        </div>
      </div>

      {/* Mobile Masonry Above */}

      {/* Tab masonry below */}
      <div className="sm:flex hidden lg:hidden max-w-[625px] mx-auto ">
        {/* First coloumn */}
        <div className="w-[57.6%] flex flex-col gap-[40px]">
          {/* First row */}
          <div className="relative mb-[20px] ">
            <Image src={wall4tab} alt="g1tab" className="absolute w-full z-0 " />

            <div className="pt-20 relative z-10 pl-[24px] pr-[120px]">
            <p className="text-[12px] pb-[12px] leading-[18px] font-[600]">
                “A Seamless Experience”
              </p>
              <p className="text-[12px] leading-[18px] font-[500]">
                &apos;Quiro has transformed how we manage our hotel operations.
                The QR-based ordering and request &apos;
              </p>
              <p className="text-[15px] leading-[22.5px] font-[400] pt-[38px]">
                Gaurav,{" "}
                <span className="font-[600] text-[#006B66]">
                  Hiker&apos;s House
                </span>
              </p>
            </div>
          </div>

          {/* Second row */}
          <div className="border-2 bg-white border-[#006B66] rounded-[15px] pl-[30px] pt-[34px] pr-[35px] w-[319px]">
          <p className="text-[12px] pb-[12px] leading-[18px] font-[600]">
                “Flawless Integration, Happy Customers”
              </p>
            <p className="text-[14px] font-[500] leading-[21px]">
              &apos;Quiro has transformed how we manage our hotel operations.
              The QR-based ordering and request systems are a game-changer,
              allowing us to provide prompt service that our guests absolutely
              love!&apos;
            </p>
            <div className="flex justify-between pb-[36px] pt-[40px]">
              <div className="text-[16px] leading-[24px]">
                <p className="font-[400]">Uttam</p>
                <p className="font-[600] text-[#006B66]">Uttam Zaika</p>
              </div>
              <div>
                <Image
                  src={client11}
                  alt="uttamzaika"
                  width={1000}
                  className="w-[70px] h-[70px] rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="border-2 border-[#006B66] bg-white rounded-[15px] pt-[39px] w-[325px]">
            <div>
              <Image
                src={client7}
                alt="wolimg1"
                width={1000}
                className="w-[130px] mx-auto h-[130px] rounded-full"
              />
            </div>
            <div>
              <Image
                src={fstars}
                alt="fstars"
                width={1000}
                className="w-[205px] mx-auto pt-[19px] pb-[14px]"
              />
            </div>
            <p className="text-[12px] pb-[12px] leading-[18px] text-center font-[600]">
                “Stress-Free Guest Requests”
              </p>
            <p className="text-[14px] font-[400] leading-[21px] text-center px-[15px]">
              &apos;It was difficult to manage guest requests earlier. Quiro
              took the stress out of managing guest requests. It&apos;s so quick
              and easy—exactly what we needed!”
            </p>
            <p className="billyOhioText font-[400] text-[24px] text-center text-[#006B66] pt-[12px] pb-[18px]">
              Kamal
            </p>
          </div>
        </div>

        {/* Second column */}

        <div className="w-[42.4%] flex flex-col items-end pt-[20px]">
          {/* first row */}
          <div className="relative w-[236px]">
            <Image
              src={wall1}
              alt="g2tab"
              width={1000}
              className="w-[236px] absolute right-0"
            />

            <div className="relative z-10 pt-[150px] text-center ">
              <p className="text-[12px] leading-[18px] font-[600]">
                “I Really Appreciate Quiro”
              </p>
              <p className="pt-[21px] text-[12px] pl-[25px] pr-[32px] font-[500] pb-[10px]">
                “The onboarding is seamless, they came, installed QRs & all, and
                we were live before you know it!”{" "}
              </p>
              <p>
                Nitin,{" "}
                <span className="text-[#006B66] font-[600]">
                  Hotel Lujo Grand
                </span>
              </p>
            </div>
          </div>

          {/* Second row */}
          <div className="border-2 border-[#006B66] bg-white rounded-[15px] px-[15px] mt-[37px]">
            <div className="pt-[17px]">
              <Image
                src={client9}
                alt="wolimg2"
                className="h-[279px] rounded-xl"
              />
            </div>
            <p className="text-[12px] leading-[18px] font-[600] pt-[16px]">
                “Made Our Dining Service Smoother”
              </p>
            <p className="pt-[16px] font-[500] text-[12px] leading-[18px]">
              &apos;Quiro&apos;s menu management feature has simplified our
              dining service.&apos;
            </p>
            <p className="text-[20px] leading-[30px] font-[400] billyOhioText text-[#006B66] text-end pb-[10px]">
              Mayank
            </p>
          </div>

          {/* Third row */}
          <div className="border-2 relative border-[#006B66] rounded-[10px] px-[18px] pt-[17px]  bg-white w-[236px] mt-[19px]">
            <div className="w-full max-w-[300px] h-[150px] overflow-hidden rounded-xl">
              <Image
                src={client10tab}
                alt="wolimg2tablelandscape"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[12px] leading-[18px] font-[600] text-center pt-[16px]">
                “Incredible Efficiency Boost”
              </p>
            <p className="text-[10px] pt-[13px] leading-[15px] font-[500] text-center">
              &apos;The team at Quiro just gets what their partners need. From
              setup to daily use, everything has been smooth and simple!”
            </p>
            <p className="billyOhioText text-[#006B66] text-center pb-[23px]">
              Rajesh
            </p>
            <Image
              src={apos2}
              alt="apos2"
              width={1000}
              className="absolute w-[71px] bottom-0 right-2 translate-y-1/2"
            />
          </div>
        </div>
      </div>
      {/* Tab masonry above */}

      {/* For desktop screens */}

      <div className="hidden lg:flex justify-between p-10 lg:pb-56 lg:mx-auto lg:w-[1253px] 3xl:w-[1572px] 3xl:mx-auto ">
        <div className="w-[45%] flex flex-col items-center">
          <div className="flex items-center  gap-6 h-full">
            <div className="w-1/2 flex flex-col gap-[37px]">
              {/* first row first column */}
              <div className="relative lg:w-[316px]  3xl:w-[394px]">
                <Image
                  src={wall4}
                  width={1000}
                  alt="wolimgcus"
                  className="absolute top-0 -translate-y-16 "
                />
                {/* <Image src={client9}
                  width={1000}
                  alt="client"
                  className="absolute w-[94px] rounded-full translate-x-56"
                  /> */}
                <div className="relative z-10">
                  <p className=" lg:text-[15.95px] 3xl:text-[20px] font-[600] leading-[5px] lg:pl-[22px] 3xl:pl-[30px] lg:pr-[3px] 3xl:pr-[50px] mt-1 lg:pt-[32px] 3xl:pt-[64px] ">
                    “A Seamless Experience”
                  </p>
                  <p className="lg:text-[10px] 3xl:text-[12px] lg:leading-[15px] 3xl:leading-[18px] font-[500] pl-[27px] lg:pt-[16px] 3xl:pt-[24px] lg:pr-[98px] 3xl:pr-[124px]">
                    &apos;Quiro has transformed how we manage our hotel operations.
                    The QR-based ordering and request!&apos;
                  </p>
                  <p className="3xl:text-[16px] lg:text-[12.76px] lg:pt-[20px] 3xl:pt-[28px] leading-[19px] l3xl:eading-[24px] font-[400] pl-[27px] pb-[12px]">
                    Gaurav,{" "}
                    <span className="font-[600] text-[#006B66]">
                      Hiker&apos;s House
                    </span>
                  </p>
                </div>
              </div>

              {/* First col second row */}
              <div className="3xl:border-[2px] border-[1.6px] lg:pt-[30px] 3xl:pt-[44px] lg:pl-[33.5px] 3xl:pl-[42px] lg:pr-[29.93px] 3xl:pr-[30px] sm:mr-8  rounded-[20px]   border-[#006B66] bg-white  ">
                <p className=" lg:text-[15.95px] 3xl:text-[20px] font-[600] leading-[20px] lg:pl-[0px] 3xl:pl-[0px] lg:pr-[3px] 3xl:pr-[0px] mt-1 lg:pt-[0px] lg:pb-[10px] 3xl:pb-[18px]  ">
                  “Flawless Integration, Happy Customers”
                </p>
                <p className="text-[10px] 3xl:text-[12px] leading-[15px] 3xl:leading-[18px] font-[500] ">
                  &apos;The Quiro system integrates perfectly with our hotel
                  operations. Our customers love the convenience, and so do
                  we!&apos;
                </p>
                <div className="flex justify-between pt-[20px] lg:pb-[30.31px] 3xl:pb-[38px]">
                  <div>
                    <h6 className=" lg:text-[12.73px]   3xl:text-[16px] font-[400]">
                      Uttam
                    </h6>
                    <p className=" lg:text-[12.73px]  3xl:text-[16px] font-[600] text-[#006B66]">
                      uttam zaika
                    </p>
                  </div>
                  <div>
                    <Image
                      src={client11}
                      width={1000}
                      alt="wolimg1"
                      className="sm:w-[70px] lg:w-[51px] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="relative lg:w-[256.82px] 3xl:w-[322px] border-2  lg:translate-y-[94px] 3xl:translate-y-[80px] -translate-x-8 lg:-translate-x-[28px]">
              <Image
                src={wall1}
                width={1000}
                alt="wolimgcus"
                className="absolute  -translate-y-[90px] lg:-translate-y-[100px] z-0"
              />
              <div className="relative z-10 lg:pt-[25px] 3xl:pt-[80px]">
                <div>
                  <Image
                    src={fstars}
                    alt="fstars"
                    className=" lg:w-[151px] 3xl:w-[189px] mx-auto"
                  />
                </div>
                <p className="whitespace-nowrap lg:text-[15.95px] 3xl:text-[20px] font-[600] leading-[30px] lg:pl-[20px] 3xl:pl-[22px] lg:pr-[3px] 3xl:pr-[50px] mt-1">
                  “I Really Appreciate Quiro”
                </p>
                <p className=" text-[10px] 3xl:text-[12px] font-[500] lg:leading-[15px] 3xl:leading-[18px] lg:pl-[17px] 3xl:pl-[22px] lg:pr-[23px] 3xl:pr-[29px] lg:pt-[9.57px] 3xl:pt-[12px] text-center">
                  “The onboarding is seamless—they came, installed QRs & all,
                  and we were live before you know it!”{" "}
                </p>
                <p className="font-[400] lg:text-[12px] 3xl:text-[16px] leading-[24px] text-center lg:pt-[15px] 3xl:pt-[20px]">
                  Nitin,{" "}
                  <span className="font-[600] text-[#006B66]">
                    Hotel Lujo Grand
                  </span>
                </p>
              </div>
            </div>

            {/*  */}
          </div>
          <div className="relative lg:w-[580px] 3xl:w-[730px]">
            <Image src={wolarr} alt="wolarr" width={1000} />
            <div className="absolute 3xl:text-[20px] lg:top-[21px] 3xl:top-[31px] left-1/2 -translate-x-1/2 w-full text-center  ">
              <p className="font-semibold">
                &apos;The Best Partner for Hospitality&apos;
              </p>
              <p className=" lg:text-[10px] 3xl:text-[16px] pt-[20px] 3xl:pt-[20px] pl-[33px] pr-[41px] font-[500] leading-[15px] 3xl:leading-[18px]">
                &apos;The team at Quiro just gets what their partners need. From
                setup to daily use, everything has been smooth and simple!&apos;
              </p>
              <p className="font-[400] lg:text-[12px] 3xl:text-[16px] leading-[24px] text-center lg:pt-[10px] 3xl:pt-[20px]">
                Vikram,{" "}
                <span className="font-[600] text-[#006B66]">
                  Sapphire Suites
                </span>
              </p>
            </div>
            <Image
              src={wall3}
              alt="imggroup"
              width={1000}
              className="absolute top-full lg:w-[386px] 3xl:w-[452px] 3xl:translate-x-1/3 lg:translate-x-1/4 "
            />
          </div>
        </div>

        <div className="w-[26%] flex flex-col items-center justify-center gap-10 p-4 translate-y-24">
          {/*  */}
          <div className="3xl:border-[2px] border-[1.8px] p-4 rounded-xl   border-[#006B66] bg-white relative lg:w-[257px] 3xl:w-[322px] -translate-x-4">
            <Image
              src={client9}
              width={1000}
              alt="wolimg2"
              className="w-full rounded-xl"
            />
            <p className=" font-[600] lg:text-[15px] 3xl:text-[20px] leading-[18px] text-start pb-[0px] lg:pt-[12px] lg:-mb-[4px]  ">
              “Made Our Dining Service Smoother”
            </p>
            <p className=" lg:text-[10px] 3xl:text-[12px] font-[500] lg:leading-[15px] 3xl:leading-[18px] py-2 sm:py-4 w-full ">
              &apos;Quiro&apos;s menu management feature has simplified our
              dining service.&apos;
            </p>

            <p className="absolute billyOhioText lg:text-[19.14px] text-[#006B66]  right-[25.25px] bottom-[10.2px] sm:w-[52px] ">
              Mayank
            </p>
          </div>

          {/*  */}
          <div className="3xl:border-[2px] border-[1.6px] p-4 sm:ml-8 rounded-xl   border-[#006B66] bg-white lg:w-[240px] 3xl:w-[301px] -translate-x-2">
            <Image
              src={client7}
              alt="wolimg1"
              width={70}
              className="mx-auto rounded-full "
            />
            <p className=" text-center py-2">
              <Image
                src={fstars}
                alt="5 stars"
                width={1000}
                className="w-2/3 mx-auto"
              />
            </p>
            <p className=" font-[600] lg:text-[15px] 3xl:text-[20px] leading-[18px] text-center pb-[8px] lg:-mt-[10px] 3xl:pt-[6px] ">
              “Stress-Free Guest Requests”
            </p>
            <p className="lg:text-[10px] leading-[15px] 3xl:leading-[18px]  3xl:text-[14px] 3xl:pt-[12px]  text-center font-[500]">
              &apos;It was difficult to manage guest requests earlier. Quiro
              took the stress out of managing guest requests. It&apos;s so quick
              and easy—exactly what we needed!&apos;
            </p>
            <Image
              src={kamal}
              alt="kamal"
              width={43}
              className="mx-auto my-4"
            />
          </div>
        </div>

        <div className="w-[28%] p-1 flex flex-col items-center gap-6">
          <div className="relative lg:w-[365px]  3xl:w-[458px] pb-1 lg:translate-y-[20px]">
            <Image
              //  wolcusimg3desk <- this was the previous img, it's import is also commented
              src={wall2}
              width={1000}
              alt="wolimgcus"
              className="absolute w-full top-0 left-0"
            />
            <div className="relative z-10 lg:pt-[125px] 3xl:pt-[160px]">
              <div>
                <Image
                  src={fstars}
                  alt="fstars"
                  width={1000}
                  className=" lg:w-[151px] 3xl:w-[189px] mx-auto"
                />
                <p className="font-[600] lg:text-[15px] 3xl:text-[20px] leading-[30px] text-center pb-[0px] lg:-mt-[6px] ">
                  “A Must-Have for Hotels”
                </p>
                <p className="font-[500] lg:text-[10px] 3xl:text-[12px] lg:leading-[15px] 3xl:leading-[18px] text-center px-[32px] pb-[0px] 3xl:pt-[6px]">
                  &quot;Quiro made a big difference right from day one. And the
                  best thing is, it is really easy for the staff to use!&quot;
                </p>
                <p className="font-[400] lg:text-[12px] 3xl:text-[16px] leading-[24px] text-center lg:pt-[4px] 3xl:pt-[6px]">
                  Ananya,{" "}
                  <span className="font-[600] text-[#006B66]">
                  Grand Plaza Inn
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="3xl:border-2 border-[1.6px] border-[#006B66] flex gap-4 relative items-center text-[10px] p-4 lg:mt-[24px]  3xl:mt-[36px] bg-white rounded-2xl lg:w-[365px]  3xl:w-[458px]">
            <div className="w-1/2">
              <Image
                src={client10}
                alt="wolimgcus3desk"
                className="rounded-xl"
              />
            </div>
            <div className="w-1/2">
              <p className="font-[600] lg:text-[15px] 3xl:text-[20px] leading-[18px] text-start pb-[8px] lg:-mt-[20px] ">
                “Incredible Efficiency Boost”
              </p>
              <p className=" lg:text-[10px] 3xl:text-[12px] font-[500] lg:leading-[15px] 3xl:leading-[18px] 3xl:pt-[6px]">
                &apos;The QR-based request system keeps everything organized,
                and guest satisfaction has noticeably increased.&apos;
              </p>
            </div>
            <Image
              src={rajesh}
              alt="rajesh"
              width={1000}
              className="absolute w-11 bottom-[10px] right-[20px]"
            />
          </div>

          <div className="flex pt-[31px] pl-[31px] justify-between bg-white border-[1.6px] 3xl:border-2 border-[#006B66] rounded-2xl  lg:h-[175px] 3xl:h-[220px] lg:w-[365px] 3xl:w-[458px] relative translate-x-4">
            <div className="w-1/2">
              <p className="whitespace-nowrap lg:-mt-[16px] lg:text-[15px] 3xl:text-[20px] font-[600] leading-[30px] lg:pl-[0px] 3xl:pl-[0px] lg:pr-[3px] 3xl:pr-[50px] mt-1">
                “I Really Appreciate Quiro”
              </p>
              <div className=" text-[10px] 3xl:text-[12px] font-[500] lg:leading-[15px] 3xl:leading-[18px] 3xl:pt-[6px]">
                &apos;We used to struggle with order tracking, but Quiro has
                made it effortless. It&apos;s a game-changer for us.&apos;
              </div>
              <div className="text-start lg:text-[15px] 3xl:text-[20px] lg:pt-4 3xl:pt-4">
                <p className="font-[400] lg:leading-[15px] 3xl:leading-[30px]">
                  Pradeep
                </p>
                <p className="text-[#006B66] font-[600] lg:leading-[15px] 3xl:leading-[30px] pt-1">
                  Hotel Pride Inn
                </p>
              </div>
            </div>
            <div className="w-fit pr-[37px]">
              <Image
                src={Pradeep}
                alt="pradeep"
                width={1000}
                className="3xl:w-[142px] 3xl:h-[132px] lg:w-[111px] lg:h-[105px] rounded-full"
              />
            </div>
            <Image
              src={apos2}
              alt="apos2"
              width={1000}
              className=" lg:w-[100px] 3xl:w-[125px] aspect-square absolute bottom-0 right-0 translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallOfLove;
