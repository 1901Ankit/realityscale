import React  from "react";
import ArrowSVG from "../../components/arrow";
import { sixthParaData2 } from "../../assests/data/componentdata"; 
import { Link } from "react-router-dom";
const Sixthpara2 = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };


  return (
    <div className="container p-0 events-content">
      <div className="row align-items-center mt-3">
        <div className="col-sm-10 lormips">
          <div className="" style={{ paddingLeft: "40px" }}>
            <h2 className="onbord mb-4">{sixthParaData2.title}</h2>
            <p className="skills_para mb-4">{sixthParaData2.paragraph}</p>
            <Link
              to={sixthParaData2.linkTo}
              onClick={handleClick}
              className="mil-links mil-dark mil-arrow-place mil-up">
              <span className="mil-label mil-upper mil-accent text-grey">
                {sixthParaData2.linkText}
              </span>
              <ArrowSVG className="mil-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sixthpara2;