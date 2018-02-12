import toolbarStyles from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import React from "react";

const toolbar = (props) => {
    return(
        <header className={toolbarStyles.Toolbar}>
            <DrawerToggle openHandler={props.drawerOpenHandler}/>
                <div className={toolbarStyles.Logo}>
                    <Logo/>
                </div>

            <nav className={toolbarStyles.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;