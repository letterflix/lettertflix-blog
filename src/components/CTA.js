import React from 'react';
import ctaImg from "../img/hero-img.png";

export default function CTA({className}) {
  return (
    <div className={`bg-light-yellow ${className ? className : ""}`}>
      <div className="max-w-3xl mx-auto py-10 flex justify-center items-center">
        <div>
          <h2 className="text-3xl">Send letters to your loved ones</h2>
          <a
            href="https//letterto.xyz"
            className="tracking-wide text-white uppercase inline-block bg-primary px-6 py-2 mt-4"
          >
            <span className="mt-1 inline-block">Write Your First Letter</span>
          </a>
        </div>

        <img src={ctaImg} alt="" />
      </div>
    </div>
  );
}
