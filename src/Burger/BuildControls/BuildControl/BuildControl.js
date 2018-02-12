import buildControlClasses from "./BuildControl.css";
import React from "react";

const buildControl = (props) => {
    return (
        <div className={buildControlClasses.BuildControl}>
            <div className={buildControlClasses.Label}>{props.label}</div>
            <button 
                className={buildControlClasses.Less}
                disabled={props.lessButtonIsDisabled}
                onClick={props.onIngredientRemove}
            >Less</button>
            <button
                onClick={props.onIngredientAdd}
                className={buildControlClasses.More}
            >More</button>
        </div>
    );
};

export default buildControl;