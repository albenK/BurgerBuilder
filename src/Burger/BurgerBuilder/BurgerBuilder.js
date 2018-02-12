import Auxiliary from "../../hoc/Auxiliary";
import OrderSummary from "../OrderSummary/OrderSummary";
import Modal from "../../sharedUI/Modals/Modal";
import Burger from "../Burger";
import BuildControls from "../BuildControls/BuildControls";
import React, {Component} from "react";

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad:0.0,
            bacon:0.0,
            cheese:0.0,
            meat:0.0
        },
        totalPrice:2.0,
        isPurchasable:false, //for disabling the order button.
        modalIsDisplayed:false //for displaying the modal.
    };

    updatePurchasableState(updatedIngredients) {
        const ingredients = {...updatedIngredients};
        /* 
            We want this.state.isPurchasable to be true, if the sum of quantities
            is greater than 0.
        */
        const sumOfQuantities = Object.keys(ingredients)
            .map(eachKey => {
                const quantityOfIngredient = ingredients[eachKey];
                return quantityOfIngredient;
            })
            .reduce((sum, eachQuantity) => {
                return sum + eachQuantity;
            }, 0);
        this.setState({isPurchasable:sumOfQuantities > 0});
    }

    updateIngredients(type,addOrRemove) {
        const oldQuantity = this.state.ingredients[type];
        const newQuantity = oldQuantity + addOrRemove;
        if(newQuantity < 0) { //we dont want to update the view, if it's negative.
            return;
        }
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = newQuantity;
        const priceOfIngredient = INGREDIENT_PRICES[type];
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = (addOrRemove === 1)?(oldTotalPrice+priceOfIngredient):(oldTotalPrice - priceOfIngredient);
        this.setState({totalPrice:newTotalPrice,ingredients:updatedIngredients});
        this.updatePurchasableState(updatedIngredients);
    }

    addIngredientHandler = (type) => {
        this.updateIngredients(type, 1);
    }

    removeIngredientHandler = (type) => {
        this.updateIngredients(type, -1);
    }
    
    displayModal = () => {
        this.setState({modalIsDisplayed:true});
    }

    closeModal = () => {
        this.setState({modalIsDisplayed:false});
    }


    checkout = () => {
        console.log("checkout");
    }


    checkIfLessButtonsShouldBeDisabled(disabledInfo) {
        for(let eachKey in disabledInfo) {
            const isDisabled = disabledInfo[eachKey] <= 0;
            disabledInfo[eachKey] = isDisabled;
        }
    }

    render() {
        const disabledInfo = {...this.state.ingredients};
        this.checkIfLessButtonsShouldBeDisabled(disabledInfo);
        return(
            <Auxiliary>

                <Modal 
                    isDisplayed={this.state.modalIsDisplayed} 
                    modalCloseHandler={this.closeModal}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        cancel={this.closeModal}
                        checkout={this.checkout}
                    />
                </Modal>

                <Burger ingredients={this.state.ingredients}/>

                <BuildControls
                    totalPrice={this.state.totalPrice}
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredientHandler={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    isPurchasable={this.state.isPurchasable}
                    modalDisplayHandler={this.displayModal}
                />

            </Auxiliary>
        );
    }
}

export default BurgerBuilder;