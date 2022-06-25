import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from '../src/components/screens/HomeScreen';
import ProductScreen from '../src/components/screens/ProductScreen';

const App = ()=> {
  return (
    <Router>
    <Header />
      <main>
        <Container> 
          <Routes>       
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/product/:id' element={<ProductScreen />} />         
          </Routes>  
        </Container>     
      </main>
    <Footer />
    </Router>
  );
}

export default App;
