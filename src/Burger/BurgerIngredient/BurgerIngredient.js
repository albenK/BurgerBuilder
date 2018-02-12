import BurgerIngredientsRegistry from "./BurgerIngredientsRegistry";
import PropTypes from "prop-types";
import React, {Component} from "react";

/* 
    ABOUT ME: The purpose of this component is to display a burger ingredient. Given
    an ingredient type as an input, we decide what html element we return in the render() 
    method. If props.type is one of the key's in our BurgerIngredientsRegistry, then we 
    use it's value as our ingredient. The "ingredient" property will either be null or an html 
    element. This is how we display the burger!
*/

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        if(BurgerIngredientsRegistry[this.props.type]) {
            ingredient = BurgerIngredientsRegistry[this.props.type];
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type:PropTypes.string.isRequired
};

export default BurgerIngredient;