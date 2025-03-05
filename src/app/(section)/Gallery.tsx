import Image from "next/image";
import React from "react";

const Gallery: React.FC = () => {
  return (
    <section className="h-full w-full bg-black py-12 md:py-24">
      <div className="flex flex-col gap-10 md:gap-24">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="bg-gradient-to-b from-[#FFF500] to-[#1F1E11] bg-clip-text font-birthstone text-2xl font-[400] tracking-[0.76px] text-transparent">
            gallery{" "}
          </span>
          <h1 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#FFF500] md:text-3xl md:tracking-[10.56px]">
            from our archives{" "}
          </h1>
        </div>
        <div className="flex w-full flex-col bg-[#FFF500] bg-opacity-70 pl-4 pr-4 md:flex-row md:pl-28 md:pr-0">
          <div className="grid w-full grid-cols-1 gap-4 bg-black px-4 md:w-[55%] md:grid-cols-2">
            <Image
              src={"/images/home/gallery/image1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image4.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[350px]"
            />
          </div>
          <div className="flex w-full flex-col gap-2 md:w-[45%]">
            <h1 className="text-end font-open_sans text-7xl font-[600] uppercase text-[#403D00] md:text-8xl">
              NovaNo
            </h1>
            <h1 className="text-end font-open_sans text-7xl font-[600] uppercase text-[#403D00] md:text-8xl">
              NovaNov
            </h1>
            <h1 className="text-end font-open_sans text-7xl font-[600] uppercase text-[#403D00] md:text-8xl">
              NovaNovA
            </h1>
            <h1 className="text-end font-open_sans text-7xl font-[600] uppercase text-[#403D00] md:text-8xl">
              NovaNovAN
            </h1>
            <h1 className="text-end font-open_sans text-7xl font-[600] uppercase text-[#403D00] md:text-8xl">
              NovaNovAN
            </h1>
            <h1 className="text-end font-open_sans text-7xl font-[600] uppercase text-[#403D00] md:text-8xl">
              NovaNovAN
            </h1>
            <h1 className="text-end font-open_sans text-7xl font-[600] uppercase text-[#403D00] md:text-8xl">
              NovaNovAN
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
