import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <p>&copy; 2023 E-Commerce web site create by OSSAMA ANASSER. All rights reserved.</p>
            <div class="social-icons">
                <a href="https://www.facebook.com/osama.onasr.7" class="iconf" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/AnasserOssama" class="icont" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/asr_ossama/" class="iconi" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
