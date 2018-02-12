import buttonStyles from "./Button.css";
import React from "react";

const button = (props) => {
    const buttonClasses = [buttonStyles.Button, buttonStyles[props.buttonType]].join(" ");
    return(
        <button
            className={buttonClasses}
            onClick={() => props.clicked()}
        >{props.children}</button>
    );
};

export default button;