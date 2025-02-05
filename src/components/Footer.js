import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  const FooterFont = "text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl header font-normal no-underline text-stone-950";

  return (
    <div className="flex justify-center items-center gap-7 pt-60">
        <p className={FooterFont} >Reach out to me here</p>
        <p className={FooterFont} >&mdash;</p>
        {/* Email Icon with Link */}
        <a href="mailto:kotoetakeda0116@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail className={FooterFont}/>
        </a>

        {/* LinkedIn Icon with Link */}
        <a href="https://www.linkedin.com/in/kotoetakeda/" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin className={FooterFont}/>
        </a>

        {/* GitHub Icon with Link */}
        <a href="https://github.com/kotoetakeda" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub className={FooterFont}/>
        </a>
    </div>
  );
};

export default Footer;
