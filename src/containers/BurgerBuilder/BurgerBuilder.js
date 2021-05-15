import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxillary/Auxillary';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axiosOrders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENTPRICES = {
    salad: 0.5,
    meat: 1.3,
    cheese: 0.4,
    bacon: 0.7
};


class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading:false,
        error: false

    }

    componentDidMount(){
        axios.get('https://burger-builder-a1c29-default-rtdb.firebaseio.com/ingredients.json')
            .then(response=>{
                this.setState({ingredients:response.data})
            })
            .catch(error=>{
                this.setState({error:true})
            })
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});

    }

    purchaseContinueHandler = () => {
    
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice)
        const queryString= queryParams.join('&')
        this.props.history.push({
            pathname:'/checkout',
            search: '?'+ queryString
        });
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
        let orderSummary = null;
        
        

        let burger = this.state.error ? <p>Something Went Wrong!</p> : <Spinner />

        if(this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemove={this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price= {this.state.totalPrice} 
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}/>);
                </Aux>
            )
            orderSummary =  <OrderSummary 
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            price={this.state.totalPrice.toFixed(2)}/>
        }
        if(this.state.loading) {
            orderSummary = <Spinner />;
        }
        

        return (
        
            <Aux>
                
                <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
             
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);