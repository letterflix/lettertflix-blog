import React from 'react';
import { Link } from "gatsby";

import logo from '../img/logo-white.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-primary py-12 md:py16 lg:py-20 text-white px-6 sm:px-10 lg:px-20 xl:px-0">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="mt-8 md:mt-0 text-left md:text-center flex justify-center flex-col items-center">
            <Link to="/" className="text-6xl font-black italic leading-tight inline-block">
              <img src={logo} alt="Letterflix Logo" />
            </Link>
            <div className="text-lg">
              <a
                className="inline-block border-secondary border-b-2 mt-2 italic text-secondary"
                href="https://byxyz.net"
                target="_blank" rel="noreferrer"
              >
                byxyz.net
              </a>
            </div>
            <a className="mt-1 md:mt-0 inline-block" style={{maxWidth:'184px'}} href="https://www.producthunt.com/posts/letterflix?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-letterflix" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=288865&theme=light" alt="Letterflix - Send letters online 💌 | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" /></a>
          </div>
          <ul className="flex text-base md:text-lg flex-wrap -ml-6 md:ml-8 md:mt-2">
            <li className="ml-6 mb-4">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="ml-6 mb-4">
              <a href="https://www.instagram.com/letterflix_/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li className="ml-6 mb-4">
              <a href="https://www.facebook.com/letterflix/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li className="ml-6 mb-4">
              <a href="https://twitter.com/letterflix_" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li className="ml-6 mb-4">
              <a href="https://in.pinterest.com/thexyzapp/letterflix-send-letters-online/" target="_blank" rel="noreferrer">
                Pinterest
              </a>
            </li>
            <li className="ml-6 mb-4">
              <a href="https://www.youtube.com/channel/UCmc5hwl4CtgXzBi8LnY5flQ" target="_blank" rel="noreferrer">
                Youtube
              </a>
            </li>
            <li className="ml-6 mb-4">
              <a href="https://www.linkedin.com/company/letterflix" target="_blank" rel="noreferrer">
                Linkedin
              </a>
            </li>
            <li className="ml-6 mb-4">
              <a href="https://lbb.in/chennai/letterflix-online-letter-posting-delivery-service/" target="_blank" rel="noreferrer">
                LBB
              </a>
            </li>

            <li className="ml-6 mb-4">
              <a href="/terms-privacy.html" target="_blank" rel="noreferrer">
                Terms & Privacy Policy
              </a>
            </li>
            <li className="ml-6 mb-4">
              <a href="/cancellation-refund-policy.html" target="_blank" rel="noreferrer">
                Cancellation & Refund Policy
              </a>
            </li>
            <li className="ml-6 mb-4">
              <a href="/support.html" target="_blank" rel="noreferrer">
                Support
              </a>
            </li>

            <li className="ml-6 mb-4">
              <a href="mailto:letterflixteam@gmail.com">
                letterflixteam@gmail.com
              </a>
            </li>

            <li className="ml-6 mb-4">
              <a href="http://wa.me/919424817502" target="_blank" rel="noreferrer">
                +919424817502
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer
