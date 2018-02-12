import navigationItemStyles from "./NavigationItem.css";
import React from "react";

const navigationItem = (props) => {
    return (
        <li className={navigationItemStyles.NavigationItem}>
            <a 
                href={props.link}
                className={props.isActive ? navigationItemStyles.active: null}
            >{props.children}</a>
        </li>
    );
};

export default navigationItem;