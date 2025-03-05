"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[rgba(255,245,10,0.75)] px-4 pt-12 lg:px-10 lg:pt-24">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-1">
          <div className="w-full border-b-[1px] border-b-[rgba(0,0,0,0.40)] md:w-[45%]" />
          <Link href={"/"}>
            <Image
              src={"/images/home/hero/logo1.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-20 md:w-32"
            />
          </Link>
          <div className="w-full border-b-[1px] border-b-[rgba(0,0,0,0.40)] md:w-[45%]" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start md:gap-16">
          <div className="flex w-full flex-col items-center justify-center gap-8 md:ml-16 md:w-[45%] md:flex-row md:justify-between md:gap-4">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Our Food
              </Link>
              <Link
                href={"/drinks"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Drinks menu{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Private DINING{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                What’s on{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Our policy{" "}
              </Link>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-start">
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Blog{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Press{" "}
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Contact us{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Career{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Find us{" "}
              </Link>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-start">
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Birthday Bookings
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Corporate events
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Christmas parties
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Venue Hire{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                our partnerd{" "}
              </Link>
            </div>
          </div>
          <div className="mr-20 hidden h-[100px] w-full border-r-[1px] border-r-[rgba(0,0,0,0.40)] md:block md:w-[5%]" />
          <div className="flex w-full flex-col items-center justify-center gap-8 md:w-[45%] md:flex-row md:justify-start md:gap-20">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <div>
                <Link
                  href={""}
                  className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#000]"
                >
                  Contact{" "}
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  href={"https://maps.app.goo.gl/pWKGdoWeSDCFZkA56"}
                  target="_blank"
                  className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-start"
                >
                  2 Kendal Ave, London W3 0PA, United Kingdom
                </Link>
                <Link
                  href={"mailto:info@novaparkroyal.com"}
                  className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-start"
                >
                  info@novaparkroyal.com{" "}
                </Link>
                <Link
                  href={"tele:+442035001710"}
                  className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-start"
                >
                  +44 20 3500 1710
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-start">
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Opening hours
              </Link>
              <p className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-start">
                Mon-Thu 6pm-1am
                <br /> Fri 4pm-3am
                <br /> Sat 12pm-3am
                <br /> Sun 12pm-1am
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-3 md:ml-10">
          <Link
            href={"https://www.instagram.com/novaparkroyal/?hl=en"}
            target="_blank"
            className="text-[#000]"
          >
            <Icons.instagram />
          </Link>
          <Link
            href={"https://maps.app.goo.gl/pWKGdoWeSDCFZkA56"}
            target="_blank"
            className="text-[#000]"
          >
            <Icons.google />
          </Link>
          <Link
            href={
              "https://www.tripadvisor.in/Restaurant_Review-g186338-d25077788-Reviews-Nova_Park_Royal-London_England.html"
            }
            target="_blank"
            className="text-[#000]"
          >
            <Icons.unknown />
          </Link>
          <Link
            href={"https://www.facebook.com/Novaparkroyal/"}
            target="_blank"
            className="text-[#000]"
          >
            <Icons.facebook />
          </Link>
        </div>
        <div className="flex flex-col gap-2 pb-10">
          <div className="w-full border-b-[1px] border-b-[rgba(0,0,0,0.40)]" />
          <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-between">
            <span className="text-center font-open_sans text-xs font-[400] uppercase tracking-[2px] text-[#000] md:text-start">
              © 2025 Nova , All Rights Reserved
            </span>

            <Link
              href={"https://foodo.ai"}
              target="_blank"
              className="text-center font-open_sans text-xs font-[400] uppercase tracking-[2px] text-[#000] md:text-start"
            >
              Powerd by foodo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
