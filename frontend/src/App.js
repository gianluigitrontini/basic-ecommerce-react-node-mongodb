import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CartScreen from './components/pages/CartScreen';
import HomeScreen from './components/pages/HomeScreen';
import LoginScreen from './components/pages/LoginScreen';
import ProductScreen from './components/pages/ProductScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='relative container mx-auto p-4'>
          <Route path='/' exact component={HomeScreen}></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/login' component={LoginScreen}></Route>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
