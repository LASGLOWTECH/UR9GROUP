const Hero = () => {
    return ( 
        <div className=" Hero-secton1">
<div className="row imG" >
    
<div className="col-lg-8 mt-5 text-warning  ">
<h1 className=" ms-4   text-white lh-sm mt-5 text-justify text-uppercase">Living Large and <span className="text-warning">Prosperous</span> is what we stand for  </h1>
<p className="mx-4 text-wrap mt-3 fs-2 ">WELCOME TO UR9 GROUP</p>

<form class="form-group">
  <div class=" align-items-center d-flex justify-content-start  ms-4 py-5">
    
    <input type="text" class="w-50   fs-5 text-justify form-control" value="Please input your email"/>
    <button type="submit" class=" sub d-flex  justify-content-end position-relative  fs-5 fw-bold text-warning my-3 btn btn-dark mb-3">Send</button>
  </div>
  
</form>
  
</div>
  
    {/* SECOND COLUMN */}
{/* <div className="col-lg-6 col-sm-12  d-flex align-items-center  justify-content-center">
<img className="w-75   h-75" src="" id ="img1" alt="image"></img>
  
</div>
     */}
</div>



<div className="services-section " id="values">
<div className="row mb-5 mx-1">
<div className="col-12 Short-note  align-items-center text-center ">
<h3 className=" pt-5 mx-5 fw-bolder ">OUR VALUES
.</h3>
<p className="mx-4   fs-normal 5 lh-lg px-3" > We are your one-stop destination for premium homes,exquisite vodka, and sustainable construction. Our core values help us to provide our clients with the best possible experience</p>
</div>
</div>


<div className="row mx-4 align-items-center justify-content-center pt-2">
<div className="col-lg-4 flex-column  d-flex align-items-center  py-2 ">
    <div className="  bg-warning image4">
 <img className=" w-75 h-75 "src="/excellence.png"></img>

    </div>
    <h3 className="text-center py-3 fw-bold">Excellence</h3>
    <p className="text-justify  fs-6">We are committed to quality, innovation and continuous improvement in providing our services. Our goal is to strive to excel in every aspect of our operations, from product design and manufacturing to customer service and employee development. 
     UR9 Group embraces a culture of excellence and our customers attest to it. </p>
</div>




<div className="col-lg-4   flex-column  d-flex align-items-center py-5">

<div className=" image4">
<img className=" px-auto w-75 h-75" src="/luxury.png"></img>

    </div>
    <h3 className="py-3 fw-bold">Luxury</h3>
    <p> Our focus is cultivating an aura of exclusivity and it manifests in everything we do for ourselves and our customers and clients. 
        By providing high-end and unique products and services, our customers are assured of prestige.</p>

</div>


<div className="col-lg-4  flex-column  d-flex align-items-center py-5">
    <div className="  image4">
<img  className="w-75 h-75" src="/sustainability.png"></img>

    </div>  <h3 className=" py-3 fw-bold">Virtue</h3>
    
    <p>We love our planet. UR9 Group cares for our world and our people, by investing in eco-friendly practices as we build properties and create drinks, as well as ethical sourcing and supply chain management. 
    By taking a proactive approach to sustainability, we proudly contribute to a more green, safe and sustainable future.</p>
    </div>
    
</div>

</div>


{/* About Section */}

<div className="About-section">
<div className="row ms-4 py-5">

<div className="col-lg-6  py-5"><img className="w-100 " src="/img1.jpg" ></img></div>

<div className="col-lg-6  px-5 py-2">
<h3 className="fw-bold">UR9 DRINKS</h3>
<p>Experience the taste of the tropics in every sip from our newest Vodka drink, CIKA. Cika is brewed with love and made from the freshest and highest quality ingredients, sourced from the finest growers and suppliers around the world. Each bottle is carefully crafted to ensure that you get the most authentic and delicious taste for your special moments. 
    CIKA is the perfect drink for your special occasions that comes in 8 refreshing flavours</p>
<button  class="  btn btn-dark mt-4  text-warning fw-bold mb-3">Order now</button>
</div>



<div className="col-lg-6  px-5 py-2">
<h3 className="fw-bold">UR9 PROPERTIES</h3>
<p>We take pride in offering an exclusive range of luxurious homes and lands in choicest and growing locations that are designed to meet your taste From villas, mansions, spacious apartments to cozy cottages and bungalows, we have something for everyone. Our homes are crafted with attention to detail and feature top-of-the-line amenities, ensuring that you experience the ultimate in comfort and style and our lands are sure to give you a high return on investments. 
UR9 properties help people get their dream homes and live it in reality.</p>
<button  class="  btn btn-dark text-warning mt-4  fw-bold mb-3"><a className="text-decoration-none text-warning fw-bold" href="https://wa.me/2349031821590" target="_blank">Get a quote</a></button>
</div>

<div className="col-lg-6 px-5 py-2"><img className="w-100 " src="/img1.jpg" ></img></div>


<div className="col-lg-6  py-2"><img className="w-100  " src="/propties.jpg" ></img></div>



<div className="col-lg-6  px-5 py-2">
<h3 className="fw-bold">UR9 CONSTRUCTION</h3>
<p>We wear the helmet and bring your vision to life. At UR9 Construction, 
    we specialize in a wide range of services including residential and commercial construction, remodeling, renovations, and custom home building. Whether you need to build a new project from the ground up or renovate an existing property, 
    we have the expertise and resources to handle any project. We pride ourselves on our commitment to quality, integrity, and professionalism. 

</p>
<button  class="  btn btn-dark text-warning mt-4 fw-bold mb-3"><a className="text-decoration-none text-warning fw-bold" href="https://wa.me/2349031821590" target="_blank">Schedule a Consultation</a></button>
</div>


</div>




</div>







        </div>

        
     );
}
 
export default Hero;