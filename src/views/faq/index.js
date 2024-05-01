import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { FaAngleDown, FaAngleUp, FaMinus, FaPlus } from "react-icons/fa";
import data from "../../assests/data/data";
import "./index.css";


const FAQ = () => {
  return (
    <>
      <div className="black">
        <div className="overlayed">
          <div className="container mil-p-120-09">
            <div className="row justify-content-between">
              <div className="col-lg-5 mil-relative mil-mb-90 px-5">
                <div className="">
                  <span className="ourcors mil-upper mil-light mil-up mil-mb-30">
                    Our Core
                  </span>
                  <h1 className="mil-upper mil-lighter mil-up mil-mb-30">
                    Whole difference
                  </h1>
                  <p className="mil-light-soft mil-up mil-mb-40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua quis ipsum suspendisse ultrices gravida.
                  </p>
                  <a
                    href="services.html"
                    className="mil-link mil-light mil-upper mil-up"
                  >
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mil-arrow"
                    >
                      <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <Accordion transition={{ duration: "1000ms" }}>
                  {data.faq.map((val, i) => (
                    <AccordionItem key={i}>
                      {({ open }) => (
                        <>
                          <AccordionHeader className="accordion_head">
                            {!open ? (
                              <FaPlus className="" />
                            ) : (
                              <FaMinus className="" />
                            )}
                            <div className="px-4">{val.title} </div>
                          </AccordionHeader>
                          <AccordionBody
                            className={`${
                              open ? "accordion_body " : "accordion_body"
                            }`}
                          >
                            {val.message}
                          </AccordionBody>
                        </>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {/ cta /} */}
   
    </>
  );
};

export default FAQ;
