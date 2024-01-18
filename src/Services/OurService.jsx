import React from "react";
import CardForService from './CardForService'
function OurService(){

    return(
        <div className="container">
        <h3>
                Our Service
            </h3>
            
            <div className="box">
               <CardForService 
                image="https://media.licdn.com/dms/image/C5612AQGY3N8JplPOUA/article-cover_image-shrink_600_2000/0/1633009034458?e=2147483647&v=beta&t=bMjDAkgOc5qzKcSDcJH5stjWz-w3ZvJEyTOG2JaKUcc"
                height="200vh"
                title="User Experience"
                 />
               
            
            
                <CardForService 
                image="https://youthincmag.com/wp-content/uploads/2018/05/study-material.jpg"
                title="Study Material"
                height="200vh"
               

               />
               
                
               <CardForService 
                image="https://imageio.forbes.com/specials-images/imageserve/64213c10fc7ed6f0a3eb47ae/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                height="200vh"
                
                title="Creative Design"
                 />
               
               </div>
               
        </div>
    );
}

export default OurService;