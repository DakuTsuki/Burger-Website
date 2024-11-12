import Image from "next/image";
import React from "react";
import DevliveryImg from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-col-1 lg:grid-cols-2 gap-[3rem]">
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-once="false"
          data-aos-mirror="true"
          data-aos-anchor-placement="top-center"
        >
          <Image src={DevliveryImg} alt="delivery" />
        </div>
        {/* text Content */}
        <div>
          <h1 className="text-[30px] md:text-40px] lg:text-[50px] xl-[60px] font-bold leading-[3rem] md:leading-[4rem] uppercase">
            {" "}
            Your <span className="text-red-600">Favourtie Burger</span> on the
            way
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, minus
            corporis obcaecati laborum sit vero ad rem, natus culpa nobis iusto
            autem, libero aliquid doloribus. Provident reiciendis necessitatibus
            placeat quos!
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />

            <h1 className="text-[18px] text-black font-medium">
              Delivery in 30 Minutes
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />

            <h1 className="text-[18px] text-black font-medium">
              Free shipping
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />

            <h1 className="text-[18px] text-black font-medium">
              Delivery on your doorstep
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
