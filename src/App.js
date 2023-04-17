import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import About from './About'
import ContactUs from './Contact';
import Footer from './Footer';

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
     
     <Router>
    <div className='ab'>
    
      
      <Navbar/> 

<div className='items '>
<Switch>
<Route exact path="/"> <Hero/></Route>
<Route path="/About"> <About/>  </Route>
<Route path="/Contact"> <ContactUs/>  </Route>

      </Switch>
 
    
</div>
<Footer/>

</div>

        </Router>
 
  
    </div>
  );
}



      



export default App;
