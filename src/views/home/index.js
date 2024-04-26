import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TweenMax, Power3 } from "gsap";
import Keyfeature from "../keyfeature";
import About from "../about";
import Business from "../unique";
import Production from "../production";
import TeamSection from "../team";
import FAQ from "../faq";
import Range from "../../components/rngecaroul";
import Multicarousel from "../testimonal";
import Sliderlogo from "../logos";
import logo from "../../assests/images/logo/Reality Scale Logo-04.jpg";
const Home = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation) => rotation + 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // scrolldown

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    console.log("Effect is running!");

    const appearances = document.querySelectorAll(".mil-up");
    console.log("Appearances found:", appearances.length);

    appearances.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 40,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "sine",
          scrollTrigger: {
            trigger: section,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    const scaleImages = document.querySelectorAll(".mil-scale");
    console.log("Scale images found:", scaleImages.length);

    scaleImages.forEach((section) => {
      const value1 = parseFloat(section.getAttribute("data-value-1"));
      const value2 = parseFloat(section.getAttribute("data-value-2"));
      gsap.fromTo(
        section,
        {
          scale: value1,
        },
        {
          scale: value2,
          ease: "sine",
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    if (window.innerWidth > 960) {
      const parallaxImages = document.querySelectorAll(".mil-parallax");
      parallaxImages.forEach((section) => {
        const value1 = parseFloat(section.getAttribute("data-value-1"));
        const value2 = parseFloat(section.getAttribute("data-value-2"));
        gsap.fromTo(
          section,
          {
            y: value1,
          },
          {
            y: value2,
            ease: "sine",
            scrollTrigger: {
              trigger: section,
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    const rotateSections = document.querySelectorAll(".mil-rotate");
    rotateSections.forEach((section) => {
      const value = parseFloat(section.getAttribute("data-value"));
      gsap.fromTo(
        section,
        {
          rotate: 0,
        },
        {
          rotate: value,
          ease: "sine",
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  // /mouse/
  // useEffect(() => {
  //   const cursor = document.querySelector(".mil-ball");

  //   gsap.set(cursor, {
  //     xPercent: -50,
  //     yPercent: -50,
  //   });

  //   const moveCursor = (e) => {
  //     gsap.to(cursor, {
  //       duration: 0.6,
  //       ease: "sine",
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   document.addEventListener("pointermove", moveCursor);

  //   return () => {
  //     document.removeEventListener("pointermove", moveCursor);
  //   };
  // }, []);

  // const handleMouseOver = () => {
  //   gsap.to(".mil-ball", 0.2, {
  //     width: 90,
  //     height: 90,
  //     opacity: 1,
  //     ease: "sine",
  //   });
  // };

  // const handleMouseLeave = () => {
  //   gsap.to(".mil-ball", 0.2, {
  //     width: 20,
  //     height: 20,
  //     opacity: 0.1,
  //     ease: "sine",
  //   });
  // };
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".custom-cursor__cursor");
      const cursorInner = document.querySelector(".custom-cursor__cursor-two");
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorInner.style.left = e.clientX + "px";
      cursorInner.style.top = e.clientY + "px";
    };

    const handleMouseDown = () => {
      const cursor = document.querySelector(".custom-cursor__cursor");
      const cursorInner = document.querySelector(".custom-cursor__cursor-two");
      cursor.classList.add("click");
      cursorInner.classList.add("custom-cursor__innerhover");
    };

    const handleMouseUp = () => {
      const cursor = document.querySelector(".custom-cursor__cursor");
      const cursorInner = document.querySelector(".custom-cursor__cursor-two");
      cursor.classList.remove("click");
      cursorInner.classList.remove("custom-cursor__innerhover");
    };

    const handleLinkHover = (e) => {
      const cursor = document.querySelector(".custom-cursor__cursor");
      cursor.classList.add("custom-cursor__hover");
    };

    const handleLinkLeave = () => {
      const cursor = document.querySelector(".custom-cursor__cursor");
      cursor.classList.remove("custom-cursor__hover");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseover", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      links.forEach((link) => {
        link.removeEventListener("mouseover", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  // progress
  // gsap.to(".mil-progress", {
  //   height: "100%",
  //   ease: "sine",
  //   scrollTrigger: {
  //     scrub: 0.3,
  //   },
  // });
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".mil-progress", {
      height: "100%",
      ease: "sine",
      scrollTrigger: {
        scrub: 0.3,
      },
    });
  }, []);

  // backtotop
  // const btt = document.querySelector(".mil-back-to-top .mil-link");

  // gsap.set(btt, {
  //   x: -30,
  //   opacity: 0,
  // });

  // gsap.to(btt, {
  //   x: 0,
  //   opacity: 1,
  //   ease: "sine",
  //   scrollTrigger: {
  //     trigger: "body",
  //     start: "top -40%",
  //     end: "top -40%",
  //     toggleActions: "play none reverse none",
  //   },
  // });
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const btt = document.querySelector(".mil-back-to-top .mil-link");

    gsap.set(btt, {
      x: -30,
      opacity: 0,
    });

    gsap.to(btt, {
      x: 0,
      opacity: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: "body",
        start: "top -40%",
        end: "top -40%",
        toggleActions: "play none reverse none",
      },
    });
  }, []);

  // menu
  useEffect(() => {
    // This code runs after the component mounts
    document.querySelectorAll(".mil-menu-btn").forEach((element) => {
      element.classList.remove("mil-active");
    });
    document.querySelectorAll(".mil-menu").forEach((element) => {
      element.classList.remove("mil-active");
    });
    document.querySelectorAll(".mil-menu-frame").forEach((element) => {
      element.classList.remove("mil-active");
    });

    // Clone elements
    const arrowPlace = document.querySelector(".mil-arrow-place");
    if (arrowPlace) {
      const arrow = arrowPlace.querySelector(".mil-arrow");
      if (arrow) {
        arrowPlace.appendChild(arrow.cloneNode(true));
      }
    }

    const animation = document.querySelector(".mil-animation");
    if (animation) {
      const dodecahedron = animation.querySelector(".mil-dodecahedron");
      if (dodecahedron) {
        animation.appendChild(dodecahedron.cloneNode(true));
      }
    }

    const linesPlace = document.querySelector(".mil-lines-place");
    if (linesPlace) {
      const lines = linesPlace.querySelector(".mil-lines");
      if (lines) {
        linesPlace.appendChild(lines.cloneNode(true));
      }
    }

    const currentPage = document.querySelector(".mil-current-page");
    if (currentPage) {
      const activeLink = document.querySelector(
        ".mil-main-menu ul li.mil-active > a"
      );
      if (activeLink) {
        currentPage.appendChild(activeLink.cloneNode(true));
      }
    }
  }, []); // Empty array means this effect will only run once after the first render

  return (
    <>
      {/* <div
        className="mil-ball"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <span className="mil-icon-1">
          <svg viewBox="0 0 128 128">
            <path d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2	c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2	L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9	z" />
          </svg>
        </span>
        <div className="mil-more-text">More</div>
        <div className="mil-choose-text">Choose</div>
      </div> */}
      <div class="custom-cursor__cursor"></div>
      <div class="custom-cursor__cursor-two"></div>

      <div class="mil-progress-track">
        <div class="mil-progress"></div>
      </div>
      <div class="mil-menu-frame">
        <div class="mil-frame-top">
          <a href="home-1.html" class="mil-logo">
            R.
          </a>
          <div class="mil-menu-btn">
            <span></span>
          </div>
        </div>

        <div class="container">
          <div class="mil-menu-content">
            <div class="row">
              <div class="col-xl-5">
                <nav class="mil-main-menu" id="swupMenu">
                  {/* <ul>
                    <li class="mil-has-children mil-active">
                      <a href="#.">Homepage</a>
                      <ul>
                        <li>
                          <a href="home-1.html">Landing page</a>
                        </li>
                        <li>
                          <a href="home-2.html">Personal</a>
                        </li>
                        <li>
                          <a href="portfolio-3.html">Portfolio slider</a>
                        </li>
                      </ul>
                    </li>
                    <li class="mil-has-children">
                      <a href="#.">Portfolio</a>
                      <ul>
                        <li>
                          <a href="portfolio-1.html">Grid type 1</a>
                        </li>
                        <li>
                          <a href="portfolio-2.html">Grid type 2</a>
                        </li>
                        <li>
                          <a href="portfolio-3.html">Slider</a>
                        </li>
                      </ul>
                    </li>
                    <li class="mil-has-children">
                      <a href="#.">Services</a>
                      <ul>
                        <li>
                          <a href="services.html">Services List</a>
                        </li>
                        <li>
                          <a href="service.html">Single service</a>
                        </li>
                      </ul>
                    </li>
                    <li class="mil-has-children">
                      <a href="#.">Newsletter</a>
                      <ul>
                        <li>
                          <a href="blog.html">Blog List</a>
                        </li>
                        <li>
                          <a href="publication.html">Publication</a>
                        </li>
                      </ul>
                    </li>
                    <li class="mil-has-children">
                      <a href="#.">Other pages</a>
                      <ul>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </li>
                  </ul> */}
                </nav>
              </div>
              <div class="col-xl-7">
                <div class="mil-menu-right-frame">
                  <div class="mil-animation-in">
                    <div class="mil-animation-frame">
                      <div
                        class="mil-animation mil-position-1 mil-scale"
                        data-value-1="2"
                        data-value-2="2"
                      ></div>
                    </div>
                  </div>
                  <div class="mil-menu-right">
                    <div class="row">
                      <div class="col-lg-8 mil-mb-60">
                        <h6 class="mil-muted mil-mb-30">Projects</h6>

                        <ul class="mil-menu-list">
                          <li>
                            <a href="project-1.html" class="mil-light-soft">
                              Interior design studio
                            </a>
                          </li>
                          <li>
                            <a href="project-2.html" class="mil-light-soft">
                              Home Security Camera
                            </a>
                          </li>
                          <li>
                            <a href="project-3.html" class="mil-light-soft">
                              Kemia Honest Skincare
                            </a>
                          </li>
                          <li>
                            <a href="project-4.html" class="mil-light-soft">
                              Cascade of Lava
                            </a>
                          </li>
                          <li>
                            <a href="project-5.html" class="mil-light-soft">
                              Air Pro by Molekule
                            </a>
                          </li>
                          <li>
                            <a href="project-6.html" class="mil-light-soft">
                              Tony's Chocolonely
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-lg-4 mil-mb-60">
                        <h6 class="mil-muted mil-mb-30">Useful links</h6>

                        <ul class="mil-menu-list">
                          <li>
                            <a href="#." class="mil-light-soft">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a href="#." class="mil-light-soft">
                              Terms and conditions
                            </a>
                          </li>
                          <li>
                            <a href="#." class="mil-light-soft">
                              Cookie Policy
                            </a>
                          </li>
                          <li>
                            <a href="#." class="mil-light-soft">
                              Careers
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mil-divider mil-mb-60"></div>
                    <div class="row justify-content-between">
                      <div class="col-lg-4 mil-mb-60">
                        <h6 class="mil-muted mil-mb-30">Canada</h6>

                        <p class="mil-light-soft mil-up">
                          71 South Los Carneros Road, California
                          <span class="mil-no-wrap">+51 174 705 812</span>
                        </p>
                      </div>
                      <div class="col-lg-4 mil-mb-60">
                        <h6 class="mil-muted mil-mb-30">Germany</h6>

                        <p class="mil-light-soft">
                          Leehove 40, 2678 MC De Lier, Netherlands{" "}
                          <span class="mil-no-wrap">+31 174 705 811</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mil-curtain"></div>
      <div class="mil-frame">
        <div className="mil-frame-top">
          <a href="#" className="mil-logo">
            <img src={logo} style={{ width: "40%" }} />
          </a>
          <div className="mil-menu-btn">
            <span></span>
          </div>
        </div>
        <div class="mil-frame-bottom">
          <div class="mil-current-page"></div>
          <div class="mil-back-to-top">
            <a href="#top" class="mil-link mil-dark mil-arrow-place">
              <span className="text-grey">Back to top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="mil-slider-arrow mil-revi-next mil-arrow-place"
              >
                <path
                  d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"
                  fill="#000000"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mil-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame">
            <div
              className="mil-animation mil-position-1 mil-scale"
              data-value-1="7"
              data-value-2="1.6"
              style={{
                transform: "translate3d(0px, 0px, 0px) scale(2.5178, 2.5178)",
              }}
            >
              <div className="mil-dodecahedron">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="mil-pentagon">
                    {[...Array(5)].map((_, index) => (
                      <div key={index}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="mil-animation mil-position-2 mil-scale"
              data-value-1="4"
              data-value-2="1"
              style={{
                transform: "translate3d(0px, 0px, 0px) scale(1.2836, 1.2836)",
              }}
            >
              <div className="mil-dodecahedron">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="mil-pentagon">
                    {[...Array(5)].map((_, index) => (
                      <div key={index}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="mil-animation mil-position-3 mil-scale"
              data-value-1="1.2"
              data-value-2=".1"
              style={{
                transform: "translate3d(0px, 0px, 0px) scale(0.4716, 0.4716)",
              }}
            >
              <div className="mil-dodecahedron">
                {[...Array(12)].map((_, index) => (
                  <div className="mil-pentagon" key={index}>
                    {[...Array(5)].map((_, i) => (
                      <div key={i}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mil-gradient"></div>

          <div className="container">
            <div
              className="mil-banner-content mil-up"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <h1 className="mil-muted mil-mb-10">
                Designing <span className="mil-thin">a Better</span>
                <br /> World <span className="mil-thin">Today</span>
              </h1>
              <div className="row">
                <div className="col-md-7 col-lg-5">
                  <p className="mil-light-soft mil-mb-60">
                    Welcome to our world of endless imagination and boundless
                    creativity. Together, let's embark on a remarkable journey
                    where dreams become tangible realities.
                  </p>
                </div>
              </div>
              <a href="#" className="mil-button mil-arrow-place mil-btn-space">
                <span> Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mil-arrow"
                >
                  <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                </svg>
              </a>
              <a href="#" className="mil-link mil-muted mil-arrow-place">
                <span>What we do</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mil-arrow"
                >
                  <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                </svg>
              </a>
              <div className="mil-circle-text">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 300 300"
                  enableBackground="new 0 0 300 300"
                  xmlSpace="preserve"
                  className="mil-ct-svg mil-rotate"
                  data-value="360"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform:
                      "translate3d(0px, 0px, 0px) rotate(159.782deg) scale(2, 2)",
                  }}
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    ></path>
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none"></circle>
                  <g>
                    <use xlinkHref="#circlePath" fill="none"></use>
                    <text style={{ letterSpacing: "6.5px" }}>
                      <textPath xlinkHref="#circlePath">
                        Scroll down - Scroll down -{" "}
                      </textPath>
                    </text>
                  </g>
                </svg>
                <a
                  href="#about"
                  className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"
                >
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
          </div>
        </div>
      </div>

      <Sliderlogo />

      <About />
      <Range />
      <Keyfeature />
      {/* <TeamSection /> */}
      <Multicarousel />
      <Business />
      <Production />
      <FAQ />
    </>
  );
};
export default Home;