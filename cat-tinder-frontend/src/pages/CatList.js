import React, {useState, useEffect} from 'react'
// import necessary components from reactstrap
import { Container, Row, Col, ListGroup, ListGroupItem, Button} from 'reactstrap'

function CatList(props) {
  const [newCats, setNewCats] = useState([])
  
  useEffect(() =>{
    grabCats()},[])

  async function grabCats () {
    try {
      let response = await fetch("http://localhost:3000/cats")
      let data = await response.json();
      // if(getEm.status === 200) {
        
       console.log("data", data)
      // }
      setNewCats(data)

    } catch (err) {
        console.log(err)
    }
  }
  return(
    <div>
      <Container>
        <Row>
          <Col>
            <ListGroup>
            {/* maping over cats which was passed through the CatList component call in Cat.js */}
            {/* there is no this in functional components */}
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
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CatList
