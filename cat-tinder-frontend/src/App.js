import React from 'react'
// impport Cats component
import Cats from './pages/Cats'
import './App.css'

// creating a functional component
const App = (props) => {
  return (
    <div>
      {/* imports Cats component */}
      <Cats />
    </div>
  )
}

export default App
