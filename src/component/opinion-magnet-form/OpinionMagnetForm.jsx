import React, { useState } from 'react'
import "./opinion-magnet-form.css";
import { Rating } from 'react-simple-star-rating';
import axios from 'axios';


function OpinionMagnetForm(props) {
    const { styleThemeColor,
        styleFontColor,
        styleFormTitle,
        styleFormPlaceHolder,
        styleRatingTitle,
        styleButtonText,
        opinionMagnetBackendUrl,
        opinionMagnetAccessToken,
        opinionMagnetCompanyId } = props;
    const [rating, setRating] = useState(0)
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState(" ");
    const [formResponseMessage, setResponseMessage] = useState(" ");
    const [formSubmitted, setFormSubmitted] = useState(false);
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
    }
    const handleReviewFormSubmit = async (e) => {
        e.preventDefault();
        setLoadingSpinner(true);
        const feedback = {
            "company_id": opinionMagnetCompanyId,
            "access_token": opinionMagnetAccessToken,
            "rating": rating,
            "text": feedbackMessage
        }
        try {
            const resp = await axios.post(opinionMagnetBackendUrl, feedback)
            const data = await resp.data
            setResponseMessage(JSON.stringify(data));
            setFormSubmitted(true);
            setLoadingSpinner(false);
            setTimeout(() => {
                props.closeForm();
            }, 3000)
        } catch (error) {
            setResponseMessage(`Something went wrong`);
            setFormSubmitted(true);
            setLoadingSpinner(false);
        }
    }

    const handleFeedbackMessage = (e) => {
        setFeedbackMessage(e.target.value)
    }
    const handleCloseButton = () => {
        props.closeForm();
    }
    const renderButtonContent = () => {
        if (loadingSpinner) {
            return (
                <svg className="loadingSpinner" viewBox="0 0 25 25">
                    <circle
                        cx="12.5"
                        cy="12.5"
                        r="10"
                        fill="none"
                        strokeWidth="2.5"
                        stroke={styleFontColor}
                    />
                </svg>
            );
        }
        if (!formSubmitted) {
            return <>{styleButtonText}</>;
        }
    }

    return (
        <div>
            <div className="form-box" id="form-box">
                <button
                    role="closeButton"
                    className="close-button"
                    id="close-button"
                    style={{ background: styleThemeColor, color: styleFontColor }}
                    onClick={handleCloseButton}
                >
                    X
                </button>

                {
                    formSubmitted ? (
                        <p className="response-message"> {formResponseMessage}</p>
                    ) : (<div className="form-text">
                        <h1>{styleFormTitle}</h1>
                        <label htmlFor="reviewMessage" className="label">
                            {styleRatingTitle}
                            <Rating
                                onClick={handleRating}
                            />
                        </label>
                        <form className="form" onSubmit={handleReviewFormSubmit}>
                            <div className="formGroup">
                                <label htmlFor="reviewMessage" className="label">
                                    <textarea
                                        name="feedbackMessage"
                                        id="feedbackMessage"
                                        placeholder={styleFormPlaceHolder}
                                        required
                                        rows={5}
                                        cols={30}
                                        className="formControl"
                                        onChange={handleFeedbackMessage}
                                        value={feedbackMessage}
                                        maxLength={2000}
                                    />
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="submitButton"
                                style={{ background: styleThemeColor, color: styleFontColor }}
                            >
                                {renderButtonContent()}
                            </button>
                        </form>
                    </div>)}
            </div>
        </div>
    )
}

export default OpinionMagnetForm
