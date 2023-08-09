import React from 'react'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import app from '../im/app.png'
import app2 from '../im/app1.png'

const Footer = () => {
    return (
        <>
            <div className="foot_main">
                <div className="first_up">
                    <div className="img">
                        <FastfoodIcon id="logo" />
                        <h4>Haridwar Wala</h4>
                    </div>
                    <div className="app">
                        <h2>Our App</h2>
                        <div className="appName">
                        <img src={app} alt="App" />
                            <img src={app2} alt="App" /></div>

                    </div>

                </div>
                <div className="footDown">
                    <div className="first-foot">
                        <h3>About our Company</h3>
                        <ul>
                            <li>Who we are</li>
                            <li>Blogs</li>
                            <li>Videos</li>
                            <li>Gallerys</li>
                            <li>Evnets</li>
                        </ul>
                    </div>
                    <div className="sec-foot">
                        <h3>Contact with us</h3>
                        <ul>
                            <li>+91-12345678</li>
                            <li>www.haridwarwala.com</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div className="third-foot">
                        <h3>Partner with us</h3>
                        <ul>
                            <li>Add Restaurant</li>
                            <li>Add Bussines</li>
                            <li>Work as Delivery Boy</li>
                        </ul>
                    </div>
                    <div className="forth-foot">
                        <h3>Join with Newsletter</h3>
                        <br />
                        <input type="mail" placeholder='Mail address' /> <span><button>Go</button></span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Footer
