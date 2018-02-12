import Logo from "../../Logo/Logo";
import sidedrawerStyles from "./Sidedrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../../Backdrop/Backdrop";
import React from "react";


const sidedrawer = (props) => {
    let attachedClasses = [sidedrawerStyles.Sidedrawer, sidedrawerStyles.Close];
    if(props.open) {
        attachedClasses = [sidedrawerStyles.Sidedrawer, sidedrawerStyles.Open];
    }
    return (
        <Auxiliary>
            <Backdrop isDisplayed={props.open} closeHandler={props.closeHandler}/>
            <div className={attachedClasses.join(" ")}>
                <div className={sidedrawerStyles.Logo}>
                    <Logo/>
                </div>
                
                <nav>
                    <NavigationItems/>
                </nav>
                
            </div>
        </Auxiliary>
    );
};

export default sidedrawer;