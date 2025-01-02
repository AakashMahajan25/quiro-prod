"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LogoMain from "@/assets/Logo";
import line from "@/assets/buttonLine.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";
import LineButton from "./LineButton";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const pathname = usePathname(); // Get the current route
  const [activePath, setActivePath] = useState(""); // Local state for active link
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync activePath with pathname whenever pathname changes
  useEffect(() => {
    setActivePath(pathname || ""); // Ensure it sets even if pathname is empty
  }, [pathname]);

  // Ensure activePath updates on link click
  const handleLinkClick = (href: string) => {
    setActivePath(href);
    setIsMenuOpen(false); // Close the menu on link click
  };

  return (
    <div className="flex items-center justify-between px-4 md:px-10 lg:pl-[142px] lg:pr-[160px] w-full top-0 bg-[#F5F3ED] pt-[33px] z-50">
      <div>
        <Link
          href={"/"}
          className="flex items-center gap-[8px] sm:gap-[20px] lg:gap-[10px]"
        >
          <LogoMain />
          <h1 className="text-[#00413E] font-[400] lg:font-[500] text-[16px] leading-[24px] sm:text-[20px] lg:text-[28.2px] sm:leading-[30px] lg:leading-[42.3px] 3xl:text-[40px] 3xl:leading-[60px]">
            Quiro
          </h1>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="xl:hidden z-30 bg-white text-[#00403f] p-2 rounded-[15px]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-20 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 xl:hidden`}
      >
        <div className="flex flex-col p-10 space-y-4">
          {[
            { href: "/aboutus", label: "About us" },
            { href: "/business", label: "For Businesses" },
            { href: "/customers", label: "For Customers" },
            { href: "/pricing", label: "Pricing" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg ${
                activePath === href ? "text-[#00413E] font-bold" : ""
              }`}
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4">
            <Link href={"/form"}>
            <LineButton text="Get Started" />
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <header className="bg-white rounded-full fixed translate-x-1/2 z-20 right-1/2 hidden xl:block w-[550px]">
        <div className="border border-[#00413E] rounded-full p-2 flex">
          {[
            { href: "/aboutus", label: "About us" },
            { href: "/business", label: "For Businesses" },
            { href: "/customers", label: "For Customers" },
            { href: "/pricing", label: "Pricing" },
          ].map(({ href, label }) => (
            <div key={href} className="mr-4">
              <Link href={href} legacyBehavior passHref>
                <div
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-[500] text-[15.34px] leading-[23px] py-2 px-4 rounded-full cursor-pointer",
                    activePath === href
                      ? "text-white bg-[#00413E] hover:bg-[#00413E] hover:text-white"
                      : ""
                  )}
                >
                  {label}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </header>

      <div className="hidden xl:block">
        <Link href={'/form'}>
          <button className="bg-black relative z-50 text-[14.73px] text-white pl-[20px] rounded-[5.52px] flex items-center w-fit leading-[22.1px] pr-[25px] py-[14px]">
            Start for Free <FaLongArrowAltRight className="ml-2 text-white" />
            <Image
              src={line}
              width={100}
              height={0}
              alt="line"
              className="absolute w-full -bottom-2 left-0 px-2"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
