import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxillary/Auxillary';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTPRICES = {
    salad: 0.5,
    meat: 1.3,
    cheese: 0.4,
    bacon: 0.7
};


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false

    }
    purchaseCancelHandler = () => {
        this.setState({purchasing:false});

    }

    purchaseContinueHandler = () => {
        alert('You Continue')

    }

    purchaseHandler = () => {
       this.setState({purchasing: true});
    }

    updatePurchaseState(ingredients) {
        
        const sum= Object.keys(ingredients)
            .map(igkey => {
                 return ingredients[igkey];
            })

        .reduce((sum,el) => {
            return sum + el;
        },0);

        this.setState({purchaseable: sum > 0})

    }

    addIngredientHandler = (type) => {
        
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTPRICES[type];
        const oldprice = this.state.totalPrice;
        const newPrice = oldprice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount=this.state.ingredients[type];
        if(oldCount <=0) {
            return 0;
        }
        const updatedCount=oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENTPRICES[type];
        const oldprice = this.state.totalPrice;
        const newPrice = oldprice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);

    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
            disabledInfo[key]= disabledInfo[key] <=0;
        }

        return (
        
            <Aux>
                
                <Modal 
                show = {this.state.purchasing}
                modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    price={this.state.totalPrice.toFixed(2)}/>

                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemove={this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price= {this.state.totalPrice} 
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}/>
                    

            </Aux>
        );
    }
}

export default BurgerBuilder;