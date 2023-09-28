import React from 'react'
import '../home.css'
import { } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <>

            <div className='contact-container contact-img'>
                <div className='box'>
                    <h5>Hour of Opration</h5>
                    <p>10:00am - 1:00pm</p>
                    <p>10:00am - 1:00pm</p>
                    <ul style={{ width: "-webkit-fill-available" }} />
                    <h6>SAT</h6>
                    <p>3:00pm - 10:30pm</p>
                    <ul style={{ width: "-webkit-fill-available" }} />
                    <h6>SUN</h6>
                    <p>We are Closed</p>
                    <button className='customres-button'>MAKE A RESERVATION</button>
                </div>
                <div className='box'>
                    <h6>Drop Us a Line</h6>
                    <p className='p text-center'>Don't be shy. Let us know if you have any questions!</p>
                    <button className='customres-button'>CONTACT US</button>

                    <h6 className='pt-4'>Our Newsletter</h6>
                    <p className='p'>Dialoge is an essential part of any script</p>
                    <input className='box-input' type="text" placeholder='First Name' />
                    <input className='box-input' type="text" placeholder='Last Name Name' />
                    <input className='box-input' type="email" placeholder='First Name' />
                    <button className='customres-button form-label' style={{ width: "113%" }}>CONTACT US</button>

                </div>

            </div >
            <footer className='foot'>
                <div> Designed By <span className='fw-semibold'>Elegant Themes</span> | Powered by <span className='fw-semibold'>Wordpress</span>
                    <div className='float-end' style={{
                        marginTop: "-12px",
                        fontSize: "25px"
                    }}>
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon className='ps-4' icon={faTwitter} />
                        <FontAwesomeIcon className='px-4' icon={faGooglePlusG} />
                        <FontAwesomeIcon icon={faSquareInstagram} />
                    </div>
                </div >

            </footer>
        </>
    )
}
