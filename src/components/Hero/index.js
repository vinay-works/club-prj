import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <section className="text-white bg-black body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center">
          <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium">
              The <span style={{ color: "#0095d6" }}>Que</span>{" "}
              <span style={{ color: "#0095d6" }}>Club</span>
            </h1>
            <p
              className="mb-8 leading-relaxed text-white font-serif"
              style={{ fontSize: "13px" }}
            >
              We propose the development of a dynamic and user-friendly website
              for a Snooker Club, aiming to create an online platform that
              connects snooker enthusiasts, promotes the club's services, and
              enhances the overall snooker experience. This proposal outlines
              the key features, benefits, and objectives of the website, along
              with an estimated timeline and budget <br />
              <br />
            </p>

            <div className="flex justify-center">
              <button
                className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
                style={{
                  backgroundColor: "#0095d6",
                  hover: { backgroundColor: "#0068a2" },
                }}
              >
                Get Membership
              </button>
            </div>
            <br/>
            <div  >
            <Link
              to={"/Login"}
              className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
            >
              Login
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
