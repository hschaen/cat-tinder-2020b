import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

function NewCat(props) {
  //cats is the equivalent of this.state.cats
  //setCats is the equivalent of setState({cats: })
  const [cats, setCats] = useState([])
  //form = this.state.form.(name,age,enjoys)
  //setState = setState({form: form})
  const [form, setState] = useState({
    name: '',
    age: '',
    enjoys: ''
  })
  const handleChange = e => {
    setState({
      //take all the existing form data and,...
      ...form,
      //...add new data to the end
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (event) => {
    // keeps react from refreshing the page unnessarily
    event.preventDefault()
    // a function call being passed from Cat.js
    console.log(form)
    // after the form is sent reset the state to an empty form
    
    setCats(cats => [...cats,form])
    pushCats(form)
  

  }
  const resetForm = {
    name: "",
    age: "",
    enjoys: ""
  }
  const pushCats = (freshCat) => {
    return fetch("http://localhost:3000/cats", {
      body: JSON.stringify(freshCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(res => {
      if(res.ok) {
        window.location.replace("/cats")
      }
    })
  }
  const showState = () => {
    console.log(cats)
  }
  
    return(
      <div>
        <h1 id="new-cat-header">Add a New Cat</h1>
        <Form id="form">
          <FormGroup>
            <Label htmlFor="name" id="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={ handleChange }
              value={ form.name }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="age" id="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={ handleChange }
              value={ form.age }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="enjoys" id="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={ handleChange }
              value={ form.enjoys }
            />
          </FormGroup>
          <Button
            name="submit"
            color="secondary"
            id="submit"
            onClick={handleSubmit }
          >
            Create a New Profile
          </Button>
        </Form>
        <Button onClick={showState}>Show State</Button>
      </div>
    )
  }

export default NewCat
