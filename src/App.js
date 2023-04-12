import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './Hero';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Hero/>
    </div>
  );
}

export default App;
