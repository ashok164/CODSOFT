import React from 'react'
import AboutUs from './Card'

function About(){

    return(
        <div>
<div className="Section">
<div className="Section-4">
    <AboutUs
      aboutus="About Us"  
      name="15yrs, I am passionate about achieving better results for our Clients"
      description="I am a skilled and results-driven web developer who consistently achieves superior outcomes for clients. With a keen eye for detail and a deep understanding of cutting-edge technologies, I have successfully delivered impactful web solutions that not only meet but exceed client expectations. My commitment to excellence, coupled with a proactive problem-solving approach, ensures that projects are completed efficiently and with a focus on user satisfaction. From responsive design to seamless functionality, I take pride in elevating the online presence of clients and contributing to their overall success in the digital landscape."
      button="See More"
    />  
    </div>  
    <div className="Section-5">
    <AboutUs
      image="../public/Images/thinking.png"
      height="300vh"
    />  
    
    </div>  
    
</div>
</div>

    );
}
export default About;