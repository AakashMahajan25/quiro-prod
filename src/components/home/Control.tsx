import React from "react";
import Image from "next/image";
import Link from "next/link";
import control1 from "@/assets/home/control/control1.png";
import control2 from "../../assets/home/control/control2.png";
import control3 from "../../assets/home/control/control3.png";
import control3mobile from "../../assets/home/control/control3mobile.png";
import control1mobile from "../../assets/home/control/control1mobile.png";
import control1tab from "../../assets/home/control/control1tab.png";
import control3tab from "../../assets/home/control/control3tab.png";
import control4 from "../../assets/home/control/control4.png";
import control5 from "../../assets/home/control/control5.png";
import control5desk from "../../assets/home/control/control5desk.png";
import control5mobile from "../../assets/home/control/control5mobile.png";
import control6mobile from "../../assets/home/control/control6mobile.png";
import control6 from "../../assets/home/control/control6.png";
import control7 from "../../assets/home/control/control7.png";

const Control: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:pb-[165px] sm:pb-[118px] pb-[103px] xl:px-22  ">
      <div className="flex flex-col justify-center items-center ">
        <h1 className=" font-[600] text-[20px] px-10  text-center lg:text-[40px] 3xl:text-[48px] sm:text-[24px] sm:leading-[28.8px] lg:leading-[48px] 3xl:leading-[57.6px] relative md:leading-[29px] lg:mb-[15.47px] 3xl:mb-[16px] sm:mb-[0px] mb-[11px]">
          <span className="billyOhioText text-[#006B66] px-10 absolute font-[400] text-[24px] leading-[28.8px] lg:text-[28px] 3xl:text-[36px] lg:leading-[57px] 3xl:leading-[54px] sm:text-[24px] sm:leading-[28.8px]  sm:px-10 lg:-left-6 lg:-top-10 sm:-left-6 left-3 -top-6 ">
            Services
          </span>
          A Product That Puts You in Control
        </h1>
        <p className="font-[500] text-[13px] px-[19px]  text-center leading-[19.5px] lg:text-[16px] 3xl:text-[20px] lg:leading-[24px] 3xl:leading-[30px] sm:pb-[50px] lg:pb-[50.29px] pb-[40px]">
          All-in-one software that helps you take charge of your operations
          and unlock more revenue
        </p>
      </div>
      <div className="px-[24px] sm:px-[28px] lg:mx-[150px] xl:ml-[259px] xl:mr-[252px]   lg:px-0 3xl:w-max-[1155px]">
        {/*Bentou Container  */}
        <div>
          {/* first four 4 card container */}
          <div className="flex gap-[9px] lg:gap-[17.68px] w-full">
            {/* First coloumn */}
            <div className="flex flex-col w-[59.7%] sm:w-[68%] lg:w-[73%] gap-[9px] lg:gap-[17.68px]">
              {/* Control 1 and Control 2 container - flex only on sm and above */}
              <div className="sm:flex sm:gap-[9px] lg:gap-[8.68px]">
                {/* Control 1 mobile */}
                <div className="relative rounded-[6px] lg:rounded-[10px] overflow-hidden h-[120px] lg:h-[184px] 3xl:h-auto min-h-[120px] sm:w-[74%]">
                  {/* Mobile image */}
                  <Image
                    src={control1mobile.src}
                    alt="control background"
                    fill
                    className="absolute sm:hidden top-0 lg:rounded-[10px] left-0 w-full h-full object-cover z-0"
                  />

                  {/* Tablet image */}
                  <Image
                    src={control1tab.src}
                    alt="control background"
                    fill
                    className="absolute hidden sm:block lg:hidden lg:rounded-[10px]  top-0 left-0 w-full h-full  z-0"
                  />
                  {/* Laptop image */}
                  <Image
                    src={control1.src}
                    alt="control background"
                    fill
                    className="absolute hidden lg:block  lg:rounded-[10px]  top-0 left-0 w-full h-full  z-0"
                  />
                  <div className="relative z-10 pl-[13px] lg:pl-[24.11px] 3xl:pl-[30px] pt-[13px] lg:pt-[25.71px] 3xl:pt-[32px]">
                    <div className="absolute right-[11px] top-[11px] lg:right-[38px] lg:top-[25px]">
                      <Link href="/business">
                        <ChevronCircle variant="light" />
                      </Link>
                    </div>
                    {/* Mobile heading */}
                    <h5 className="text-[10px] lg:text-[19.29px] 3xl:text-[24px] lg:leading-[28.8px] sm:hidden lg:block font-[600] leading-[12px] text-[#F5F3ED] pb-[5px] lg:pb-[15px] pr-[36px] lg:pr-[14px]">
                      Services &amp; Order Management
                    </h5>

                    {/* Tab heading */}
                    <h5
                      className="
                    text-[12px]  hidden sm:block lg:hidden font-[600] leading-[12px] sm:leading-[14.4px] text-[#F5F3ED] pb-[5px]  pr-[36px]
                    "
                    >
                      Order &amp; Request Management
                    </h5>
                    <p className="text-[6px] sm:text-[8px] lg:text-[11px] 3xl:text-[13px] font-[500] sm:font-[400] leading-[9px] sm:leading-[12px] lg:leading-[16.5px] 3xl:leading-[19.5px] text-[#F5F3ED] pr-[46px] lg:pr-[82px] lg:pb-[89px]">
                      Guests shouldn&apos;t wait for service. With our system,
                      they can order food or request services instantly via a
                      simple QR code scan—quick, efficient, and hassle-free.
                    </p>
                  </div>
                </div>

                {/* Control 2 - Only visible on sm and above */}
                <div className="hidden sm:block relative rounded-[6px] lg:rounded-[10px] overflow-hidden h-[120px] lg:h-[184px] 3xl:h-auto  min-h-[120px] sm:w-[26%]">
                  <Image
                    src={control2.src}
                    alt="control background"
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-[6px]"
                  />
                  <div className="relative z-10 pt-[6px] lg:pt-[10px]  pl-[4px] lg:pl-[10px] pr-[10px]">
                    <div className="text-[8px]  lg:text-[10px] 3xl:text-[13px] leading-[8px] lg:leading-[10.45px] font-[500] rounded-[6px] py-[2px] px-[6px] xl:px-[2px] flex items-center gap-2 bg-[#F5F3ED] lg:py-[2px] 3xl:py-[4px] lg:pr-[14px] lg:px-[12.86px] 3xl:px-[16px] justify-between lg:mb-[177px]">
                      Qr Based Ordering
                      <Link href="/customers">
                        <ChevronCircle variant="dark" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Control 3 */}
              <div className="relative rounded-[6px] lg:rounded-[10px] overflow-hidden h-[220px] min-h-[234px] sm:min-h-[186px] lg:h-[273px] 3xl:h-[340px]">
                <Image
                  src={control3mobile.src}
                  alt="control background"
                  fill
                  className="absolute sm:hidden top-0 left-0 w-full h-full object-cover z-0"
                />

                <Image
                  src={control3tab.src}
                  alt="control background"
                  fill
                  className="absolute hidden sm:block lg:hidden top-0 left-0 w-full h-full object-cover z-0"
                />
                <Image
                  src={control3.src}
                  alt="control background"
                  fill
                  className="absolute  hidden lg:block top-0 left-0 w-full h-full object-cover z-0"
                />

                <div className="relative z-10 pl-[13px] pt-[13px] lg:pt-[25.71px] 3xl:pt-[30px] lg:pl-[24.11px] 3xl:pl-[30px]">
                  <div className="absolute right-[11px] top-[11px] lg:right-[49.82px] lg:top-[22.5px]">
                    <Link href="/business">
                      <ChevronCircle variant="light" />
                    </Link>
                  </div>
                  <h5 className="text-[10px]  sm:text-[12px] lg:text-[19.29px] 3xl:text-[24px] sm:leading-[14.4px] lg:leading-[23.14px] 3xl:leading-[28.8px] leading-[12px] font-[600] pb-[5px] lg:pb-[12.06px] 3xl:pb-[15px]">
                    Menu management
                  </h5>
                  <p className="text-[6px] sm:text-[8px] lg:text-[13px] leading-[9px] lg:leading-[19.5px] font-[500] pr-[46px] sm:pr-[155px] lg:pr-[175px] lg:pb-[220px]">
                    Update and customise your offerings effortlessly! With
                    Quiro, you can manage your menu in real time, giving guests
                    the most up-to-date options.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="w-[40.3%] sm:w-[32%] lg:w-[27%] flex flex-col gap-[9px]">
              {/* Payment Management - Full height on sm and above */}
              <div className="relative pl-[13px] lg:pl-[24px] 3xl:pl-[30px] lg:pt-[27px] 3xl:pt-[30px] pt-[13px] rounded-[6px] lg:rounded-[10px] overflow-hidden h-[200px] sm:h-[349px] min-h-[243px] sm:min-h-[349px] lg:min-h-[474px]  3xl:h-[591px]">
                <Image
                  src={control4.src}
                  alt="control background"
                  fill
                  className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-[6px]"
                />
                <div className="relative z-10">
                  <div className="absolute right-[8px] lg:right-[27px]  ">
                    <Link href="/business">
                      <ChevronCircle variant="light" />
                    </Link>
                  </div>
                  <h5 className="text-[10px] sm:text-[12px] lg:text-[19.29px] 3xl:text-[24px] leading-[12px] sm:leading-[14.4px] lg:leading-[23.14px] 3xl:leading-[28.8px] font-[600] text-[#F5F3ED] pr-[38px] lg:pr-[108px] pb-[5px] lg:pb-[11px]">
                    Payment Management
                  </h5>
                  <p className="text-[6px] sm:text-[8px] lg:text-[11px] 3xl:text-[13px] sm:leading-[12px] lg:leading-[16.5px] 3xl:leading-[19.5px] leading-[9px] font-[500] text-[#F5F3ED] pr-[23px]  lg:pr-[27.32px] lg:pb-[322px] 3xl:pb-[385px]">
                    Payments made easy and secure! Our platform ensures that
                    transactions are fast, reliable, and seamless, from check-in
                    to checkout.
                  </p>
                </div>
              </div>

              {/* Control 2 - Only visible below sm */}
              <div className="sm:hidden relative rounded-[6px]  overflow-hidden h-[111px] min-h-[111px]">
                <Image
                  src={control2.src}
                  alt="control background"
                  fill
                  className="absolute top-0 left-0 w-full h-full z-0 rounded-[6px]"
                />
                <div className="relative z-10 pt-[6px] pl-[4px] pr-[10px]">
                  <div className="text-[8px]  leading-[8px] font-[500] rounded-[6px] py-[2px] flex items-center justify-between w-full max-w-[120px]  px-[6px] bg-[#F5F3ED]">
                    Qr Based Orderings
                    <Link href="/customers">
                      <ChevronCircle variant="dark" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second row containing single image */}
          <div className="relative rounded-[6px] lg:rounded-[10px] overflow-hidden mt-[9px] lg:mt-[17.68px]  h-[150px] lg:h-[258px] 3xl:h-auto min-h-[150px]">
            <Image
              src={control5.src}
              alt="control background"
              fill
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-[6px] lg:hidden"
            />
            <Image
              src={control5desk.src}
              alt="control background"
              fill
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-[6px] hidden lg:block "
            />
            <div className="relative z-10 pl-[12px] pt-[8px] lg:pl-[30px] lg:pt-[32px]">
              <div className="bg-[#F5F3ED] text-[10px] lg:text-[16.07px] 3xl:text-[20px]  leading-[10px] lg:leading-[16.07px] h-[20px] rounded-[6px] sm:py-3 sm:pr-3 lg:rounded-[10px] flex items-center pl-[6px] lg:pl-[16.56px] mb-[112px] lg:mb-[238px]  mr-[129px] w-fit lg:pr-3 lg:py-6 gap-3">
                Access services through QR
                <Link href="/customers">
                  <ChevronCircle variant="dark" />
                </Link>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="flex pt-[9px] lg:pt-[17.68px] gap-[9px] lg:gap-[17.68px]">
            {/* Left image */}
            <div className="relative rounded-[6px] lg:rounded-[10px] overflow-hidden w-1/2 lg:h-[273.23px] 3xl:h-auto h-[220px] min-h-[220px]">
              <Image
                src={control5mobile}
                alt="control5mobile"
                fill
                className="absolute sm:hidden top-0 left-0 w-full h-full object-cover z-0 rounded-[6px]"
              />
              <Image
                src={control6}
                alt="control5mobile"
                fill
                className="absolute hidden sm:block top-0 left-0 w-full h-full object-cover z-0 rounded-[6px]"
              />
              <div className="relative z-10 p-4">
                <div className="absolute right-[11px] top-[11px] lg:right-[28px] lg:top-[22px]">
                  <Link href="/business">
                    <ChevronCircle variant="light" />
                  </Link>
                </div>
                <h5 className="text-[10px] sm:text-[12px] lg:text-[19.29px] 3xl:text-[24px] leading-[12px] sm:leading-[14.4px] lg:leading-[23.14px] 3xl:leading-[28.8px] font-[600] text-[#F5F3ED] pb-[5px] lg:pb-[15px]">
                  Insights & Analytics
                </h5>
                <p className="text-[6px] sm:text-[8px] lg:text-[11px] 3xl:text-[13px] leading-[9px] sm:leading-[12px] lg:leading-[16.5px] 3xl:leading-[19.5px] font-[500] sm:font-[500] text-[#F5F3ED] pr-[22px] sm:pr-[115px]  lg:pb-[220px]">
                  Make smarter decisions with data-driven insights! Track guest
                  trends, peak times, and service performance to boost revenue
                  and create unforgettable experiences.
                </p>
              </div>
            </div>

            {/* Right image */}
            <div className="relative rounded-[6px] lg:rounded-[10px] overflow-hidden w-1/2 h-[220px] lg:h-[273.23px] 3xl:h-auto min-h-[220px]">
              <Image
                src={control6mobile}
                alt="control5mobile"
                fill
                className="absolute sm:hidden  top-0 left-0 w-full h-full object-cover z-0 rounded-[6px]"
              />
              <Image
                src={control7}
                alt="control5mobile"
                fill
                className="absolute hidden sm:block top-0 left-0 w-full h-full object-cover z-0 rounded-[6px]"
              />
              <div className="relative z-10 p-4">
                <div className="absolute right-[11px] top-[11px] lg:right-[28px] lg:top-[22px]">
                  <Link href="/business">
                    <ChevronCircle variant="light" />
                  </Link>
                </div>
                <h5 className="text-[10px] sm:text-[12px] lg:text-[19.29px] 3xl:text-[24px] leading-[12px] sm:leading-[14.4px] lg:leading-[23.14px] 3xl:leading-[28.8px] font-[600] text-[#F5F3ED] pb-[5px]">
                  Real-Time Dashboard
                </h5>
                <p className="text-[6px] sm:hidden sm:text-[8px] lg:text-[13px] leading-[9px] sm:leading-[12px] lg:leading-[19.5px] font-[500] sm:font-[400]  text-[#F5F3ED] pr-[22px] sm:pr-[66px] lg:pt-1 lg:pb-[220px]">
                  One system. One log-in. Multiple features. Get all the
                  knowledge about your business at one place.
                </p>
                <p className="text-[6px] hidden sm:block sm:text-[8px] lg:text-[11px] leading-[9px] sm:leading-[12px] lg:leading-[19.5px] font-[500] sm:font-[400]  text-[#F5F3ED] pr-[22px] sm:pr-[66px] lg:pt-1 lg:pb-[220px]">
                  Get instant visibility into your operations! Track active,
                  delivered, and canceled orders, monitor request and payment
                  statuses, and keep tabs on total earnings—all in one dynamic,
                  real-time dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronCircle = ({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) => {
  return (
    <div
      className={`w-[18px] lg:w-[35px] h-[18px] lg:h-[35px] scale-90 rounded-full ${
        variant === "light"
          ? "bg-white shadow-[3px_0_0_0_#000]"
          : "bg-black shadow-[3px_0_0_0_#fff]"
      } relative`}
    >
      <div
        className={`absolute scale-50 lg:scale-100 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 ${
          variant === "light" ? "text-black" : "text-white"
        }`}
      >
        &rarr;
      </div>
    </div>
  );
};

export default Control;
