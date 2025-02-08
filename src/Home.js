import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile_Home from "./images/mongolia.jpg";
import Handshake from "./images/robot-human-handshake.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1500, // Animation duration
  easing: 'ease-in-out', // Easing function for smooth effect
  mirror: false,
  once: false, // Ensures the animation runs every time it comes into view
});


const Home = () => {
  const navigate = useNavigate();
  const Skills = "text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[15vw] font-ibm font-black no-underline";

  return (
    <>
      <Header />
      <div className="flex flex-col flex-1 items-center justify-center gap-[20vw] text-center py-[10vh]">
        <div className="flex justify-center items-center h-[80vh] gap-10">
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10vw] font-playfair font-normal" data-aos="fade-right">Kotoe</p>
          <img className="rounded-full w-[20vw]" src={Profile_Home} alt="Profile" />
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10vw] font-playfair font-normal" data-aos="fade-left">Takeda</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-normal no-underline" data-aos="fade-up">
            A developer who understands design
            <br />
            &<br />
            A designer who speaks code
          </p>
        </div>

        <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10vw] font-playfair font-normal" data-aos="fade-up">
          What I do
        </p>

        {/* Skills Section */}
        <div id="skills" className="flex flex-1 flex-col justify-center gap-[5vw] relative w-screen">
          <p className={Skills} data-aos="fade-left">Frontend</p>
          <p className={Skills} data-aos="fade-right">Backend</p>
          <p className={Skills} data-aos="fade-left">UI</p>
          <p className={Skills} data-aos="fade-right">UX</p>
        </div>

        {/* Impact Section */}
        <div className="flex flex-1 gap-[10vw]">
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10vw] font-playfair font-normal" data-aos="fade-up-right">
            My
            <br />
            Impact
          </p>

          {/* SAQ Assistant */}
          <div className="flex flex-1 items-center gap-5 group pt-[20vh] w-[75vh] sm:w-[75vh] md:w-[80vh] lg:w-[85vh] xl:w-[90vh]" onClick={() => navigate("/saq")} data-aos="fade-up-left">
            <div className="flex flex-1 flex-col gap-5 justify-center items-center">
              <img className="object-cover group-hover:rounded-full aspect-square" src={Handshake} alt="A robot and a human shaking hands" />
              <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-playfair font-normal no-underline group-hover:font-semibold">
                Security Assessment Questionnaire (SAQ) Assistant
              </p>
              <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl font-ibm font-normal no-underline">
                A Retrieval-Augmented Generation (RAG)-based generative AI chatbot with customizable functionalities
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
