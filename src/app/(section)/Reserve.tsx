import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-black py-12 md:py-24">
      <div className="absolute left-0 right-0 top-[22px] z-10 hidden overflow-hidden md:block">
        <h1 className="bg-gradient-to-l from-[#FFF500] to-[#424000] bg-clip-text font-open_sans text-8xl font-semibold uppercase tracking-[-20.511px] text-transparent">
          VaNovaNovaNovaNovaNoNovaNovaNovaNova
        </h1>
      </div>
      <div className="absolute left-0 right-0 top-[100px] z-10 hidden overflow-hidden md:block">
        <h1 className="flex flex-col bg-gradient-to-l from-[#FFF500] to-[#424000] bg-clip-text font-open_sans text-8xl font-semibold uppercase tracking-[-20.511px] text-transparent">
          <span>Ao</span>
          <span>Ao</span>
          <span>Ao</span>
          <span>Ao</span>
          <span>Ao</span>
          <span>Ao</span>
          <span>Ao</span>
        </h1>
      </div>
      <div className="absolute right-[36%] top-[100px] z-10 hidden overflow-hidden md:block">
        <h1 className="flex flex-col bg-gradient-to-l from-[#FFF500] to-[#424000] bg-clip-text font-open_sans text-8xl font-semibold uppercase tracking-[-20.511px] text-transparent">
          <span>Ao</span>
          <span>Ao</span>
          <span>Ao</span>
          <span>Ao</span>
          <span>Ao</span>
          <span>Ao</span>
          <span>Ao</span>
        </h1>
      </div>
      <div className="relative z-50 flex w-full flex-col gap-6 pl-4 pr-4 md:flex-row md:gap-10 md:pl-10 md:pr-0">
        <div className="w-full border border-black bg-black p-4 md:w-[60%] md:p-12">
          <Image
            src={"/images/home/reservation/bg.png"}
            width={960}
            height={754}
            alt="logo"
            className="h-full w-full object-cover"
          />{" "}
        </div>

        <div className="flex w-full flex-col items-center justify-end gap-4 border border-black bg-black px-6 py-12 md:w-[40%] md:gap-8 md:px-12 md:py-28">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="bg-gradient-to-b from-[#FFF500] to-[#1F1E11] bg-clip-text font-birthstone text-2xl font-[400] tracking-[0.76px] text-transparent">
              Reservation{" "}
            </span>
            <h1 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#FFF500] md:text-3xl md:tracking-[10.56px]">
              Reserve <br />
              Your Table
            </h1>
          </div>
          <div>
            <p className="w-full max-w-[480px] text-center font-lora text-sm font-[400] lowercase text-[#9C9E9F] md:text-base">
              Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu
              sm od tempor incididunt ut abore et dolore mag aliqua. Ut enim ad
              minm eniam quis nostrud.
            </p>
          </div>
          <div>
            <Link href={"/table-booking"}>
              <Button
                className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
                variant="imageoutline"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
