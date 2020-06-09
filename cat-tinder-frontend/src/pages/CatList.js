import React, {useState, useEffect} from 'react'
// import necessary components from reactstrap
import { Container, Row, Col, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
const CatList = () => {
  //Create an empty array to hold all the cats
  const [newCats, setNewCats] = useState([])
  //useEffect hook lets us GET all cats from the database when the component loads
  //the empty array after the comma means that it will get triggered automatically only once
  useEffect(() =>{
    grabCats()},[])

  async function grabCats () {
    try {
      //GET data from the backend
      let response = await fetch("http://localhost:3000/cats")
      let data = await response.json();
      //all good?
      if(response.status === 200) {
        //check the console to make sure we have all the cats
        console.log("data", data)
        //populate the newCats state array with data
        setNewCats(data)
      }
    } catch (err) {
        console.log(err)
    }
  }
  return(
    <>
      <Container>
        <Row>
          <Col>
            <Link className="btn btn-warning mb-2 float-right" to="/newcat">Add Some Kitties</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {/* Map over the newCats state array */}
            {newCats.map((cat, index) => {
              return (
              <ListGroupItem key={index}>
                  <h4>
                    {/* using dot notation to access the cat attributes */}
                    <span className='cat-name'>{cat.name}</span> - <small className='cat-age'>{cat.age} years old</small>
                  </h4>
                    <span className='cat-enjoys'>{cat.enjoys}</span>
                  </ListGroupItem>
              )})}
            </ListGroup>
            <Link className="btn btn-warning mt-2 float-right" to="/newcat">Add Some Kitties</Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CatList
