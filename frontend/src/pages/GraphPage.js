import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import GraphComponent from '../Components/GraphComponent'

const GraphPage = () => {

  let navigate = useNavigate()

  return (
    <div className = "fluidbg">
      <Container className = "whitebg">
        <GraphComponent />
        <div className = "arr">
          <Button onClick={()=>navigate("/define")} className = "arrbtn bi-arrow-left"></Button>
        </div>
      </Container>
    </div>
  )
}

export default GraphPage