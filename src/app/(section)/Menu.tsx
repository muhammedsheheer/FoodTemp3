import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuData = {
  food: [
    {
      name: "Beef Burger Meal",
      description: "Classic Greek salad, barrel aged feta cheese, bread",
      price: 32,
    },
    {
      name: "Roasted Lamb Rump",
      description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
      price: 25,
    },
    {
      name: "Pan Seared Sea Bass",
      description: "Saffron and mussel's broth, new potatoes, edamame beans",
      price: 38,
    },
    {
      name: "King Prawns and Lobster",
      description: "Creamy saffron, sauce vierge",
      price: 38,
    },
    {
      name: "Citrus Cured Salmon",
      description: "Horseradish crème fraîche, beetroot mousse, oil",
      price: 41,
    },
  ],
  drinks: [
    {
      name: "Pan Seared Scallops",
      description: "Saffron, celeriac purée, black pudding, olive oil",
      price: 29,
    },
    {
      name: "Baked Camembert",
      description: "Red onion marmalade, garlic focaccia bread, grilled figs",
      price: 25,
    },
    {
      name: "Braised Ox Cheek Ravioli",
      description: "Mediterranean olives casserole, celeriac purée, mushrooms",
      price: 23,
    },
    {
      name: "Corn Fed Chicken",
      description: "Wild mushrooms, truffle potatoes, braised leeks, carrots",
      price: 17,
    },
    {
      name: "Nduja Pork Chicken Terrine",
      description: "Smoked duck breast, pistachio, smoked pancetta",
      price: 41,
    },
  ],
};

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 py-12 md:px-24 md:py-20 2xl:px-60">
      <div className="absolute left-0 top-[10%]">
        <Image
          src={"/images/home/menu/left.png"}
          width={281}
          height={74}
          alt="image"
          className="h-[300px] w-full md:h-[650px]"
        />
      </div>
      <div className="absolute right-0 top-[60%] md:top-[8%]">
        <Image
          src={"/images/home/menu/right.png"}
          width={281}
          height={74}
          alt="image"
          className="h-[300px] w-full md:h-[650px]"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-1 md:pb-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#FFF50A]">
              Special selection{" "}
            </span>
            <h6 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#FFF50A] md:text-3xl md:tracking-[10px]">
              From our menu{" "}
            </h6>
          </div>
        </div>

        <div className="mt-6 grid w-full gap-8 md:grid-cols-2 md:gap-20">
          {/* Food Items */}
          <div className="flex flex-col gap-6 md:gap-8">
            {menuData.food.map((item, index) => (
              <div
                key={`food-item-${index}`}
                className="flex w-full flex-row items-center justify-between"
              >
                <div className="flex w-auto flex-col md:w-[500px]">
                  <p className="font-inter text-sm font-[600] uppercase text-[#FFF50A] md:tracking-[3px]">
                    {item.name}
                  </p>
                  <p className="font-inter text-xs font-[300] text-[rgba(255,255,255,0.60)]">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex flex-col gap-0">
                    <div className="h-1 w-[150px] border-b-[1px] border-b-[#715B3E]" />
                    <div className="h-1 w-[150px] border-b-[1px] border-b-[#715B3E]" />
                  </div>
                  <p className="flex font-inter text-sm font-[500] uppercase tracking-[0.57px] text-[#FFF50A]">
                    £{item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Drink Items */}
          <div className="flex flex-col gap-6 md:gap-8">
            {menuData.drinks.map((item, index) => (
              <div
                key={`drink-item-${index}`}
                className="flex w-full flex-row items-center justify-between"
              >
                <div className="flex w-auto flex-col md:w-[500px]">
                  <p className="font-inter text-sm font-[600] uppercase text-[#FFF50A] md:tracking-[3px]">
                    {item.name}
                  </p>
                  <p className="font-inter text-xs font-[300] text-[rgba(255,255,255,0.60)]">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex flex-col gap-0">
                    <div className="h-1 w-[150px] border-b-[1px] border-b-[#715B3E]" />
                    <div className="h-1 w-[150px] border-b-[1px] border-b-[#715B3E]" />
                  </div>
                  <p className="flex font-inter text-sm font-[500] uppercase tracking-[0.57px] text-[#FFF50A]">
                    £{item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 md:pt-8">
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

export default Menu;
