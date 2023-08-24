"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () =>{

    }



  return (
    <div className="hero">
      <div className="flex-1 p-36 padding-x">
        <h1 className="hero__title">
            Find or rent a car — easely
        </h1>

        <p className="hero__subtitle">
            Feel your car rental experience
            with our easy rent process!
        </p>

        <CustomButton 
            title="View catalogue"
            containerStyles ="bg-primary-blue
            text-white rounded-full mt-10"
            handleClick ={handleScroll}
        />

      </div>

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.webp" alt="hero" fill
                className="object-container" />


            </div>
        </div>


    </div>
  )
}

export default Hero
