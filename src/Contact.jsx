import { useState } from "react";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {


    const ServerId = process.env.REACT_app_FORM_SERVICE_ID
    const templateId = process.env.REACT_FORM_TEMPLATE_ID
    const tokenId = process.env.REACT_FORM_SERVICE_TOKEN
    
    const form = useRef();
    const [loading, setIsloading] = useState(false)
    const [result, setResult] = useState("")
    const sendEmail = (e) => {
        console.log(`${process.env.REACT_APP_FORM_SERVICE_ID}`);
        e.preventDefault();
        
        setIsloading(true);

        emailjs.sendForm('service_9yexy8p', 'template_cl62k3c', form.current, 'PBTi6vGyx_hHTMRZs')

            .then((result) => {


                setIsloading(false);
                setTimeout(() => {
                    setResult("Thanks for Contacting us")


                }, (1000))

            }, (error) => {
                console.log(error.text);
                setTimeout(() => { setResult("Unable to send ") },);
                setIsloading(false);
            
                
            });
        e.target.reset()

    };



    return (

        <div className="container-fluid ">

            <div className=' first-row '>

                <div className='col-12   mx-auto second-col'>


                    <form className=" w-75 mx-5 formally" ref={form} onSubmit={sendEmail}>
                        < h3 className=" fw-bolder fs-1 pt-5 text-dark welcome">Welcome!</h3>
                        <p className=" fw-normal fs-6 text-danger">{result} </p>

                        <div className="form-group">
                            <label for="exampleFormControlInput"></label>
                            <input type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="user_name"
                                placeholder="Name"

                            ></input></div>

                        <div className="form-group">
                            <label for="exampleFormControlInput"></label>
                            <input type="Email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="user_email"
                                required placeholder="Email"

                            ></input></div>



                        <div className="form-group">
                            <label for="exampleFormControlInput"></label>
                            <label for="exampleFormControlTextarea1"></label>
                            <textarea class="form-control" name="message" id="exampleFormControlTextarea1" placeholder="Message" cols=""
                                rows="3"></textarea></div>

                        <div className="form-group">
                            {!loading && <input type="submit" className="  fs-5 fw-bold rounded-2 px-2 sub-btn mt-2 bg-warning text-black" value="Send" />}
                            {loading && <input type="submit" className=" px-2 sub-btn mt-2 bg-success  text-light" disabled value="Sending" />}
                        </div>


                    </form>


                </div>




            </div>
            <div className="row bg-dark  mt-5 ">
                <div className="col-lg-4 py-0 ">
                    <div className="     px-4  text-center  ">
                        <span className="span"><i class="fa fa-phone aria-hidden=true"></i></span>
                        <p className="pt-4 pb-1 text-warning fw-bold">PHONE</p>
                        <p className="text-light">08171476946</p>

                    </div>
                </div>

                <div className="col-lg-4  py-3 ">
                    <div className="   text-center px-4  ">
                        <span className="span"><i class="fa fa-map-marker aria-hidden=true"></i></span>

                        <p className="pt-4 pb-1 text-warning  fw-bold ">ADDRESS</p>
                        <p className="text-light">50, Ebitu, Ukiwe street Jabi Abuja</p>


                    </div>
                </div>
                {/* Email */}

                <div className="col-lg-4 py-3 ">
                    <div className="  text-center   px-4  ">
                        <span className="span"><i class="fa fa-email aria-hidden=true"></i></span>
                        <p className="text-warning  pt-4 pb-1 fw-bold">EMAIL</p>
                        <p className="text-light">ur9groupltd@gmail.com</p>

                    </div>
                </div>



            </div>
        </div>


    );
};
export default ContactUs;