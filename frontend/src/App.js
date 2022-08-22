import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Choice from './pages/Choice';
import GraphPage from './pages/GraphPage';


function App() {
  return (
    <div className="App">
      <main>
        <Header />
      <Container>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/define' element={<Choice />} />
        <Route path='/graph' element={<GraphPage />} />
      </Routes>
      </BrowserRouter>
    </Container>
    <Footer />
    </main> 
    </div>
  );
}

export default App;
