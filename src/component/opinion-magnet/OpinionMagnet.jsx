import React, { useState } from "react";
import PropTypes from "prop-types";
import "./opinion-magnet.css";
import opinionMagnetCloseImage from "../../assets/images/close.svg";
import opinionMagnetButtonImage from "../../assets/images/feedback.svg";
import OpinionMagnetForm from "../opinion-magnet-form/OpinionMagnetForm";


export default function OpinionMagnet(props) {
    const [toggle, setToggle] = useState(false)
    const handleClickToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className="opinionMagnetWrapper">
            <button
                className="opinionMagnetButton"
                type="button"
                onClick={handleClickToggle}
                style={{ background: props.styleThemeColor }}
            >
                {toggle ? (
                    <img src={props.styleCloseButtonImageSrc} />
                ) : (
                    <img src={props.styleOpenButtonImageSrc} />
                )}
            </button>

            {toggle && <OpinionMagnetForm {...props} closeForm={handleClickToggle} />}

        </div>

    )
}
OpinionMagnet.propTypes = {
    styleThemeColor: PropTypes.string,
    styleCloseButtonImageSrc: PropTypes.string,
    styleOpenButtonImageSrc: PropTypes.string,
    styleButtonText: PropTypes.string,
    styleFontColor: PropTypes.string,
    styleFormTitle: PropTypes.string,
    styleFormPlaceHolder: PropTypes.string,
    styleRatingTitle: PropTypes.string,
    opinionMagnetBackendUrl: PropTypes.string,
    opinionMagnetAccessToken: PropTypes.string,
    opinionMagnetCompanyId: PropTypes.string,
};

OpinionMagnet.defaultProps = {
    styleThemeColor: "#5D3FD3",
    styleCloseButtonImageSrc: opinionMagnetCloseImage,
    styleOpenButtonImageSrc: opinionMagnetButtonImage,
    styleFontColor: "#fff",
    styleFormTitle: "Give Us Feedback",
    styleFormPlaceHolder: "Your Feedback",
    styleRatingTitle: "Please rate the performance of our services and leave feedback below",
    styleButtonText: "Submit Your Feedback",
    // opinionMagnetBackendUrl: "http://localhost:8080/feedback",
    opinionMagnetBackendUrl: "http://localhost:5005/api/feedback",
    opinionMagnetAccessToken: "8708051fb081adfe10f8aef93a7454e71b49f8e9",
    opinionMagnetCompanyId: "65aed7f81e51a8f7497c29b6",
};