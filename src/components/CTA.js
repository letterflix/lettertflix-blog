import React from 'react';
import ctaImg from "../img/hero-img.png";

export default function CTA({className}) {
  return (
    <div className={`bg-light-yellow ${className ? className : ""}`}>
      <div className="max-w-3xl sm:px-8 md:px-10 lg:px-0 mx-auto py-10 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl">
            Send letters to your loved ones
          </h2>
          <a
            href="https://app.letterflix.com"
            className="tracking-wide text-white uppercase inline-block bg-primary px-6 py-2 mt-4"
          >
            <span className="mt-1 inline-block">Write Your First Letter</span>
          </a>
        </div>

        <img className="w-2/3 md:w-auto" src={ctaImg} alt="" />
      </div>
    </div>
  );
}
