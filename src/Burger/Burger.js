import burgerClasses from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import React from "react";

const burger = (props) => {
    const keysOfIngredientsProp = Object.keys(props.ingredients);
    let transformedIngredients = keysOfIngredientsProp.map((eachKey) => {
        const quantityOfIngredient = props.ingredients[eachKey];
        //create a new array with length being quantity of the ingredient.
        const tempArray = Array(quantityOfIngredient); 
        //spread each element of tempArray into this new array we're returning and we map
        // it into an array of BurgerIngredient components.
        return [...tempArray].map((_, index) => {
            return <BurgerIngredient key={eachKey+index} type={eachKey}/>
        });
    }) // reduce the multi-dimensional array of BurgerIngredient components to a single array
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    //check to see if no ingredients were passed in.
    if(transformedIngredients.length == 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }

    return(
        <div className={burgerClasses.Burger}>
            <BurgerIngredient type="breadTop"/>
                {transformedIngredients}
            <BurgerIngredient type="breadBottom"/>
        </div>
    );
};

export default burger;