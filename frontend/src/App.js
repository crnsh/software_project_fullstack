import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <main>
        <Header />
      <Container>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </Container>
    <Footer />
    </main> 
    </div>
  );
}

export default App;
