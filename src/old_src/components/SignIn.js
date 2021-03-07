import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'




const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

  
class SignIn extends Component {

  state = { name: '', surname: '', email: '', submittedName: '',submittedSurname: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, surname, email } = this.state

    this.setState({ submittedName: name, submittedSurname: surname, submittedEmail: email })
  }

  render() {
    const { name, surname , email, submittedName, submittedSurname, submittedEmail } = this.state

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
          <Form.Input
              fluid
              required
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              required
              placeholder='Surname'
              name='surname'
              value={surname}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              control={Input}
              label='Email'
                error={{
                    content: 'Please enter a valid email address',
                    pointing: 'below',
                }}
              required
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Select
              fluid
              required
              options={options}
              placeholder='Gender'
            />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Checkbox required label='I agree to the Terms and Conditions' />
          <Form.Button content='Submit'>Enviar</Form.Button>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, surname, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedSurname, submittedEmail }, null, 2)}</pre>
    </>
    )
  }
}

export default SignIn