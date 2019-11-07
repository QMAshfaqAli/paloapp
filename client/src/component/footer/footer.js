import React from 'react';
import './footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from '@fortawesome/free-brands-svg-icons';

const footer = (props) => {

    library.add(fab);

    return (
        <div className="Container">
            <footer className="App-footer">

                <div className="footer-logo">
                    <a href="/"> <img src={window.location.origin + "/logo.png"} alt="logo" className="logo"/></a>
                </div>
                <nav className="footer-nav">
                    {props.footerMenu}
                </nav>
                <div className="footer-newsletter">
                    <p>প্রথম আলো নিউজ লেটার</p>
                    <input type="email" placeholder="আপনার ইমেইল আইডি দিন"/>
                    <button type="submit">সাবস্ক্রাইব</button>
                </div>

                <div className="footer-download">
                    <p>মোবাইল অ্যাপস ডাউনলোড করুন</p>
                    <a href="https://itunes.apple.com/us/app/prothom-alo/id548596669" rel="noopener noreferrer nofollow"
                       target="_blank">
                        <img src={window.location.origin + "/iosapp.png"} alt="ios"/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.mcc.prothomalo"
                       rel="noopener noreferrer nofollow" target="_blank">
                        <img src={window.location.origin + "/iosapp.png"} alt="android"/>
                    </a>
                </div>

                <div className="social-icons">

                    <a href="https://www.facebook.com/DailyProthomAlo" rel="noopener noreferrer nofollow"
                       target="_blank">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                    </a>
                    <a href="https://twitter.com/ProthomAlo" target="_blank" rel="noopener noreferrer nofollow">
                        <FontAwesomeIcon icon={['fab', 'twitter']}/>
                    </a>
                    <a href="https://www.instagram.com/prothomalo/" target="_blank" rel="noopener noreferrer nofollow">
                        <FontAwesomeIcon icon={['fab', 'instagram']}/>
                    </a>
                    <a href="https://www.youtube.com/c/ProthomAlo" target="_blank" rel="noopener noreferrer nofollow">
                        <FontAwesomeIcon icon={['fab', 'youtube']}/>
                    </a>
                </div>

                <div className="static-menu">
                    {props.staticFooterMenu}
                </div>

                <div className="publisher">
                    সম্পাদক ও প্রকাশক: মতিউর রহমান
                </div>

                <div className="copyright">
                    &copy; প্রথম আলো ২০১৯
                </div>

            </footer>
        </div>
    )
};

export default footer;