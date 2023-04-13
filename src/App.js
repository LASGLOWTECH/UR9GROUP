import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
     <Hero/>
     <Footer/>
    </div>
  );
}

export default App;
