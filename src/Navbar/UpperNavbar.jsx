import React from 'react'
import { SocialIcon } from 'react-social-icons'
function UpperNavbar(){
    return (
        <div className="Navbar-III">
        <div className="LogoList">
        <ul>
        <SocialIcon url="https://www.facebook.com/" />
        <SocialIcon url="www.instagram.com" />
        <SocialIcon url="https://www.pinterest.com/" />
        <SocialIcon url="www.discord.com" />
        <SocialIcon url="www.github.com" />
        <SocialIcon url="www.linkedin.com" />
        </ul>
            </div>
            <div className="Contact">

                <p>
                   9861811924
                </p>
                <p>
                   ghimireashok164@gmail.com
                </p>

            </div>
            
            <div className="Consult">
                <p>Contact To Consult</p>
            </div>
        </div>
    );
}

export default UpperNavbar;