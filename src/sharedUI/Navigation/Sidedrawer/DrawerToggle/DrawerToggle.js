import drawerStyles from "./DrawerToggle.css";
import React from "react";

const drawerToggle = (props) => {
    return (
        <div onClick={() => props.openHandler()} className={drawerStyles.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default drawerToggle;