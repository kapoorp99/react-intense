import React, { ReactElement } from 'react'
import { ContactUsContainer } from './styles'

function ContactUs(): ReactElement {
    return (
        <ContactUsContainer>
            <form action="https://formspree.io/f/mayalnzb" method="POST">
                <label>
                    Your email:
                    <input type="email" name="_replyto" />
                </label>
                <label>
                    Your message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </ContactUsContainer>
    )
}

export default ContactUs
