import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,
        AiFillAmazonCircle,
        AiFillYoutube,
        AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id ="home">
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            We are your one and only solution to the tech problems 
            you face
            every day. We are leading tech company whose aim is to 
            increase the 
            problem solving ability in children.
            </p>
        </div>
    </div>
    <div className="home3" id ="about">
        <div>
            <h1>
                Who we are?
            </h1>
            <p>In 1998, the West Delhi Cricket Academy (WCDA) was created. On 30 May of that year, Prem Kohli, who'd espoused his younger 
                son's fervour for cricket, assisted nine-year-old Kohli's aspirations and arranged for him to meet Rajkumar Sharma, who initially
                 perceived him to be just another enthusiastic and determined young boy. However, two weeks later, Sharma was impressed by 
                 Kohli's accuracy and power in throwing. Upon the suggestion of their neighbours, Kohli's father considered enrolling his son 
                 in a professional cricket academy, as they believed that his cricketing abilities merited more than just playing in gully 
                 cricket. Despite his abilities, he faced the setback of being unable to secure a place in the under-14 Delhi team, not due
                  to a lack of merit but due to extraneous factors..</p>
        </div>
    </div>
    <div className="home4" id = "brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style = {{
                    animationDelay : "0.3s",
                }}>

                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style = {{
                    animationDelay : "0.5s",
                }}>

                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style = {{
                    animationDelay : "0.7s",
                }}>

                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style = {{
                    animationDelay : "1s",
                }}>

                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home;