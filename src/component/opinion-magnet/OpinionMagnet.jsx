import React, { useState } from "react";
import PropTypes from "prop-types";
import "./opinion-magnet.css";
import opinionMagnetCloseImage from "../../assets/images/close.svg";
import opinionMagnetButtonImage from "../../assets/images/feedback.svg";
import OpinionMagnetForm from "../opinion-magnet-form/OpinionMagnetForm";


export default function OpinionMagnet(props) {
    const [modalOpen, setModalOpen] = useState(false)
    const handleClickModal = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <div className="opinionMagnetWrapper">
            <button
                className="opinionMagnetButton"
                type="button"
                onClick={handleClickModal}
                style={{ background: props.styleThemeColor }}
                data-testid="opinionMagnetButton"
            >
                {modalOpen ? (
                    <img src={props.styleCloseButtonImageSrc} />
                ) : (
                    <img src={props.styleOpenButtonImageSrc} />
                )}
            </button>

            {modalOpen && <OpinionMagnetForm {...props} closeModal={handleClickModal} />}

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