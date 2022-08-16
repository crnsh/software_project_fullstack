import React from 'react'
import {Container, Form, Button, Row, Col} from 'react-bootstrap'

const Choice = () => {
  return (
    <>
    <div className = "fluidbg">
    <Container className = "whitebg">
    <Form className = "bearer">
      <Form.Group style = {{padding:"10px"}}controlId="formBasicPassword">
      <h5 style={{textAlign:"center", paddingLeft:"10px"}}>search for tweets using</h5>
      <Row className = "row-btn">
        <Col className = "column-btn"> <Button className = "col-btn1" variant="outline-success">Hashtag</Button></Col>
        <Col className = "column-btn"><Button className = "col-btn1" variant="outline-success">Keyword</Button></Col>
      </Row>
    
        <Form.Control style = {{borderRadius:"100px", fontSize: "16px", height:"50px"}} type="password" placeholder="Enter keyword" />
      </Form.Group> 
      </Form>
    <div className = "arr"><Button className = "arrbtn bi-arrow-right">
      </Button></div>
    </Container>
    </div></>
  )
}

export default Choice