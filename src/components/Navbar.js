import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav
        className="sticky top-0 bg-white z-50"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="flex flex-row justify-between items-start max-w-6xl mx-auto px-4 sm:px-8 md:px-10 lg:px-0 mt-2 py-2">
          <div className="flex flex-row items-center">
            <Link to="/" className="navbar-item" title="Logo">
              <img className="w-20 sm:w-24 md:w-32" src={logo} alt="LetterFlix" />
            </Link>
            {this.props.hideBLogLink ? (
              ""
            ) : (
              <Link
                className="text-2xl sm:text-3xl md:text-4xl inline-block ml-2 sm:ml-4 md:ml-6 uppercase leading-none mt-2"
                to="/blog"
              >
                Blog
              </Link>
            )}
            {/* Hamburger menu */}
          </div>
          <div className="mr-2 md:mr-0">
            <a
              href=""
              className="inline-block font-lora text-sm sm:text-base italic font-bold bg-primary text-white px-4 py-1 btn-shadow-yellow md:mt-1"
            >
              Send a Letter
            </a>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
