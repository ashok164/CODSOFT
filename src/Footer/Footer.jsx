import React from 'react';
import FooterSection from './Templates'

function Footer(){
    return(
       <div className="section">
       <div className="Section-1">
        <FooterSection 
            name="Lunch Business"
            description="A business lunch is a meal typically shared by two or more professionals during the workday with the goal of networking or discussing business-related topics. A restaurant, coffee shop, or another appropriate location may be used to host it.Business lunch is not a new employee benefit."
        />
        </div>

        <div className="Section-2">
        <FooterSection 
            name="Ideas Generation"
            description="Ideas are the key to innovation. Without them, there isn't much to execute and because execution is the key to learning, new ideas are necessary for making any kind of improvement.It's obvious that ideas alone won't make innovation happen, as you need to be able to build a systematic process for managing those ideas."
        />
        </div>

        <div className="Section-3">
        <FooterSection 
            name="Communication Skills"
            description="Being able to communicate effectively is perhaps the most important of all life skills. It is what enables us to pass information to other people, and to understand what is said to us.It enhances the public interaction and build efficient development"
        />
        </div>
         
       </div>
    );
}

export default Footer;