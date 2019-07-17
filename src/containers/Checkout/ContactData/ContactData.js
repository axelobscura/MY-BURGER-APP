import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import classes from './ContactData.module.css';

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();
    //alert('You continue!!!');
    this.setState({loading:true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Axel Obscura',
        address: {
          street: 'Las torres 56',
          zipCode: '41234',
          country: 'Mexico'
        },
        email: 'axosar@gmail.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        console.log(response);
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false});
    });
    console.log(this.props.ingredients);
  }

  render(){
    let form = (
      <form action="">
        <input type="text" name="name" placeholder="Your Name"/>
        <input type="text" name="email" placeholder="Your Email"/>
        <input type="text" name="street" placeholder="Your Street"/>
        <input type="text" name="postalCode" placeholder="Your Postal Code"/>
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if(this.state.loading){
      form = <Spinner />;
    }
    return(
      <div className={classes.ContactData}>
        <h4>Enter your contact DATA</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;