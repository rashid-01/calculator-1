import React from 'react';
import MdHeart from 'react-ionicons/lib/MdHeart'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'

class Footer extends React.Component{
    render(){
        let year = new Date().getFullYear()
        return(
            <div className="row">
                <div className="flex-7">
                    <p style={{color:"white"}}>Built with <MdHeart fontSize="20px" color="white" beat={true} /> by Rashid &copy; {year}</p>
                </div>
                <div>
                    <LogoGithub fontSize="20px" color="white"/>
                    <LogoFacebook fontSize="20px" color="white"/>
                    <LogoLinkedin fontSize="20px" color="white"/>
                    <LogoTwitter fontSize="20px" color="white"/>
                    <LogoInstagram fontSize="20px" color="white"/>
                </div>
            </div>
        )
    }
}

export default Footer;