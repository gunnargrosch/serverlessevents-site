import React from 'react'
import Logo from "../assets/images/serverless-events-logo.png"

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <div><img src={Logo} alt="Serverless Events" className="banner-img" /></div>
            </header>
            <div className="content">
                <p>A curated list of awesome serverless events<br />
                around the world by and for the community.</p>
                <ul className="actions">
                    <li><a href="#events" className="button next scrolly">View events</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
