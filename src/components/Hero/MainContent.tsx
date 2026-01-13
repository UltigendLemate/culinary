"use client";
import Image from "next/image";

const MainContent = () => {
  return (
    <div className="flex md:gap-5 flex-col-reverse md:flex-row items-center justify-center md:min-h-[60vh] max-md:min-h-dvh">
      {/* <div className="relative z-[-1] flex justify-center bg-green-300 w-full "> */}
      <div className="flex flex-col items-center justify-center ">
        <Image
          // className="w-full"
          src="/mainlogo.png"
          alt="Culinary League Logo"
          width={350}
          height={350}
          className="max-md:h-72 max-md:mt-4 aspect-square max-md:w-auto"
        />
        {/* <img
          src="/battleOfBesan.png"
          alt="Battle of Besan"
          className=" -mt-4"
          width={400}
          height={200}
        /> */}
        {/* <p className="text-xl text-primary font-medium -mt-6">Second Edition</p> */}
      </div>
      <div className="text-center md:text-2xl md:-mt-5">
        <div className="text-center">
          <img
            src="agropure.png"
            className="md:h-60 h-48 mx-auto w-auto object-cover  "
          />
          <span className="text-base my-1 font-semibold">Presents</span>
        </div>
        <h1 className="heading md:text-6xl text-4xl ">Culinary League 2026</h1>
        <h4 className="font-bold  mt-2">8th August 2026</h4>
        <h4 className="">India Expo Centre & Mart, Greater Noida, NCR</h4>
        {/* <div className="text-lg mt-5 font-semibold">
              Powered By <img src="dkg.jpg" className="h-10 w-auto inline ml-3" alt="" />
            </div> */}
      </div>
    </div>
  );
};

export default MainContent; 