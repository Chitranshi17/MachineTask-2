import React from "react";
import CountdownRedirect from "../Components/CountDown";

const Home = () => {
  return (
    <>
      <div
        className="xl:w-full xl:h-[87vh] bg-blue-50 flex items-center justify-center
        md:w-full md:h-[87vh] lg:w-full lg:h-[87vh]
        sm:w-full sm:h-[87vh]
        xs:w-full xs:h-[87vh]
       "
      >
        <div>
          <div className=" h-[15rem] flex items-center justify-around flex-col">
            <h3 className="text-center text-5xl font-bold text-black">
              Welcome to the Our{" "}
              <span className="text-bold text-red-500">CardDisplay</span>
              Website.
            </h3>
            <div className="xl:w-[50%] xl:h-[50%] flex items-cemter justify-center md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] sm:w-[50%] sm:h-[50%] xs:w-[50%] xs:h-[50%] ">
              <img src="./Spinner.gif" alt="noImg" />
            </div>
          </div>
        </div>
      </div>
      <CountdownRedirect seconds={5} targetUrl="/product" />
    </>
  );
};

export default Home;
