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
    styleFontColor: PropTypes.string,
    styleFormTitle: PropTypes.string,
    styleFormPlaceHolder: PropTypes.string,
};

OpinionMagnet.defaultProps = {
    styleThemeColor: "#5D3FD3",
    styleCloseButtonImageSrc: opinionMagnetCloseImage,
    styleOpenButtonImageSrc: opinionMagnetButtonImage,
    styleFontColor: "#fff",
    styleFormTitle: "Full Fill Form",
    styleFormPlaceHolder: "Enter your comment",
};