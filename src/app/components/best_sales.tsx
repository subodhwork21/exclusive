"use client";
import Image from "next/image";
import Button from "./button";
import ProductItem from "./productItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const BestSales = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-between items-left flex-col px-[135px] gap-[45px] mb-[140px]">
      <div className="flex justify-left items-start flex-col gap-[20px]">
        <div className="flex justify-start items-center gap-[10px]">
          <div className="w-[20px] h-[40px] bg-redsecondary"></div>
          <div className="text-redsecondary font-poppinssemibold text-[16px]">
            This Month
          </div>
        </div>
        <div className="w-full flex justify-between items-center mb-[15px]">
          <div className="flex justify-between items-end w-[600px]">
            <p className="font-interbold text-[36px] font-semibold">
              Best Selling Products
            </p>
          </div>
          <div className="flex justify-end items-start">
            <Button name="View All" bgcolor="bg-redsecondary" />
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center gap-[30px]">
        <Swiper
          className=""
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}

          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <ProductItem
              image={"/images/jacket.png"}
              pname={"The north coat"}
              pricebefore={"$360"}
              priceafter={"$260"}
              ratings={5}
              totalrating={65}
              discount={0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem
              image={"/images/bag.png"}
              pname={"Gucci duffle bag"}
              pricebefore={"$1160"}
              priceafter={"$960"}
              ratings={4.5}
              totalrating={65}
              discount={0}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProductItem
              image={"/images/cooler.png"}
              pname={"RGB liquid CPU Cooler"}
              pricebefore={"$170"}
              priceafter={"$160"}
              ratings={4.5}
              totalrating={65}
              discount={0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem
              image={"/images/bookshelf.png"}
              pname={"Small BookSelf"}
              pricebefore={"$0"}
              priceafter={"$370"}
              ratings={5}
              totalrating={65}
              discount={0}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BestSales;
