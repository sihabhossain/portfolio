import React, { useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";
import Contact from "./Contact";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };
  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My Recent Projects
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {data?.map((portfolio, index) => {
            return (
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="group max-w-full sm:w-[48.5%] md:w-[48.8%] lg:w-[48.8%] relative z-[1]"
              >
                <figure>
                  <img
                    className="rounded-[8px]"
                    src={portfolio.imgUrl}
                    alt=""
                  />
                </figure>

                <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                  <div className="w-full h-full flex items-center justify-center">
                    <button
                      onClick={() => showModalHandler(portfolio.id)}
                      className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showModal && (
        <Modal setShowModal={setShowModal} activeID={activeID}></Modal>
      )}

      {/* Contact */}
      <Contact></Contact>
    </section>
  );
};

export default Portfolio;
