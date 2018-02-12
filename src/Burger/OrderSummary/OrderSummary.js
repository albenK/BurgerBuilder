import Auxiliary from "../../hoc/Auxiliary";
import Button from "../../sharedUI/Button/Button";
import React from "react";


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((eachKey, i) => {
            return (
                <li key={eachKey+i}>
                    <span style={{textTransform:"capitalize"}}>
                        {eachKey}
                    </span>
                    :{props.ingredients[eachKey]}
                </li>
            );
        });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>Your ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.cancel} buttonType="Danger">Cancel</Button>
            <Button clicked={props.checkout} buttonType="Success">Checkout</Button>
        </Auxiliary>
    );
};

export default orderSummary;