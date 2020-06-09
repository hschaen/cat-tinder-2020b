import React, { Component } from 'react'
// imports routing components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import the Header component
import Header from '../components/Header'
// import the CatList component
import CatList from './CatList'
// import the NewCat component
import NewCat from './NewCat'


class Cats extends Component {
  // method that gets passed to NewCat through the component call and returns the newcat form object
  constructor(props) {
    super(props)
    this.state = {
      cats: [{
        id:1,
        name: "Harry",
        age: 12,
        enjoys: "Burgers"
      },{
        id:2,
        name: "Kitty",
        age: 4,
        enjoys: "Parties"
      }]
    }
  }
  render() {
    return(
        
	      <Router>
          {/* calls the Header component */}
        <Header />
				  <Switch>
            {/* Add a route see all the cats from the mock data in state */}
            {/* Calls the CatList component and passes the state object of all the cats */}
          	<Route
              exact path="/newcat"
              render={(props) => <NewCat /> }
            />
          	<Route
              exact path="/cats"
              render={(props) => <CatList cats={this.state.cats} /> }
            />
				  </Switch>
			  </Router>
    )
  }
}
export default Cats
