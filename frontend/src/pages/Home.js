import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div className = "fluidbg">
    <Container className = "whitebg">
    <Form className = "bearer">
      <Form.Group style = {{padding:"10px"}}controlId="formBasicPassword">
      <h5 style={{textAlign:"left", paddingLeft:"10px"}}>bearer token.</h5>
        <Form.Control style = {{borderRadius:"100px", fontSize: "16px", height:"50px"}} type="password" placeholder="Enter token" />
        <Form.Text className="text-muted" style = {{textAlign:"right", paddingTop:"10px"}}>Make sure the token you use has access to the academic API.</Form.Text>
      </Form.Group> 
      </Form>
    <div className = "arr"><Button className = "arrbtn bi-arrow-right">
      </Button></div>
    </Container>
    </div>
  )
}

export default Home