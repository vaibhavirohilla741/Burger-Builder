import React, { Component } from 'react'
import Button from "../../../components/UI/Button/Button"
import classes from './ContactData.module.css'
import axios from '../../../axiosOrders'
import Spinner from '../../../components/UI/Spinner/Spinner'

export class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
         this.setState({loading:true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name:'vaibhavi',
                email:'vaibhavi@gmail',
                address: {
                    street:'shejwal park',
                    zipCode:'46565',
                    country: 'india'
                }
            },
            deliveryMethod:'fastest'
        }
        axios.post('/orders.json',order)
            .then(response =>{
                this.setState({loading:false})
                this.props.history.push('/');
            })
            .catch(error => this.setState({loading:false}))


    }
    render() {
        let form = (
        <form>
            <input className={classes.Input} type='text' name="name" placeholder="Your Name" />
            <input className={classes.Input} type='email' name="email" placeholder="Your Email" />
            <input className={classes.Input} type='text' name="street" placeholder="Street" />                   
            <input className={classes.Input} type='text' name="postal" placeholder="Postal Code" />
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>);
        if(this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData
