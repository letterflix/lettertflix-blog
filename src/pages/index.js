import React from "react";

import heroImg from "../img/hero-landing.svg";
import writeIcon from "../img/write-icon.svg";
import deliveryIcon from "../img/delivery-icon.svg";
import mailboxIcon from "../img/mailbox-icon.svg";
import letterSample from "../img/letter-sample.png"

export default function index() {
  return (
    <div className="font-lora antialiased">
      {/* Hero Section */}
      <section className="bg-white">
        <p className="p-20"></p>
        <div className="max-w-4xl mx-auto flex flex-row">
          <div className="mr-16">
            <h1 className="text-primary text-5xl font-pd font-bold font-italic italic">
              Send letters online
            </h1>
            <p className="text-lg mt-1">
              Secure, private, and cute online letter posting service. At
              <span className="font-bold">{` Rs. 99 `}</span>
              only.
            </p>
            <a
              href=""
              className="inline-block mt-8 font-lora text-lg italic font-bold bg-primary text-white px-8 py-2 btn-shadow-yellow "
            >
              Send a Letter
            </a>
          </div>
          <img src={heroImg} alt="Hero Image" />
        </div>
        <p className="p-20"></p>
      </section>

      {/* How it works */}
      <section className="bg-light-yellow">
        <div className="py-10"></div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-row -ml-8">
            <div className="w-1/3 ml-8">
              <div className="h-20 w-20 rounded-full bg-primary flex justify-center items-center">
                <img src={writeIcon} alt="" />
              </div>
              <h4 className="text-xl font-bold mt-4">You write</h4>
              <p>
                Write your letter, enter the receiver’s address, and click send.
                Your work is done here!
              </p>
            </div>
            <div className="w-1/3 ml-8">
              <div className="h-20 w-20 rounded-full bg-primary flex justify-center items-center">
                <img src={deliveryIcon} alt="" />
              </div>
              <h4 className="text-xl font-bold mt-4">We do the work</h4>
              <p>
                Secure printing, packaging, and shipping. It’s almost like
                magic.
              </p>
            </div>
            <div className="w-1/3 ml-8">
              <div className="h-20 w-20 rounded-full bg-primary flex justify-center items-center">
                <img src={mailboxIcon} alt="" />
              </div>
              <h4 className="text-xl font-bold mt-4">They receive</h4>
              <p>
                and jump with joy! Now you annoy them till they reply with a
                letter :)
              </p>
            </div>
          </div>
        </div>
        <div className="py-10"></div>
        <div className="divide-black"></div>
        <div className="max-w-6xl mx-auto">
          <div className="divider-grey-38 w-full"></div>
          <div className="py-16"></div>
          <div className="flex flex-row justify-center items-center">
            <img className="w-1/2 relative -mr-8" src={letterSample} alt="" />
            <div className="w-1/2 bg-white p-16 relative -ml-8">
              <h2 className="leading-none text-primary text-4xl font-pd font-bold font-italic italic">
                letters are private, permanent, and special
              </h2>
              <p className="mt-6 text-lg">
                Letterflix is private and simple by design. Your letters are
                printed by automated printing and packaging system at our
                Printcenter. So that no one gets access to your words and the
                nostalgia of paper and envelope remains.
              </p>
              <p className="mt-4 text-lg">
                We didn’t reimagine letters, just made it easy for anyone to
                send letters from wherever they are.
              </p>
              <a
                href=""
                className="inline-block mt-8 font-lora text-lg italic font-bold bg-primary text-white px-8 py-2 btn-shadow-yellow "
              >
                Try Now
              </a>
            </div>
          </div>
          <div className="py-16"></div>
        </div>
      </section>
    </div>
  );
}
