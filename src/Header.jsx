import { useState } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {



    const[navExpanded, setNavexpanded]= useState(false)
    const expandNav=()=>{
      
      setNavexpanded(!navExpanded)
    
    }
    


    return (<div className="Header d-flex py-3 align-items-center">

        <div className="brand   ">

            <img className=" mx-4 img1" src="/hem.png" alt="image"></img>
        </div>
        
        
        
       <div className= {navExpanded? " nav  fw-bold  fs-5 mx-60 expanded" : 'nav '  }>

       
        < a href="/">Home</a>
            < a href="/">Services</a>
            < a href="/">About</a>
         
        </div>
  
        
   

        <button class="navbar-toggler"  type="button" >
         <span class=" mx-5 navbar-toggler-icon"><i class="  bg-light menu-burger fa fa-bars text-warning "  
         onClick={expandNav}  aria-hidden="true" id="icon"></i></span>
       </button>
       
       
    </div>

    );
}

export default Header;