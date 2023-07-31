import React from 'react'
import ab from './about.jpg'
import WatchIcon from '@mui/icons-material/Watch';

const About = () => {
  return (
    <>
    <div class="container-xxl my-5">
        <div class="mx-5">
            <div class="row g-">
                <div class="col-lg-6" >
                    <div class="position-relative h-100">
                        <img class="img-fluid position-fuild w-100 h-10 mb-5" src={ab}/>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <h5><span>About Us</span></h5>
                    <h1 class="mb-4"><span>Welcome</span> to onE<span><WatchIcon  fontSize="large"/></span>Watch</h1>
                    <p className='mb-4'>
                    A haven where elegance, craftsmanship, and innovation converge in exceptional timepieces. With a rich heritage in horology, we are passionate about delivering watches that not only accurately keep time but also make a bold fashion statement. Each watch in our collection is meticulously crafted by skilled artisans, who pour their expertise and attention to detail into every intricate element.

                    Our unwavering commitment to quality drives us to source only the finest materials, ensuring durability and longevity. From premium metals to high-grade leathers and scratch-resistant crystals, every component is carefully selected to create watches that are built to withstand the test of time. We believe that a watch is more than just a functional accessory; it is a symbol of personal style and an embodiment of individuality.
                    Thank you for choosing us as your trusted destination for watches. We are honored to be part of your timeless journey and look forward to sharing our passion with you.
                    <h5 className='mt-3'><span>~ Thank You</span></h5>
                    </p>                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About