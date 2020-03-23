import React from "react";
import { Form, } from "semantic-ui-react";
import {UserConsumer} from "../providers/UserProvider";
import {StyledInput} from '../styles/Global'

class UserForm extends React.Component {
  state = { 
    user: this.props.user, 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    email: this.props.email
  };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {...this.state, };
    this.props.updateUser(user);
  }
  
  render() {
    const { user, firstName, lastName, email, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Username"
          type="text"
          name="user"
          value={user}
          onChange={this.handleChange}
        />
          <Form.Input
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
          <Form.Input
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
          <Form.Input
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}
    const ConnectedUserForm = (props) => {
      return (
        <UserConsumer>
          { value => (
            <UserForm 
            {...props}
            user={value.user}
            firstName={value.firstName}
            lastName={value.lastName}
            email={value.email}
            updateUser={value.updateUser}
            />
          )}
        </UserConsumer>
      )
    }

export default ConnectedUserForm;