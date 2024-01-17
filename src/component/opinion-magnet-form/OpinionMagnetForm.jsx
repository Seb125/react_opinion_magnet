import React, { useState } from 'react'
import "./opinion-magnet-form.css";
import { Rating } from 'react-simple-star-rating';


function OpinionMagnetForm(props) {
    const { styleThemeColor, styleFontColor, styleFormTitle, styleFormPlaceHolder } = props;
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

        console.log('rate', rate);
    }
    const handleReviewFormSubmit = async (e) => {
        e.preventDefault();
    }

    const handleCloseButton = () => {
        props.closeForm();
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

                <div className="form-text">
                    <h1>{styleFormTitle}</h1>
                    <form className="form" onSubmit={handleReviewFormSubmit}>
                        <div className="formGroup">
                            <label htmlFor="reviewMessage" className="label">
                                review
                                <textarea
                                    name="feedbackMessage"
                                    id="feedbackMessage"
                                    placeholder={styleFormPlaceHolder}
                                    required
                                    rows={5}
                                    cols={30}
                                    className="formControl"
                                    maxLength={2000}
                                />
                            </label>
                        </div>
                        <Rating
                            onClick={handleRating}
                        />
                        <button
                            type="submit"
                            className="submitButton"
                            style={{ background: styleThemeColor, color: styleFontColor }}
                        >
                            Button
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OpinionMagnetForm
