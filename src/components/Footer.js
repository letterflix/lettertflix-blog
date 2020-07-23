import React from 'react';
import { Link } from "gatsby";

import logo from '../img/logo-white.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-primary py-12 md:py16 lg:py-20 text-white px-6 sm:px-10 lg:px-20 xl:px-0">
        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row justify-between">
          <div className="mt-8 md:mt-0 text-left md:text-center">
            <Link to="/" className="text-6xl font-black italic leading-tight">
              <img src={logo} alt="" />
            </Link>
            <div className="md:ml-2 text-lg">
              <a
                className="inline-block ml-16 md:ml-0 border-secondary border-b-2 mt-2 italic text-secondary"
                href="https://byxyz.net"
                target="__new"
              >
                byxyz.net
              </a>
            </div>
          </div>
          <ul className="flex text-base md:text-lg flex-wrap -ml-6 md:ml-8 md:mt-4">
            <li className="ml-6 mb-4">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="ml-6 mb-4">
              <a href="https://www.instagram.com/letterflix_/" target="__new">
                Instagram
              </a>
            </li>
            <li className="ml-6 mb-4">
              <a href="https://www.facebook.com/letterflix/" target="__new">
                Facebook
              </a>
            </li>
            <li className="ml-6 mb-4">
              <a href="https://twitter.com/letterflix_" target="__new">
                Twitter
              </a>
            </li>

            <li className="ml-6 mb-4">
              <a href="/terms-privacy.html" target="__new">
                Terms & Privacy Policy
              </a>
            </li>

            <li className="ml-6 mb-4">
              <a href="mailto:letterflix.net@gmail.com">
                letterflix.net@gmail.com
              </a>
            </li>

            <li className="ml-6 mb-4">
              <a href="http://wa.me/919424817502" target="__new">
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
