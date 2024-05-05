import React from "react";
import "./index.css";
import image1 from "../../assests/images/Features/cloud.webp";
import image2 from "../../assests/images/Features/realit.webp";
import image3 from "../../assests/images/Features/business.webp";
import image4 from "../../assests/images/Features/adaptive.webp";
import image5 from "../../assests/images/Features/content.webp";
import description from "../../assests/data/constant";
const Keyfeature = () => {
  const showSlider = () => {
    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");

    let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
    let thumbnailItemsDom = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );

    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");

    setTimeout(() => {
      carouselDom.classList.remove("next");
    }, 1000);
  };

  const handleSliderClick = () => {
    showSlider();
  };
  return (
    <>
      <div className="waper  ">
        <div className="waper" onClick={handleSliderClick}>
          <div className="carousel m-auto">
            <div className="list">
              <div className="item">
                <img src={image1} className="" />

                <div className="content">
                  <div className="title">
                    {" "}
                    {description.description.heading1}
                  </div>
                  <div className="topic">
                    {" "}
                    {description.description.Subheading1}
                  </div>
                  <div className="des mt-3">
                    <span className="fw-bold mx-1">
                      {description.description.span1}
                    </span>
                    {description.description.message1}{" "}
                  </div>
                  <br />
                  <div className="des">
                    <span className="fw-bold mx-1">
                      {description.description.subspan1}
                    </span>
                    {description.description.submessage1}
                  </div>
                </div>
              </div>
              <div className="item">
                <img src={image2} className="" />

                <div className="content">
                  <div className="title">
                    {" "}
                    {description.description.heading2}
                  </div>
                  <div className="topic">
                    {" "}
                    {description.description.Subheading2}
                  </div>
                  <div className="des mt-3">
                    <span className="fw-bold mx-1">
                      {description.description.span2}
                    </span>
                    {description.description.message2}{" "}
                  </div>
                  <br />
                  <div className="des">
                    <span className="fw-bold mx-1">
                      {description.description.subspan2}
                    </span>
                    {description.description.submessage2}
                  </div>
                </div>
              </div>
              <div className="item">
                {" "}
                <img src={image3} className="" />{" "}
                <div className="content">
                  <div className="title">
                    {" "}
                    {description.description.heading3}
                  </div>
                  <div className="topic">
                    {" "}
                    {description.description.Subheading3}
                  </div>
                  <div className="des mt-3">
                    <span className="fw-bold mx-1">
                      {description.description.span3}
                    </span>
                    {description.description.message3}{" "}
                  </div>
                  <br />
                  <div className="des">
                    <span className="fw-bold mx-1">
                      {description.description.subspan3}
                    </span>
                    {description.description.submessage3}
                  </div>
                </div>
              </div>
              <div className="item">
                <img src={image4} className="" />

                <div className="content">
                  <div className="title">
                    {" "}
                    {description.description.heading4}
                  </div>
                  <div className="topic">
                    {" "}
                    {description.description.Subheading4}
                  </div>
                  <div className="des mt-3">
                    <span className="fw-bold mx-1">
                      {description.description.span4}
                    </span>
                    {description.description.message4}{" "}
                  </div>
                  <br />
                  <div className="des">
                    <span className="fw-bold mx-1">
                      {description.description.subspan4}
                    </span>
                    {description.description.submessage4}
                  </div>
                </div>
              </div>
              <div className="item">
                <img src={image5} className="" />

                <div className="content">
                  <div className="title">
                    {" "}
                    {description.description.heading5}
                  </div>
                  <div className="topic">
                    {" "}
                    {description.description.Subheading5}
                  </div>
                  <div className="des mt-3">
                    <span className="fw-bold mx-1">
                      {description.description.span5}
                    </span>
                    {description.description.message5}{" "}
                  </div>
                  <br />
                  <div className="des">
                    <span className="fw-bold mx-1">
                      {description.description.subspan5}
                    </span>
                    {description.description.submessage5}
                  </div>
                </div>
              </div>
            </div>

            <div className="thumbnail  mil-p-120-30">
              <div className="item">
                <img src={image1} />
                <div className="content">
                  <div className="title">Cloud</div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="item">
                <img src={image2} className="" />
                <div className="content">
                  <div className="title">Reality </div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="item">
                <img src={image3} className="" />
                <div className="content">
                  <div className="title">Business</div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="item">
                <img src={image4} className="" />
                <div className="content">
                  <div className="title">Adaptive</div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="item">
                <img src={image5} className="" />
                <div className="content">
                  <div className="title">
Content</div>
                  <div className="description">Description</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyfeature;
