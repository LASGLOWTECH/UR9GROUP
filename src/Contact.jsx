import { useState } from "react";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();
    const [loading, setIsloading] = useState(false)
    const [result, setResult] = useState("")
    const sendEmail = (e) => {
        e.preventDefault();

        setIsloading(true);

        emailjs.sendForm('service_9yexy8p', 'template_cl62k3c', form.current, 'PBTi6vGyx_hHTMRZs')

            .then((result) => {

                console.log(result.text);
                setIsloading(false);
                setTimeout(()=>{ setResult("Thanks for Contacting us")


                }, ( 1000))
                
            }, (error) => {
                console.log(error.text);
                setTimeout(()=>{ setResult("Unable to send ")});
    
                ;
            });
        e.target.reset()

    };



    return (

        <div className="container-fluid ">

            <div className=' first-row '>

                <div className='col-12   mx-auto second-col'>


                    <form className=" mx-5 formally" ref={form} onSubmit={sendEmail}>
                        < h3 className=" fw-bolder fs-1 pt-5 text-dark welcome">Welcome!</h3>
                        <p className=" fw-bold fs-4  text-success">{result} </p>

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
                            {!loading && <input type="submit" className="  fs-5 rounded-2 px-2 sub-btn mt-2 bg-dark  text-light" value="Send" />}
                            {loading && <input type="submit" className=" px-2 sub-btn mt-2 bg-success  text-light" disabled value="Sending" />}
                        </div>


                    </form>


                </div>




            </div>
        </div>


    );
};
export default ContactUs;