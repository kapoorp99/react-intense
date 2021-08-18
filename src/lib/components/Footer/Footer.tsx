import { ReactElement } from 'react'
import { FooterContainer } from '../styles/globalStyles'

interface Props {
    heading: string,
    logoImg_src: string,
    github: string,
    instagram: string,
    linkedin: string
}
function Footer({ heading, logoImg_src, github,instagram,linkedin }: Props): ReactElement {
    return (
        <FooterContainer>
            <div className='footer__containerTop'>
                <div className='footer__container__topLeft'>
                    <h4>Need Help?<span onClick={() => {window.location.href = 'contactus'}}>Contact Us</span></h4>
                </div>
                <div className='footer__container__topRight'>
                    <div className='left'>
                        <h1>{heading}</h1>
                        <img src={logoImg_src} alt='' />
                    </div>
                    <div className='right'>
                        <i onClick={() => {window.location.href = github}} className="fab fa-github"></i>
                        <i onClick={() => {window.location.href = linkedin}} className="fab fa-linkedin"></i>
                        <i onClick={() => {window.location.href = instagram}} className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div className='footer__containerBottom'>
                <span>&copy;</span><span>2021 All Rights Reserved</span>
            </div>
        </FooterContainer>
    )
}

export default Footer
