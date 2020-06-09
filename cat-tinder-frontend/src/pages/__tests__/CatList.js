import React from 'react'
import ReactDOM from 'react-dom'
import CatList from '../CatList'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const cats = [
  {
    id: 1,
    name: 'Morris',
    age: 2,
    enjoys: "Long walks on the beach."
  },
  {
    id: 2,
    name: 'Paws',
    age: 4,
    enjoys: "Snuggling by the fire."
  },
  {
    id: 3,
    name: 'Mr. Meowsalot',
    age: 12,
    enjoys: "Being in charge."
  }
]

// tests for rendering a component
// it('Cats renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<CatList />, div)
// })

// modified test to include the array of cats
it('Cats renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatList cats={cats} />, div);
})

// looking for three cat names
it('Renders the cats', ()=>{
  const component = mount(<CatList cats={cats} />)
  const names = component.find('h4 > .cat-name')
  expect(names.length).toBe(3)
})

// looking for three cat ages
it('Renders the cats', ()=>{
  const component = mount(<CatList cats={cats} />)
  const ages = component.find('h4 > .cat-age')
  expect(ages.length).toBe(3)
})

// looking for three cat enjoys
it('Renders the cats', ()=>{
  const component = mount(<CatList cats={cats} />)
  const aenjoys = component.find('.cat-enjoys')
  expect(aenjoys.length).toBe(3)
})
