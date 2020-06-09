import React from 'react'
// imports routing components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Container} from 'reactstrap'

// import the Header component
import Header from '../components/Header'
// import the CatList component
import CatList from './CatList'
// import the NewCat component
import NewCat from './NewCat'
const Cats = () => {
  return(
    <Router>
      {/* calls the Header component */}
      <Header />
      <Container>
      <Switch>
        {/* Add a route see all the cats from the mock data in state */}
        {/* Calls the NewCat component to add a new cat */}
        <Route
          exact path="/newcat"
          render={() => <NewCat /> }
        />
        {/* Show CatList when you come to homepage */}
        <Route
          exact path="/"
          render={() => <CatList /> }
        />
        {/* Calls the CatList component to view all cats in the database */}
        <Route
          exact path="/cats"
          render={() => <CatList /> }
        />
      </Switch>
      </Container>
    </Router>
  )
}
export default Cats
