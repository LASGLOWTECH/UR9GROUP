const Footer = () => {
    return ( 
        <div className="   text-white footer-section">

<div className="row" >
<div className=" col-lg-2  d-flex  align-items-center justify-content-center  col-sm-12">

<img className=" mx-5 py-3  w-50 h-auto img1" src="/hem.png" alt="image"></img>

   {/* features */}
</div>
<div className=" col-lg-10">
<div className="Features d-flex py-4 flex-row gap-4  mx-5 justify-content-center align-items-center">

<div className="  features-header"><h5 className="text-warning  fw-bold">SERVICES</h5>
<p>Properties/Real Estate,  Construction  Drinks, Industry.....</p>
</div>


<div className="features-header"><h5 className="text-warning  fw-bold">ABOUT</h5>
<p>We are real estate company </p>
</div>

</div>


</div>

{/* icons-section */}
<div className="row">
        
<button type="btn"className="bg-warning w-50 rounded-3 mx-auto text-center">Our Social Platforms</button>
<div class="footer-icon d-flex  align-items-center justify-content-center ,max-w-100 mx-6 mb-7 col-12  "  >


  <a href="https://m.facebook.com/ur9.group" target="_blank"><i class=" iconf fab fa-facebook-f" ></i></a>
  <a href="https://twitter.com/ur9group" target="_blank" ><i class=" iconf fab fa-twitter" ></i></a>
  <a href="https://linkedin.com//company/ur9group/"><i class=" iconf fab fa-linkedin" ></i></a>
  <a href="https://instagram.com/ur9group?igshid=YmMTA2M2Y="><i class="fa fa-instagram"></i></a>
</div>


</div>






</div>




        </div>
     );
}
 
export default Footer;