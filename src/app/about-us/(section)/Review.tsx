"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#070D0F] pb-8 md:px-20 lg:pb-0">
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-birthstone text-sm font-[400] tracking-[0.76px] text-[#C9AB81] md:text-base">
              Testimonial{" "}
            </span>
            <h6 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
              STORIES FROM OUR <br /> PEOPLE{" "}
            </h6>
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-4">
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none md:basis-1/2"
                  >
                    <div className="flex h-[250px] flex-col gap-6 border border-[#C9AB81] bg-transparent px-6 py-8">
                      <div className="flex w-full justify-center">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-[#C9AB81]"
                            />
                          ),
                        )}
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="line-clamp-6 text-center font-cormorant text-sm font-[500] uppercase text-[#BBB4AA] md:px-4 lg:leading-[120%]">
                          {review.text}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-2">
                      <Image
                        src={
                          review.profile_photo_url ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.author_name}
                      />
                      <p className="text-center font-cormorant text-sm font-[600] uppercase leading-[120%] text-[#BBB4AA]">
                        Gerrin Tom
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#0E171A] text-[#0E171A] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#0E171A] text-[#0E171A] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
