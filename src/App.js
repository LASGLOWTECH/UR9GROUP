import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Hero from './Hero';
import About from './About'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     
     <Router>
    <div className='ab'>
    
      <Header/>
     

<div className='items '>
<Switch>
<Route exact path="/"> <Hero/></Route>
<Route path="/About"> <About/>  </Route>
 
        
      </Switch>
 
    
</div>
<Footer/>

</div>

        </Router>
 
  
    </div>
  );
}



      



export default App;
