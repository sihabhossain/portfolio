import React from "react";

import heroImg from "../../assets/images/hero.jpg";
import Portfolio from "./Portfolio";
import Skills from "./Skills/Skills";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Sihab Hossain <br />
              MERN Stack Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-smallTextColor text-white font-[500] flex items-center gap-2 hover:bg-primaryColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i> Hire me
                </button>
              </a>
              <a
                href="sihab-hossain-resume(mern).pdf"
                download="Resume.pdf"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
                to={"/portfolio"}
              >
                Download Resume
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span className="text-[20px]">
                <i class="ri-apps-2-line"></i>
              </span>
              I have a strong foundation in JavaScript, HTML, and CSS, and I
              thrive on translating design concepts into functional and
              interactive user interfaces. With a deep understanding of React's
              component-based architecture, I can efficiently develop reusable
              UI components that promote code reusability and maintainability.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow Me:
              </span>

              {/* social */}
              {/* github */}
              <span>
                <a
                  href="https://github.com/sihabhossain"
                  target="_blank"
                  className="text-smallTextColor text-[28px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              {/* Twitter */}
              <span>
                <a
                  href="https://twitter.com/dev_sihab"
                  target="_blank"
                  className="text-smallTextColor text-[28px] font-[600]"
                >
                  <i class="ri-twitter-fill"></i>
                </a>
              </span>
              {/* Linkedin */}
              <span>
                <a
                  href="https://www.linkedin.com/in/sihab-hossain-a46981226/"
                  target="_blank"
                  className="text-smallTextColor text-[28px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* Hero left end */}

          {/* Hero Image */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center ">
              <img className="rounded-full" src={heroImg} alt="" />
            </figure>
          </div>
          {/* Hero Image End */}
        </div>
      </div>

      {/* Portfolio */}
      <Skills></Skills>

      <Portfolio></Portfolio>
    </section>
  );
};

export default Hero;
