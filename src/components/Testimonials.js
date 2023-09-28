import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'

export default function Testimonials() {
    return (
        <>

            <div className='container my-5 py-5'>

                <div className='story-Container'>
                    <h6>TESTIMONIALS</h6>
                    <ul />
                    <h3 className='my-4'>What People are Saying</h3>
                </div>

                <div className=' row'>
                    <div className='col mx-2'>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <h5>"A Great Find"</h5>
                        <p className='my-3 p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit alias porro cumque laboriosam. Corporis, debitis! Ab quia, tempore illo, sit repellendus voluptatibus quis voluptatum quidem architecto placeat expedita perspiciatis.</p>
                        <p class="fw-bold">Divi</p>
                    </div>
                    <div className='col mx-2'>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <h5>"A Great Find"</h5>
                        <p className='my-3 p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit alias porro cumque laboriosam. Corporis, debitis! Ab quia, tempore illo, sit repellendus voluptatibus quis voluptatum quidem architecto placeat expedita perspiciatis.</p>
                        <p class="fw-bold">Divi</p>
                    </div>
                    <div className='col mx-2'>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <h5>"A Great Find"</h5>
                        <p className='my-3 p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit alias porro cumque laboriosam. Corporis, debitis! Ab quia, tempore illo, sit repellendus voluptatibus quis voluptatum quidem architecto placeat expedita perspiciatis.</p>
                        <p class="fw-bold">Divi</p>
                    </div>
                    <div className='col mx-2'>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <h5>"A Great Find"</h5>
                        <p className='my-3 p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit alias porro cumque laboriosam. Corporis, debitis! Ab quia, tempore illo, sit repellendus voluptatibus quis voluptatum quidem architecto placeat expedita perspiciatis.</p>
                        <p class="fw-bold">Divi</p>
                    </div>
                </div>
            </div>
            <div className='py-5' style={{ backgroundColor: "#f3f3f3bf" }}>
                <div className='story-Container w-75' >
                    <h6>DONT MISS</h6>
                    <ul />
                    <h1 className='my-4'>OUR NEWS AND EVENTS</h1>
                    <p className='fs-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, perferendis. Possimus deleniti </p>
                    <div className='d-flex justify-content-around'>
                        <div class="card card-measure">
                            <img src={img3} style={{ height: "10rem" }} alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">Card title</h6>
                                <h6 className='p orange'>CATEGORY</h6>
                                <p class="card-text p">Some quick example text to build on thlorem2e Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam sit blanditiis eos in quaerat voluptate debitis facilis quo illo. card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card card-measure " >
                            <img src={img4} style={{ height: "10rem" }} alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">Card title</h6>
                                <h6 className='p orange'>CATEGORY</h6>
                                <p class="card-text p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card card-measure" >
                            <img src={img5} style={{ height: "10rem" }} alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">Card title</h6>
                                <h6 className='p orange'>CATEGORY</h6>
                                <p class="card-text p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <button className='customres-button'>READ MORE</button>
                </div>
            </div>
        </>
    )
}
