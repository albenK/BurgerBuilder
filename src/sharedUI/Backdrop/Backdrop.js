import backdropStyles from "./Backdrop.css";
import React from "react";

const backdrop = (props) => {
    return (
        props.isDisplayed ? <div onClick={() => props.closeHandler()} className={backdropStyles.Backdrop}></div>: null
    );
};

export default backdrop;