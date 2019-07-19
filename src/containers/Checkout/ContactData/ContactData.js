import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import classes from './ContactData.module.css';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

  state = {
      orderForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
          },
          value: ''
        },
        street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Street'
          },
          value: ''
        },
        zipCode: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'ZIP Code'
          },
          value: ''
        },
        country: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Country'
          },
          value: ''
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Your Mail'
          },
          value: ''
        },
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        }
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
        <Input elementType='...' elementConfig='...' value='...' />
        <Input inputtype="input" type="text" name="email" placeholder="Your Email" />
        <Input inputtype="input" type="text" name="street" placeholder="Your Street" />
        <Input inputtype="input" type="text" name="postalCode" placeholder="Your Postal Code" />
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