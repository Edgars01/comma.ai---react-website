import React from 'react';

import '../css/footer.css';

import commaImage from '../media/footer/comma-white.png';

import github from '../media/footer/icon-github-white.png';
import instagram from '../media/footer/icon-instagram-white.png';
import twitter from '../media/footer/icon-twitter-white.png';
import youtube from '../media/footer/icon-youtube-white.png';


const Footer = () => {
    return (


        <footer class="footer-section">


            <div class="container">
                <div class="footer-content pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-50">
                            <div class="footer-widget">
                                <div class="footer-logo">
                                    <a href="index.html"><img src={commaImage} class="commaImage" alt="logo"></img></a>
                                </div>
                                <div class="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <img src={github} className="followUsIcons"></img>
                                    <img src={instagram} className="followUsIcons"></img>
                                    <img src={twitter} className="followUsIcons"></img>
                                    <img src={youtube} className="followUsIcons"></img>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Information</h3>
                                </div>
                                <ul>
                                    <li><a href="#">comma three</a></li>
                                    <li><a href="#">openpilot</a></li>
                                    <li><a href="#">prime</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Compatibility</a></li>
                                    <li><a href="#">Setup Guide</a></li>
                                    <li><a href="#">Support & FAQ</a></li>
                                    <li><a href="#">Shipping / Returns</a></li>
                                    <li><a href="#">Discord</a></li>
                                    <li><a href="#">Wiki</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div class="footer-text mb-25">
                                    <p className='buyNowUpperText'>Try the comma three with our 30-day money back trial.</p>
                                    <p className='buyNowText' data-affirm-color="white" data-amount="199900" data-page-type="homepage">
                                        Starting at <span className="buyNowText">$181</span>
                                        /mo with <span className="buyNowText">Affirm</span>
                                        . <a className="buyNowText" aria-label="Learn more about Affirm Financing (opens in modal)" href="javascript:void(0)">Learn more</a>
                                    </p>
                                </div>
                                <div class="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address"></input>
                                        <button><i class="subscribe"></i>subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class="copyright-text">
                                <p>make driving chill</p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div class="footer-menu">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Policy</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer