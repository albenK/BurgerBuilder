import modalClasses from "./Modal.css";
import Auxiliary from "../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import React from "react";


const modal = (props) => {
    return (
        <Auxiliary>
            <Backdrop 
                isDisplayed={props.isDisplayed}
                closeHandler={props.modalCloseHandler}
            />
            
            <div 
                className={modalClasses.Modal}
                style={{
                    transform:props.isDisplayed?"translateY(0)":"translateY(-100vh)",
                    opacity:props.isDisplayed?"1":"0"
                }}
            >{props.children}
            </div>
        </Auxiliary>
    );
};

export default modal;