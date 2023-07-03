import React from "react";
import "./Skills.css";
import { MdVerified } from "react-icons/md";

const Skills = () => {
  return (
    <section className="container skills section" id="skills">
      <h2 className="text-[40px] font-[700] flex items-center justify-center">
        Skills
      </h2>
      <span className="text-gray-600 text-[20px] flex items-center justify-center">
        My technical expertise
      </span>

      {/* skills box */}
      <div className="md:flex items-center justify-center gap-12 mt-14 sm:flex-col md:flex-row">
        {/* Technical Skills */}
        <div className="max-w-[550px] max-h-[350] p-16 border-[2px] hover:bg-slate-50 border-gray-200 rounded-3xl">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl mb-4">Technical Skills</h1>
          </div>

          <div className="flex items-center justify-center gap-12 ">
            <div>
              <div className="my-3 flex ">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">HTML</h2>
                  <span className="text-gray-500">Basic</span>
                </div>
              </div>

              <div className="my-3 flex">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">TailwindCSS</h2>
                  <span className="text-gray-500">Intermediate</span>
                </div>
              </div>

              <div className="my-3 flex">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">JavaScript</h2>
                  <span className="text-gray-500">Intermediate</span>
                </div>
              </div>
            </div>

            <div>
              <div className="my-3 flex">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">ExpressJS</h2>
                  <span className="text-gray-500">Basic</span>
                </div>
              </div>

              <div className="my-3 flex">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">ReactJS</h2>
                  <span className="text-gray-500">Advanced</span>
                </div>
              </div>

              <div className="my-3 flex">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">MongoDB</h2>
                  <span className="text-gray-500">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tools */}
        <div className="max-w-[550px] max-h-[350] p-16  border-[2px]  hover:bg-slate-50 border-gray-200 rounded-3xl">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl mb-4">Tools</h1>
          </div>
          <div className="flex items-center justify-center gap-12 ">
            <div>
              <div className="my-3 flex ">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">VS Code</h2>
                  <span className="text-gray-500">Intermediate</span>
                </div>
              </div>

              <div className="my-3 flex">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">Git & GitHub</h2>
                  <span className="text-gray-500">Intermediate</span>
                </div>
              </div>

              <div className="my-3 flex">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">Netlify|Vercel</h2>
                  <span className="text-gray-500">Intermediate</span>
                </div>
              </div>
            </div>

            <div>
              <div className="my-3 flex">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">Figma|Canva</h2>
                  <span className="text-gray-500">Intermediate</span>
                </div>
              </div>

              <div className="my-3 flex">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">Firebase</h2>
                  <span className="text-gray-500">Intermediate</span>
                </div>
              </div>

              <div className="my-3 flex">
                <div>
                  <MdVerified className="h-[25px] w-[25px] mr-3"></MdVerified>
                </div>
                <div>
                  <h2 className="text-2xl">Dev Tools</h2>
                  <span className="text-gray-500">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
