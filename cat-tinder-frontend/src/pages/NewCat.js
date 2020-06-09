import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {Link} from 'react-router-dom'

const NewCat = () => {
  //cats is the equivalent of:
    // this.state.cats
  //setCats is the equivalent of:
    //setState({cats: whatever-data })
  const [cats, setCats] = useState([])
  //form is the same as:
    //this.state.form.(name,age,enjoys)
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
      //...add new data to the end as it is typed
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (event) => {
    // keeps react from refreshing the page unnessarily
    event.preventDefault()
    // show the current state in the console (should see all cats created)
    console.log(form)
    // set the cats state to include all cats
    // since the current cat state is immutable, we need to create a copy of it and add the new cat to it
    setCats(cats => [...cats,form])
    // send all cats in the state to the backend to post to the database
    pushCats(form)
  }
  const pushCats = (freshCat) => {
    // fetch URL to post new cat state to database
    return fetch("http://localhost:3000/cats", {
      body: JSON.stringify(freshCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(res => {
      if(res.ok) {
        // redirect user to the cat list if all goes well
        window.location.replace("/cats")
      }
    })
  }
  return(
    <div>
      <h1 id="new-cat-header">Add Yo' Kitties, bro.</h1>
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
          <Label htmlFor="enjoys" id="enjoys">What it do?</Label>
          <Input
            type="text"
            name="enjoys"
            onChange={ handleChange }
            value={ form.enjoys }
          />
        </FormGroup>
        <Button
          name="submit"
          color="primary"
          id="submit"
          onClick={handleSubmit }
        >
          Add dat Profile
      
        </Button> <Link to="/cats" className="float-right btn btn-warning">View dem Kitties</Link>
      </Form>
    </div>
  )
}
export default NewCat