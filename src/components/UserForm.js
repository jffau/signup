import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
export default class UserForm extends Component {
  state = {
    step: 1,

    // fields:
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  };

  nextStep = () => {
    const { step } = this.state.step;
    step.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state.step;
    step.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.setState;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>Step 2 (Personal Details)</h1>;
      case 3:
        return <h1>Step 3 (Confirm) </h1>;

      case 4:
        return <h1>Step 4 (Success) </h1>;

      default:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}
