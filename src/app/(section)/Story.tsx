import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-black">
      <div className="absolute bottom-[240px] right-0 z-50 hidden md:block">
        <Image
          src={"/images/home/follow/N.png"}
          width={160}
          height={160}
          alt="logo"
          className="z-50 h-[280px] w-[200px] object-cover"
        />
      </div>
      <div className="absolute bottom-[240px] right-3 z-50 hidden md:block">
        <Image
          src={"/images/home/story/n.png"}
          width={160}
          height={160}
          alt="logo"
          className="z-50 h-[280px] w-[200px] object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="bg-gradient-to-b from-[#FFF500] to-[#1F1E11] bg-clip-text font-birthstone text-2xl font-[400] tracking-[0.76px] text-transparent">
            Our story
          </span>
          <h1 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#FFF500] md:text-3xl md:tracking-[10.56px]">
            The heart behind the plate
          </h1>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:px-0">
          <div className="absolute -left-8 top-6 hidden md:block">
            <Image
              src={"/images/home/story/r.png"}
              width={281}
              height={74}
              alt="r"
              className="z-50 h-[280px] w-[200px] object-cover"
            />
          </div>
          {/* <h1 className="hidden font-open_sans text-[350px] font-[600] text-[#FFF500] md:block">
            R
          </h1> */}
          <Image
            src={"/images/home/follow/R.png"}
            width={160}
            height={160}
            alt="logo"
            className="hidden h-[280px] w-[200px] object-cover md:block"
          />
          <p className="w-full max-w-[350px] text-center font-lora text-sm font-[400] lowercase text-[#9C9E9F] md:text-start md:text-base">
            Welcome to Nova, where gastronomy meets entertainment for an
            unparalleled experience in Park Royal! At Nova, we invite you to
            enjoy the finest steaks and sushi whilst you enjoy the lively
            atmosphere as we host live music and DJ nights, ensuring that your
            dining experience is not just a meal but a celebration. Nova is your
            ultimate destination for those seeking a perfect blend of exquisite
            cuisine and vibrant entertainment. Join us, and let Nova in Park
            Royal redefine your expectations of gastronomic delight and
            nightlife.
          </p>
          <Image
            src={"/images/home/story/image.png"}
            width={281}
            height={74}
            alt="image"
            className="h-[300px] w-full md:h-[330px]"
          />
        </div>
        <div>
          <Link href={"/menu"}>
            <Button
              className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
              variant="imageoutline"
            >
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Story;
