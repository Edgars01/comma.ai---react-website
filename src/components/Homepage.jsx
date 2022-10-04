import React from 'react'
import { Tweet } from 'react-twitter-widgets'


import '../css/navbar.css';
import '../css/homepage.css';

import commaThreeFrame from '../media/homepage/c3-homepage.png';
import commaThreeVideo from '../media/homepage/c3screen.mp4';
import greenArrow from '../media/homepage/green-arrow.svg';
import iconAffirm from '../media/homepage/icon-affirm-light-green.svg';
import iconCalendar from '../media/homepage/icon-calendar-light-green.svg';
import iconFast from '../media/homepage/icon-fast-light-green.svg';
import commaVideoCover from '../media/homepage/c3-hero.mp4';
import driverMonitoringAtNight from '../media/homepage/driver-monitoring-at-night.jpeg';


import Home from '../functions/homepage/textChange.jsx';




const Homepage = () => {
    return (
        <div className='mainFrame'>

            <div className='mainChild'>

                <div className='uppperBlockIconContainer'>

                    <svg className='upperBlockIcon'>
                        <path d="M2.3325273,44 C2.3325273,42.9819019
                        2.25294268,42.1290181 2.37000751,41.3070321
                        C2.41990001,40.9564305 2.82901847,40.5810595
                        3.16268975,40.3693706 C4.78942848,39.3369727
                        6.55659633,38.5126886 8.07113779,37.32861 
                        C12.9769087,33.4931864 15.8847893,28.4440632 
                        16.0437152,21.8852845 C16.0887401,20.0229846 
                        15.4041177,19.5577289 13.8399272,20.2831908 
                        C9.32477801,22.3776079 4.46938637,21.1496084 
                        1.87814052,17.2574961 C-0.947721751,13.012484 
                        -0.549798677,7.36046894 2.83607643,3.65221184 
                        C7.16090397,-1.08410221 14.2770341,-1.22582393 
                        19.1842653,3.29752453 C22.1237851,6.00709044 
                        23.5205316,9.50570155 23.8688055,13.4851451 
                        C25.0365333,26.8169447 18.349722,37.8056121 
                        6.17936039,42.6328324 C4.97488253,43.1103451 
                        3.73973905,43.5025696 2.3325273,44" id="Fill-3"></path>
                    </svg>

                    <button className="button-5" role="button">Shop</button>

                </div>

                <div className='uppperBlockTextContainer'>
                    <p className='uppperBlockText'>The comma body is here. Learn More -&gt;</p>
                </div>

            </div>

            <div className='commaThreeTextFrame'>
                <h3 className='commaThreeHeading'>COMMA THREE</h3>
                <h3 className='commaThreeText'>Make driving chill with our beautiful new hardware.</h3>
                <div className='comma-two-buy-now-container'>
                    <a className='comma-two-buy-now'>Buy Now</a>
                    <img src={greenArrow} className="comma-two-buy-now-arrow"></img>
                </div>
            </div>

            <div className='commaThreeImgOuterFrame'>

                <div className='commaThreeImgFrame overlayComponent'>
                    <img src={commaThreeFrame} className="commaThreeImg" />
                </div>

                <video className='commaThreeVideo overlayComponent' src={commaThreeVideo} width="800" height="460" autoPlay loop muted />

            </div>


            <div className='informationFrame'>

                <div className='commaTwoDescriptionFrame'>
                    <p className="comma-two-paragraph">Unlike many
                        <a href="https://www.youtube.com/watch?time_continue=125&amp;v=eIWa2FD5RZs&amp;feature=emb_title" className="comma-two-minilink">OEM ADAS systems</a>,
                        openpilot can <a href="https://youtu.be/VHKyqZ7t8Gw?t=11" className="comma-two-minilink">drive for hours</a>
                        without intervention. We sell a devkit that can run openpilot with 360° HDR vision,
                        <a href="/vehicles" className="comma-two-minilink">compatible</a> with 200+ cars. Starting at $1999.
                        <a href="/shop/products/three" className="comma-two-buy-now arrowDescription">Buy Now<img src={greenArrow} className="comma-two-buy-now-arrow actualArrowDescription"></img></a>
                    </p>
                </div>


                <div className='cardsFrame'>

                    <div className='card-container'>
                        <div className='cardIconsContainer'>
                            <img src={iconFast} className="cardIcons"></img>
                        </div>
                        <div className='cardText'>
                            <p><span>Easy to Install.</span> Watch our <a href="/setup">step-by-step</a> videos. Install it yourself in as little as 5 minutes.</p>
                        </div>
                    </div>

                    <div className='card-container'>
                        <div className='cardIconsContainer'>
                            <img src={iconCalendar} className="cardIcons"></img>
                        </div>
                        <div className='cardText'>
                            <p><span>30 Day Money Back Trial.</span> We think you’ll love it, but if you’re not satisfied, you can send it back for a <a href="https://comma.ai/returns" target="_blank">full refund</a>.</p>
                        </div>
                    </div>

                    <div className='card-container'>
                        <div className='cardIconsContainer'>
                            <img src={iconAffirm} className="cardIcons"></img>
                        </div>
                        <div className='cardText'>
                            <p><span>Pay over time.</span> With Affirm, you can pay monthly for the comma three. <a>Learn more</a>.</p>
                        </div>
                    </div>

                </div>

            </div>


            <div className='commaVideoCoverContainer'>

                <div className='comma-landing-cover-content'>
                    <h1 className='comma-landing-cover-text'> <Home /> </h1>
                    <a href="/shop/products/three" title="Order Now" className="comma-shop-two-buy-now-button-homepage">Buy Now</a>
                </div>

                <video className='commaVideoCover' src={commaVideoCover} width="800" height="460" autoPlay loop muted />
            </div>

            <div className='lowerContianer'>

                <div className='openpilotContainer'>
                    <h3 className='openpilotHeading'>openpilot</h3>


                    <p className="openpilotText">openpilot is open source software built to improve upon the existing driver
                        assistance in most new cars on the road today. Tesla Autopilot like functionality for
                        your Toyota, Honda, and other top brands. See what
                        <a href="https://www.thedrive.com/news/37833/consumer-reports-ranks-this-aftermarket-driver-assistance-kit-above-tesla-autopilot-cadillac-super-cruise" className="comma-two-minilink">Consumer Reports</a> thinks of it.
                    </p>

                    <div className='openpilotButtonsOuterContainer'>
                        <div className='openpilotButtonsContainer'>
                            <div>
                                <span className='openpilotButtons'>View on GitHub<img src={greenArrow} className="openpilotButtonArrow"></img></span>
                            </div>

                            <div>
                                <span className='openpilotButtons'>See it in action<img src={greenArrow} className="openpilotButtonArrow"></img></span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="top-gradient-box">
                    <div className="layer">
                    </div>
                </div>

                <div className='keepYourEyesOnTheRoadOuterContainer'>

                    <h2 className="keepYourEyesHeader">Keep your eyes on the road.</h2>

                    <div className='keepYourEyesOnTheRoadContainer'>
                        <div className='keepYourEyesOnTheRoadGridItem'>
                            <p className='keepYourEyesText'>
                                While engaged, openpilot includes camera based driver monitoring that works
                                both day and night to alert the driver when their eyes are not on the road ahead.
                            </p>

                            <p><a className='keepYourEyesLink'>See driver monitoring in action<img src={greenArrow} className='keepYourEyesArrow'></img></a></p>
                        </div>

                        <div className='keepYourEyesOnTheRoadGridItem'>
                            <img src={driverMonitoringAtNight} className="driverMonitoringAtNight"></img>
                        </div>
                    </div>

                </div>

                <div className='compatibilityContainer'>

                    <h2 className="compatibilityHeader">openpilot supports 200+ vehicles</h2>

                    <p className="compatibilityText">Check to see if your vehicle works with comma devices.</p>

                    <a
                        href="/vehicles" title="Check Compatibility" className="comma-shop-two-buy-now-button-homepage">Check Compatibility
                    </a>

                </div>

            </div>

            <div className="tweetOuterContainer">
                <div className="tweetContainer">

                    <div className='grid'>
                        <Tweet tweetId='1407386480314621954' className="grid-item" />
                        <Tweet tweetId='1412919215443619842' className="grid-item" />
                        <Tweet tweetId='1384241368290131971' className="grid-item" />
                        <Tweet tweetId='1411533232617627649' className="grid-item" />
                        <Tweet tweetId='1387103362349289472' className="grid-item" />
                        <Tweet tweetId='1436860291535495168' className="grid-item" />
                        <Tweet tweetId='1343373334960955392' className="grid-item" />
                        <Tweet tweetId='1362492653783445505' className="grid-item" />
                        <Tweet tweetId='1407386480314621954' className="grid-item" />
                        <Tweet tweetId='1412919215443619842' className="grid-item" />
                        <Tweet tweetId='1394808101145038849' className="grid-item" />
                        <Tweet tweetId='1382461217520902145' className="grid-item" />
                    </div>

                    <div className="layer">

                    </div>

                </div>
            </div>



        </div>
    )
}

export default Homepage
