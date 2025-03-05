import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute right-20 top-24 md:right-[20%]">
        <Image
          src={"/images/home/hero/flower.png"}
          width={281}
          height={74}
          alt="logo"
          className="w-[450px]"
        />
      </div>
      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white">
        <h1 className="bg-gradient-to-b from-[#FFF500] to-[#343201] bg-clip-text text-center font-open_sans text-8xl font-[600] uppercase text-transparent md:text-9xl">
          NOVA
        </h1>

        <div className="flex flex-col gap-4 pt-4 md:flex-row md:pt-8">
          <Link href={"/table-booking"}>
            <Button
              className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
              variant="image"
            >
              Book Table{" "}
            </Button>
          </Link>
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

export default Hero;
