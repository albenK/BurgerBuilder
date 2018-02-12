import burgerIngredientsClasses from "./BurgerIngredients.css";
import React from "react";

/* 
    ABOUT ME: The purpose of this file is to get back the html to display for
    a given burger ingredient. We import this into the BurgerIngredient.js file to get
    the respective html element.
*/

const burgerIngredientsRegistry = {
    "breadBottom":<div className={burgerIngredientsClasses.BreadBottom}></div>,
    "breadTop":(
        <div className={burgerIngredientsClasses.BreadTop}>
            <div className={burgerIngredientsClasses.Seeds1}></div>
            <div className={burgerIngredientsClasses.Seeds2}></div>
        </div>
    ),
    "meat":<div className={burgerIngredientsClasses.Meat}></div>,
    "cheese":<div className={burgerIngredientsClasses.Cheese}></div>,
    "salad":<div className={burgerIngredientsClasses.Salad}></div>,
    "bacon":<div className={burgerIngredientsClasses.Bacon}></div>
};

export default burgerIngredientsRegistry;