import React from "react";
import TrustedCard from "./props/TrustedCard";
import user1 from "@/assets/home/trusted/trusteduser1.png";
import client1 from "@/assets/home/trusted/client1.jpeg";
import client2 from "@/assets/home/trusted/client2.jpeg";
import client3 from "@/assets/home/trusted/client3.jpg";
import client4 from "@/assets/home/trusted/client4.jpg";
import client5 from "@/assets/home/trusted/client5.jpg";
import client6 from "@/assets/home/trusted/client6.jpg";
import client7 from "@/assets/home/trusted/client7.jpg";
import client8 from "@/assets/home/trusted/client8.jpg";
const Trusted: React.FC = () => {
  return (
    <div className="lg:pb-[151px] 3xl:pb-[204px] pb-[113px] sm:pb-[135px] mt-[80px] lg:mt-[110px] 3xl:mt-[150px]">
      <h5 className="font-[600] text-[15px] leading-[22.5px] sm:text-[20px] sm:leading-[30px] lg:text-[26px] 3xl:text-[24px] lg:leading-[42px] 3xl:leading-[36px] sm:pb-[50px] pb-[40px] text-center">
        Trusted by the best in the industry
      </h5>

      <div className="flex gap-[17px] lg:gap-[19.51px] 3xl:gap-[23px] sm:gap-[28.2px]  justify-center pl-4">
        <div><TrustedCard company="Hub of Joys" name="Rocky Tomar" img={client2} /></div>
        <div><TrustedCard company="Lujo Grand" name="Nitin Bhardwaj" img={client3} /></div>
        <div className="hidden lg:block"><TrustedCard company="Devpaga Group" name="Pradeep" img={client1} /></div>
      </div>
      <div className="flex gap-[17px] lg:gap-[19.51px] 3xl:gap-[23px] sm:gap-[28.2px]  justify-center my-[21px] lg:my-[30.17px] pr-10">
        <div>  <TrustedCard company="Opulence Group" name="Mayank Bhardwaj" img={client4} /></div>
        <div> <TrustedCard company="Meera Hotels" name="Narendra Singh" img={client5} /></div>
        <div className="hidden"> <TrustedCard company="Arctic Hills" name="Mayank" img={user1} /></div>
      </div>
      <div className="flex gap-[17px] lg:gap-[19.51px] 3xl:gap-[23px] sm:gap-[28.2px]  justify-center pl-4">
        <div><TrustedCard company="AK Residency" name="Vijendra Singh" img={client6} /></div>
        <div><TrustedCard company="Hotel Delight Inn" name="Kamal" img={client7} /></div>
        <div className="hidden lg:block"><TrustedCard company="Arctic Hills" name="Mayank" img={client8} /></div>
      </div>
    </div>
  );
};

export default Trusted;
