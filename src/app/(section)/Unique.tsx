import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Unique: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-black py-12 md:py-28">
      <div className="absolute right-12 top-[200px] hidden md:block">
        <Link href={"/menu"}>
          <Button
            className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
            variant="imageoutline"
          >
            View Menu
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="bg-gradient-to-b from-[#FFF500] to-[#1F1E11] bg-clip-text font-birthstone text-2xl font-[400] tracking-[0.76px] text-transparent">
            Our story
          </span>
          <h1 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#FFF500] md:text-3xl md:tracking-[10.56px]">
            What makes us unique{" "}
          </h1>
        </div>{" "}
        <div className="flex flex-col items-center justify-center px-4 md:px-0">
          <p className="w-full max-w-[570px] text-center font-lora text-sm font-[400] lowercase text-[#9C9E9F] md:text-base">
            We blend Mediterranean elegance with bold Pan-Asian flavours,
            crafting innovative sushi and premium seafood dishes using the
            finest ingredients. Every bite offers a perfect balance of
            tradition, freshness, and unforgettable taste.
          </p>
        </div>
        <div className="flex items-center justify-center md:hidden">
          <Link href={"/menu"}>
            <Button
              className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
              variant="imageoutline"
            >
              View Menu
            </Button>
          </Link>
        </div>
        <div className="flex w-full flex-col gap-4 px-4 md:flex-row md:px-24">
          <div className="w-full md:w-[35%]">
            <Image
              src={"/images/home/story/image.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[450px]"
            />
          </div>
          <div className="hidden w-full md:block md:w-[30%]">
            <div className="relative h-full w-fit">
              {Array.from({ length: 6 }).map((_, index) => (
                <h1
                  key={index}
                  className="absolute -top-4 left-[4px] bg-gradient-to-b from-[#FFF500] to-[#343201] bg-clip-text text-center font-open_sans text-8xl font-[600] uppercase text-transparent md:text-9xl"
                  style={{ top: `${index * 68}px` }} // Adjusts overlap spacing
                >
                  NOVA
                </h1>
              ))}
            </div>
          </div>

          <div className="hidden w-full md:block md:w-[35%]">
            <Image
              src={"/images/home/story/image.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
