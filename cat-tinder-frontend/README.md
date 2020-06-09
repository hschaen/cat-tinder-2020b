# Cat Tinder Frontend with Mock Data

## Set Up
- $ yarn create react-app cat-tinder-frontend
- $ cd cat-tinder-frontend
- $ yarn add react-router-dom
- install reactstrap https://reactstrap.github.io/
- $ npm install --save bootstrap
- $ npm install --save reactstrap react react-dom
- add `import 'bootstrap/dist/css/bootstrap.min.css'` to src/index.js
- $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
- remove react boilerplate code
- add a margin and a favicon - for fun
- create a pages and components directories in *src/*

## Creating file structure
- create Header.js in the components directory
- set up Header.js as a functional component - it will not hold state
- use reactstrap to add a Jumbotron to Header.js
- set up App.js as a functional component - it will not hold state
- create Cats.js in the pages directory
- set up Cats.js as a class component - it will hold state
- import Cats.js in App.js
- import Header.js in Cats.js

## Enzyme
- create a `__tests__` dierectory in pages
- create CatList.js in `__tests__`
- add a component render test
- open a new tab in terminal
- $ yarn test
- the tests will run continuously

## Creating a CatList component
- add a state object in Cats.js to hold mock data
- create CatList.js in the pages directory
- set up CatList.js as a functional component - it will not hold state
- add layout imports from reactstrap
- import CatList.js in Cats.js
- call the CatList component in the return of Cats.js
- pass the mock data in state (cats array) into the CatList component call to be rendered in CatList as props
- map over the cat array in CatList to display the list of cats
- fold in some reactstrap and jsx tags to create a nice UI
- see the cats!

## Routing for CatList
- add router imports to Cats.js
- call Router and Switch
- wrap the CatList component call in a Route
- add an exact path
- now localhost:3000 will only show the header and localhost:3000/catlist will show the cats

## Tests for CatList
- add mock cat data to `__tests__/CatList.js`
- modify the component test to take the cats array
- add a test to look for the appropriate number of cat names
- add a test to look for the appropriate number of cat ages
- add a test to look for the appropriate number of cat enjoys

## Creating a NewCat component
- create NewCat.js in the pages directory
- set up NewCat.js as a class component - it will hold a small amount of state
- create a constructor and a form in state for a new cat with the attributes name, age, and enjoys
- even though this component has state it isn't a true smart component, the only job of the state object is to wrap up the form and send it to the parent component
- add form imports from reactstrap
- import NewCat.js in Cats.js
- call the NewCat component in the return of Cats.js
- create an handleChange method for the input fields to be run with each DOM event
- call the handleChange method onChange in all input fields
- add a button to submit a new cat
- add a handleSubmit method to NewCat.js to send the current form in state "up river" to Cats.js
- add a handleSubmit to Cat.js that just logs the new cat object
- add a value attribute to each input to connect it to the form in state

## Routing for NewCat
- wrap the NewCat component call in a Route
- pass the Cats.js handleSubmit method to NewCat in the component call

## Test for NewCat
- create a file in `__tests__` called NewCat.js
- add tests for each input field
- add test for submit button
- add ids to the labels of every input to make tests pass
