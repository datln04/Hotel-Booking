
import React from 'react'
import Contact from '../components/ContactPage/Contact/Contact'
import Breadcrumb from '../components/IntroducePage/Breadcrumb/Breadcrumb'
import backgroundImage from './../assets/images/contact/lienhe.jpg'

const ContactPage = () => {

    return (
        <div className="main-screen">
            <Breadcrumb image={backgroundImage} />
            <Contact />
        </div>
    )
}

export default ContactPage
