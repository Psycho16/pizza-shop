import React from 'react';
import logo from './assets/img/pizza-logo.svg';
import { Route } from 'react-router-dom';
import { Header } from './components/index';
import { Home, Cart } from './pages/index';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        {/* <Link exact path="/" component={Home} /> */}
        {/* <Home /> */}
        {/* <Cart /> */}
      </div>
    </div>
  );
}

export default App;
