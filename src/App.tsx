import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Home from "./screens/home/Home";
import Hotel from "./screens/hotel/Hotel";
import List from "./screens/list/List";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (//have to wrap entire App in Router in order to use it
    <Router>
      {/* <Header /> */}
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/login' element={<LoginScreen history=''/>} />
            <Route path='/register' element={<RegisterScreen history=''/>} />
            {/* <Route path='/' element={<HomeScreen/>} /> */}
            <Route path="/" element={<Home/>}/>
            <Route path="/hotels" element={<List/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
