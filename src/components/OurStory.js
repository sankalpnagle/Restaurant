import React from 'react'
import '../home.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img6 from '../images/img6.jpg'



export default function OurStory() {
    return (
        <>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div class="col p-5">
                        <h6>OUR STORY</h6>
                        <ul style={{ margin: "0px" }} />
                        <h1>Welcome to Royal</h1>
                        <p className='my-3' style={{ color: "gray" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, repudiandae? Suscipit alias, quas aliquam in, illo temporibus dolorum perspiciatis animi ipsum odit molestiae vitae praesentium recusandae architecto numquam at, deserunt quo. Ratione officiis veritatis exercitationem voluptates quibusdam totam assumenda non aliquam ea ducimus repellendus molestias soluta quidem nemo illum cupiditate ullam eius natus, minima facilis delectus. Animi amet voluptatem repellendus pariatur dolor fugit, quidem adipisci reiciendis qui voluptatibus quod inventore minus, sunt dicta nihil fugiat porro! Exercitationem explicabo harum cupiditate autem aliquid, illo, tenetur veniam accusantium qui neque sed hic repellendus illum laudantium? Explicabo at necessitatibus et error, consequuntur rerum ex iusto itaque praesentium, impedit voluptates asperiores debitis vel repudiandae, quos deleniti unde enim blanditiis. Eveniet, quaerat sunt architecto aliquid cumque eaque debitis aspernatur placeat, eius, enim ad earum cum suscipit vel praesentium corrupti doloribus odit incidunt quae? Impedit, iure! Tenetur, ut? Architecto suscipit vel, quia accusantium repudiandae molestiae neque ratione cumque harum delectus vero veritatis nesciunt nulla officia cum repellendus. Quo officiis eaque molestiae expedita. Aspernatur rerum officia, ipsam enim tenetur atque odit facilis nam voluptas mollitia, necessitatibus perspiciatis voluptatem quod, in distinctio accusamus accusantium? Expedita odio inventore perferendis? Sint, officia saepe qui similique impedit velit beatae deleniti nam.
                        </p>
                    </div>
                    <div class="col p-5">
                        <img className='story-img my-3' src={img6} alt="" />
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='py-5' style={{ backgroundColor: "#f3f3f3bf" }}>
                <div className='story-Container'>
                    <h6>ONLY THE BEST</h6>
                    <ul />
                    <h1 className='my-4'>Fresh Ingredient, Tasty Meals</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, perferendis. Possimus deleniti saepe blanditiis in itaque impedit reiciendis atque modi. Itaque, dolore? Veniam asperiores, inventore commodi reprehenderit sapiente soluta ex.</p>
                    <button className='customres-button'>VIEW ITEMS</button>
                </div>
            </div>
            <div style={{ backgroundColor: "black" }} className='d-block overflow-hidden p-0'>
                <div className='container text-center w-85' style={{ backgroundColor: "white" }}>
                    <div class="row">
                        <div class="col story-card">
                            <h6 className='orange'>$26.95</h6>
                            <h5>Grilled Fillet</h5>
                            <p className='mx-3 my-2 p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum provident saepe architecto ad unde, veniam commodi tempore? Eveniet, modi.</p>
                        </div>
                        <div class="col">
                            <img className='w-100 h-100' src={img2} alt="" />
                        </div>
                        <div class="col story-card">
                            <h6 className='orange'>$26.95</h6>
                            <h5>Grilled Fillet</h5>
                            <p className='mx-3 my-2 p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum provident saepe architecto ad unde, veniam commodi tempore? Eveniet, modi.</p>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col no-padding">
                            <img className='w-100 h-100' src={img2} alt="" />
                        </div>
                        <div class="col story-card">
                            <h6 className='orange'>$26.95</h6>
                            <h5>Grilled Fillet</h5>
                            <p className='mx-3 my-2 p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum provident saepe architecto ad unde, veniam commodi tempore? Eveniet, modi.</p>
                        </div>
                        <div class="col no-padding">
                            <img className='w-100 h-100' src={img2} alt="" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col story-card">
                            <h6 className='orange'>$26.95</h6>
                            <h5>Grilled Fillet</h5>
                            <p className='mx-3 my-2 p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum provident saepe architecto ad unde, veniam commodi tempore? Eveniet, modi.</p>
                        </div>
                        <div class="col no-padding">
                            <img className='w-100 h-100' src={img2} alt="" />
                        </div>
                        <div class="col story-card">
                            <h6 className='orange'>$26.95</h6>
                            <h5>Grilled Fillet</h5>
                            <p className='mx-3 my-2 p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum provident saepe architecto ad unde, veniam commodi tempore? Eveniet, modi.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col no-padding">
                            <img className='w-100 h-100' src={img2} alt="" />
                        </div>
                        <div class="col story-card">
                            <h6 className='orange'>$26.95</h6>
                            <h5>Grilled Fillet</h5>
                            <p className='mx-3 my-2 p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum provident saepe architecto ad unde, veniam commodi tempore? Eveniet, modi.</p>
                        </div>
                        <div class="col no-padding">
                            <img className='w-100 h-100' src={img2} alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
