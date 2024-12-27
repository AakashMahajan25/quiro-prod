import React from "react";
import Image from "next/image";
import arrowmobile from "@/assets/home/arrowmobile.png";
import magicarraow from "@/assets/magicArrow.png";
import laparrow from "@/assets/laparrow.png";
import magicarrowtab from "@/assets/home/magicarrtab.png";
import "./styles/playtowatch.css";

const PlayToWatch: React.FC = () => {
  return (
    <div  className="bg-[#F3CCE7] custom-ptw-box  px-20 pt-10 lg:pt-20 sm:p-10  flex flex-col items-center justify-center sm:justify-start sm:items-start sm:relative sm:min-h-[50vh] lg:min-h-[80vh] ">
      {/* Mobile Images */}
      <div className="sm:hidden"  >
        <h1 className="text-[20px] font-[600] leading-[24px] min-w-[211px]">
          Hit Play to Watch the
        </h1>
        <p className="billyOhioText text-[#006B66] pt-1 text-[24px] font-[400] leading-[28.8px] w-fit mx-auto -translate-x-4">
          Magic.
        </p>
      </div>
      <Image
        src={arrowmobile}
        alt="arrow mobile"
        width={120}
        height={205}
        className="-translate-x-1 -translate-y-6 sm:hidden"
      />

      {/* Tablet and Desktop Screens */}
      <div className="sm:flex w-full ">
        <div className="w-[70vw] sm:w-[50vw] lg:w-[52vw] custom-ptw-content  ">
          <h1 id="demo"  className="font-[600] text-[20px] leading-[24px] w-[273px] xl:pl-32 sm:w-[264px] sm:pb-[6px] lg:w-full lg:text-[40px] 3xl:text-[48px] lg:leading-[57.6px] hidden sm:block">
            Hit Play to Watch the{" "}
            <span  className="billyOhioText text-[#006B66] text-[24px] leading-[28.8px] lg:text-[40px] 3xl:text-[48px] lg:leading-[76.8px] font-[400]">
              Magic.
            </span>
          </h1>
          <p  className="text-[12px] leading-[18px] w-[273px] sm:w-[254px]  xl:px-32  lg:w-full  lg:text-[15px] 3xl:text-[18px] font-[500] lg:leading-[22.5px] 3xl:leading-[27px] hidden sm:block ptw-desc">
            Explore how Quiro&apos;s management software transforms your
            operations in just 2 minutes. Experience faster order processing,
            instant guest request handling, and automated payment solutions.
            Watch now to see the magic unfold
          </p>
        </div>
        <div
          className="w-2/3 max-w-[620px] sm:translate-x-4 lg:-translate-x-10 custom-iframe-box-desk  items-center justify-center  hidden sm:block bg-center bg-cover mt-6 p-4 lg:p-8 -translate-y-10"
          style={{
            minWidth: "140px",
          }}
        >
          <iframe
            className="w-full max-w-[530px] lg:max-w-full h-auto aspect-video p-2 rounded-3xl relative z-50"
            src="https://www.youtube.com/embed/fMWJF6H-BrY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Image
        src={magicarrowtab}
        alt="magic arrow"
        width={500}
        className="hidden sm:block absolute left-0 -bottom-10 w-[63vw] h-[500px] lg:hidden custom-magic-arrow-tab"
       
      />

      <Image
      
        src={laparrow}
        alt="magic arrow"
        width={900}
        className="absolute lg:w-[50vw] lg:h-[700px] xl:w-[54vw] xl:h-[800px] left-0 lg:-bottom-44 xl:-bottom-52 hidden  lg:block 3xl:hidden custom-magic-arrow "
      />

      {/* Magic arrow for desktop */}
      <Image
      
        src={magicarraow}
        alt="magic arrow"
        width={900}
        className="absolute lg:w-[60vw] lg:h-[700px] xl:w-[54vw] xl:h-[840px] left-0 lg:-bottom-44 xl:-bottom-52 hidden  3xl:block custom-magic-arrow z-0 "
      />

      {/* Video player with frame */}
      <div
      
        className="w-full max-w-[720px] flex items-center justify-center min-w-[240px] sm:hidden  bg-center bg-cover  p-4 -translate-y-10 rounded-3xl"
        style={{
          minWidth: "340px",
        }}
      >
        <video
        
          className="w-full max-w-[530px] min-w-[200px] h-auto aspect-video p-2 rounded-3xl relative z-40"
         src="/videos/comingsoon.mp4"
          title="YouTube video player"
          controls
        ></video>
      </div>
    </div>
  );
};

export default PlayToWatch;
