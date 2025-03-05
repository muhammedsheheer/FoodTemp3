import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-black pt-12 md:pt-24">
      <div className="absolute bottom-0 left-0 hidden md:block">
        <Image
          src={"/images/home/follow/R.png"}
          width={160}
          height={160}
          alt="logo"
          className="h-[350px] w-[150px] object-cover"
        />
      </div>
      <div className="absolute -right-0 bottom-0 z-50 hidden md:block">
        <Image
          src={"/images/home/follow/N.png"}
          width={160}
          height={160}
          alt="logo"
          className="z-50 h-[350px] w-[280px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-8 md:gap-20">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#FFF500]">
            Instagram{" "}
          </span>
          <h6 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#FFF500] md:text-3xl md:tracking-[10px]">
            scroll our stories{" "}
          </h6>
        </div>
        <div className="flex w-full flex-col gap-4 px-4 md:px-[60px] 2xl:px-[120px]">
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="w-full md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              />
              <Link
                href={""}
                target="_blank"
                className="text-md text-center font-open_sans font-[400] uppercase text-[#FFF50A] md:text-xl"
              >
                @novaparkroyal{" "}
              </Link>
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
            <div className="w-full md:w-[50%]">
              {" "}
              <Image
                src={"/images/home/follow/image4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image6.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-[300px] w-full object-cover md:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
