import React from 'react'
import '../home.css'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Carousel() {
    return (
        <>
            <div class="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div alt="..." className='w-100 carousel-img' style={{ height: "25rem" }} />
                        <div class="carousel-caption d-none d-md-block ps-3" style={{ marginBottom: "0.75rem " }}>
                            <h2 className='py-5'>Only Quality Food</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero harum voluptatem odio suscipit magni voluptate repellendus recusandae modi iusto eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci at nobis quia placeat cumque quisquam facilis perspiciatis consequuntur, quo animi dicta in eum ipsam a id odit laudantium aperiam necessitatibus!</p>
                            <button className='m-3 custom-button'>View Menu</button>
                            <button className='customres-button'>Reservation</button>
                            <div style={{ marginBottom: "-23px" }}> <FontAwesomeIcon icon={faArrowDownLong} /></div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
