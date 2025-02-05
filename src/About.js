
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile_About from "./images/profile-about.jpg";

const About = () => {

  const SectionFont = "text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl header font-semibold no-underline pt-60 mb-30";
  const ProjTitle = "text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl header font-normal no-underline";
  const ProjDesc = "text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl header font-normal no-underline";
  
    return (
      <>
        <Header />
        <div className="flex flex-col flex-1">

          {/* Intro */}
          <div className="flex flex-1 items-center mx-40 mt-16">
            <div className="flex flex-1 flex-col gap-3">
              <p className={ProjTitle} >Nice to meet you! <span className={` ${ProjTitle} waving-hand`}>&#128075;</span> </p>
              <p className={ProjDesc}> 
                I’m Kotoe Takeda, a fourth-year Computer Science student at Georgia Tech, graduating in May 2025. 
                I’m passionate about Human-Computer Interaction and human-centered AI. 
                I want to explore the trust concerns that users experience when interacting with these systems, 
                and how they can be designed to be more transparent, reliable, and aligned with human values.  
              </p>
            </div>
            {/* Profile Pic */}
            <div className="flex flex-1 items-center justify-end">
              <img className="object-cover rounded-full w-4/5" src={Profile_About} alt="A picture of me"/>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
  
  export default About;