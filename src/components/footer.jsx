import React from "react";

function Footer() {
     return (
          <>

               <section id="footer" >
                    <div className="container row">

                         {/* <!--Footer Logo--> */}
                         <div className="col-md-3 col-lg-3 col-sm-6">
                              <img src="logo.jpg" alt="Quordnet Academy" className="logo-icons" />
                              <p id="name">@Quordnet Academy 2020</p>

                         </div>


                         {/* <!--Footer Company--> */}
                         <div className="col-md-3 col-lg-3  col-sm-6">
                              <div className=""> <strong> Company </strong> </div>
                              <br />
                              <div className=""><strong> About Us </strong> </div>
                              <br />
                              <div className=""><strong> Contact </strong></div>
                              <br />
                              <div className=""  ><strong> Terms and Conditions </strong> </div>
                              <br />
                         </div>

                    </div>

                    <br />
                    {/* <!--Footer Social icons and all right reserved--> */}
                    <div class=" social-icons">
                         <a class="footer-icons-class" href="https://t.me/quordnet" target="https://t.me/quordnet" style={{ color: "#0088cc" }}><i class="fab footer-icons fa-telegram-plane"></i></a>
                         <a class="footer-icons-class" href="https://www.instagram.com/quordnet_academy/" target="https://www.instagram.com/quordnet_academy/" style={{ color: "#fb3958" }}><i class="fab footer-icons fa-instagram"></i></a>
                         <a class="footer-icons-class" href="https://www.facebook.com/quordnetacademy/?fref=tag" target="https://www.facebook.com/quordnetacademy/?fref=tag" style={{ color: "#3b5998" }}><i class="fab footer-icons fa-facebook-f"></i></a>
                         <a class="footer-icons-class" href="https://twitter.com/QuordnetAcademy" target="https://twitter.com/QuordnetAcademy" style={{ color: "#00acee" }}><i class="fab footer-icons fa-twitter"></i></a>
                         <a class="footer-icons-class" href="https://in.linkedin.com/organization-guest/company/quordnet-academy" target="https://in.linkedin.com/organization-guest/company/quordnet-academy" style={{ color: "#0e76a8" }}><i class="fab footer-icons fa-linkedin-in"></i></a>

                         <br />

                    </div>


               </section>

          </>
     )
}

export default Footer;
