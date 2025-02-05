import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile_Home from "./images/profile-home.jpeg";
import Handshake from "./images/robot-human-handshake.jpg";

const Home = () => {
  // padding: 0, 1, 2, 4, 8, 12, 16, 20, 24, 32, etc.
  const IntroFont = "text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl header font-normal no-underline";
  const IntroSpace = "min-h-[30vh] sm:min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh] xl:min-h-[60vh]";
  const SectionFont = "text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl header font-normal no-underline";
  const ProjTitle = "text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl header font-normal no-underline group-hover:font-semibold";
  const ProjDate = "text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl header font-normal no-underline";
  const ProjDesc = "text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl header font-normal no-underline";

  const navigate = useNavigate();


  return (
    <>
      <Header />
      <div className="flex flex-col flex-1">
        {/* Intro */}
        <div className= {`flex flex-1 items-end justify-start pt-40 pb-24`}>
          <p className={IntroFont}>
            <b>I'm Kotoe</b> &mdash; a developer who understands design, and a designer who speaks code
          </p>
        </div>

        {/* Profile Pic */}
        <div className="flex flex-1 w-[80vw] items-center justify-end">
          <img className="object-cover rounded-full" src={Profile_Home} />
        </div>

        {/*************/}
        {/* Impact */}
        <div className="flex flex-1 justify-center pt-60 py-32">
          <p className={SectionFont}>My Impact</p>
        </div>
        
        {/* SAQ Assistant */}
        <div className="flex flex-1 items-center gap-5 group" onClick={() => navigate("/saq")}>
          <div className="flex flex-1 flex-col gap-5">
            <p className={ProjTitle} >Security Assessment Questionnaire (SAQ) Assistant</p>
            <p className={ProjDate}><i>Jun 2024 - Aug 2024</i></p>
            <p className={ProjDesc}>A Retrieval-Augmented Generation (RAG)-based generative AI chatbot with customizable functionalities</p>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <img className="object-cover group-hover:rounded-full" src={Handshake} alt="A robot and a human shaking hands"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
