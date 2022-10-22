import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Card from './components/card';
import Products from './components/products';
import reportWebVitals from './reportWebVitals';
import BlackChair from './assets/images/black-chair.jpeg';
import ChairPink from './assets/images/chair-pink.jpeg';
import ChairSteel from './assets/images/chair-steel.jpeg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />*/}
    <Card name="Black chair" desc="It Black" count="1" img={BlackChair} alt="Black chair" />
    <Card name="Chair pink" desc="It Pink" count="2" img={ChairPink} alt="Chair pink" />
    <Card name="Chair steel" desc="It Steel" count="3" img={ChairSteel} alt="Chair steel" />
    <Products></Products>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
