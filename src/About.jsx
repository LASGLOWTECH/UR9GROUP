
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';






const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });

    }, []);

    return (<div className=" About-sec">

        <div className=" row  About-section">
            <div className=" col-lg-12 py-5  text-center about-hero">
                <h1 className="text-warning text-center mt-5 text-bottom px-5 fs-1 fw-bolder">PARTNER WITH US TODAY</h1>
                <h1 className="ms-5 py-5 text-decoration-underline-warning text-white fw-bolder"> OUR BUSINESSES</h1>
                <ul className="things text-center lh-lg  fs-1  py-4 list-style-type-none text-light fw-bold fs-4">
                    <li>UR9 FARMS</li>
                    <li>UR9 LIQUOR</li>
                    <li>UR9 INDUSTRIES</li>
                    <li>UR9 PROPERTIES</li>
                    <li>UR9 CONSTRUCTION</li>
                    <li>UR9 ENTERTAINMENT</li>
                    <li>UR9 TRANSPORT</li>
                    <li>UR9 GLOBAL</li>

                </ul>
            </div>

        </div>


        <div className=" row bg-dark About-section">




            <div className="col-lg-6">
                <div className="About-hero  mt-5 mx-4" data-aos="zoom-in-up" >

                    <h3 className="text-warning fw-bold" >ABOUT US</h3>
                    <p className="text-light text-justify pt-3"><span className="text-warning fw-bolder">UR9 GROUP</span> is a diversified and fully integrated conglomerate registered with
                        the Corporate Affairs Commission and under the laws of The Federal Republic of
                        Nigeria in May 2018.
                        We have vibrant operations in Nigeria across a wide range of sectors including
                        Energy, Beverage, Real Estate, Agriculture, Technologies, Entertainment,
                        Transportation and Asset Management. Our main business focus is to provide
                        value-added products and services that are centered on Luxury, Elegance,
                        Quality and Excellence; attributes for which we are known in our industries of
                        operation.
                        We place great emphasis on Integrity, Knowledge, Partnership, Customer
                        Service Extraordinaire, Competence and Quality in all our business dealings. We
                        endeavor to find the best fit for the needs and desires of our clients as well as
                        boosting their personality and lifestyle.
                        Our clients know that <span className=" text-warning fw-bold">‘A DEAL WITH UR9 IS A DEAL WITH EXCELLENCE’</span>.
                        Our corporate strategy has evolved as our businesses have grown, matured and
                        diversified into new sectors and regions. This has set the stage for the next phase
                        in our strategic plan(s) for the next decade; Expansion and Backward
                        Integration.
                        We are striving for self-reliance in all the sectors of our operations and have
                        drawn up ambitious plans to establish world-class projects in new realms such as
                        Airline, Railway, Motorsports, Entertainment, Technology and
                        Telecommunications whilst re-investing and upgrading in our current sectors of
                        operations to meet International Standards of Excellence; the key principle of our
                        business model which is <span className="text-warning fw-bold">‘DRIVEN BY EXCELLENCE’</span> . </p>

                </div>



            </div>


            <div className="col-lg-6 d-flex flex-column px-5  mt-5 " >
                <div className=" text-center vision-section" data-aos="zoom-in-up">
                    <h3 className="text-warning mission fw-bold ">OUR MISSION</h3>
                    <div className="text-warning misicons "><i className=" py-3 fa fa-bullseye"></i></div>
                    <p className="py-3 text-white ">To provide consumers with high quality products and services
                        across various industrial spectrums utilizing the Total Quality Management
                        (TQM) model. </p>
                </div>

                <div className="vision-section text-center" data-aos="zoom-in-up">
                    <h3 className="text-warning vision fw-bold">VISION</h3>

                    <div className="text-warning misicons"><i className='  py-3 far fa-eye'></i></div>


                    <p className="py-3  text-white ">To become one of the leading brands in our industries of
                        operation. We aim to be everyone’s first choice in our operational fields by
                        meeting and exceeding their expectations through the utilization of best business
                        practices which will in turn drive UR9’s long term growth and success. </p>
                </div>




            </div>

        </div>



    </div>);
}

export default About;