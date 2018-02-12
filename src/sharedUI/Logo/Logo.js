import burgerLogo from "../../assets/images/burger-logo.png";
import logoStyles from "./Logo.css";
import React from "react";

const logo = (props) => {
    return (
        <div className={logoStyles.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt="MyBurger" />
        </div>
    );
};

export default logo;