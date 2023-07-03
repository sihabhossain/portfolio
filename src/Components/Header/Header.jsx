import React, { useEffect, useRef } from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] hidden md:block  leading-[80px]  items-center sticky__header ">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-smallTextColor text-white text-[18px] font-[500px] rounded-full flex items-center justify-center">
              S
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Sihab</h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                personal
              </p>
            </div>
          </div>

          {/* Logo End */}

          {/* Menu Start */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Menu End */}

          {/* Menu Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sihab-hossain-a46981226/"
              target="_blank"
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
            >
              <i class="ri-send-plane-line"></i> Let's Talk
            </a>

            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/* Menu Right End */}
        </div>
      </div>
    </header>
  );
};

export default Header;
