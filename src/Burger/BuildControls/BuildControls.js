import buildControlsClasses from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
import React from "react";

const controls = [
    {label:"Salad", type:"salad"},
    {label:"Meat", type:"meat"},
    {label:"Cheese", type:"cheese"},
    {label:"Bacon", type:"bacon"}
];

const displayBuildControls = (props) => controls.map(eachControl => 
    <BuildControl 
        key={eachControl.label} 
        label={eachControl.label}
        onIngredientAdd={() => props.addIngredientHandler(eachControl.type)}
        onIngredientRemove={() => props.removeIngredientHandler(eachControl.type)}
        lessButtonIsDisabled={props.disabled[eachControl.type]}
    />
);

const buildControls = (props) => {
    return (
        <div className={buildControlsClasses.BuildControls}>
            <p>Total price: {props.totalPrice.toFixed(2)}</p>
            {displayBuildControls(props)}
            <button
                disabled={!props.isPurchasable}
                onClick={() => props.modalDisplayHandler()}
                className={buildControlsClasses.OrderButton}
            >ORDER NOW</button>
        </div>
    );
};

export default buildControls;