import React from "react";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import faqData from "../data/faq";

import heroImg from "../img/hero-landing.svg";
import writeIcon from "../img/write-icon.svg";
import deliveryIcon from "../img/delivery-icon.svg";
import mailboxIcon from "../img/mailbox-icon.svg";
import letterSample from "../img/letter-sample.png";
import feat1 from "../img/feat-1.svg";
import feat2 from "../img/feat-2.svg";
import feat3 from "../img/feat-3.svg";
import feat4 from "../img/feat-4.svg";
import insta1 from "../img/insta/insta-1.jpg";
import insta2 from "../img/insta/insta-2.jpg";
import insta3 from "../img/insta/insta-3.jpg";
import insta4 from "../img/insta/insta-4.jpg";
import insta5 from "../img/insta/insta-5.jpg";
import insta6 from "../img/insta/insta-6.jpg";
import shareIcon from "../img/share-icon.svg";

export default function index() {
  return (
    <div className="font-lora antialiased text-gray-80">

      {/* Navbar */}
      <Navbar />
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
              <h3 className="text-xl font-bold mt-4">You write</h3>
              <p>
                Write your letter, enter the receiver’s address, and click send.
                Your work is done here!
              </p>
            </div>
            <div className="w-1/3 ml-8">
              <div className="h-20 w-20 rounded-full bg-primary flex justify-center items-center">
                <img src={deliveryIcon} alt="" />
              </div>
              <h3 className="text-xl font-bold mt-4">We do the work</h3>
              <p>
                Secure printing, packaging, and shipping. It’s almost like
                magic.
              </p>
            </div>
            <div className="w-1/3 ml-8">
              <div className="h-20 w-20 rounded-full bg-primary flex justify-center items-center">
                <img src={mailboxIcon} alt="" />
              </div>
              <h3 className="text-xl font-bold mt-4">They receive</h3>
              <p>
                and jump with joy! Now you annoy them till they reply with a
                letter :)
              </p>
            </div>
          </div>
        </div>
        <div className="py-10"></div>
        <div className="max-w-6xl mx-auto">
          <div className="divider-grey-24 w-full"></div>
          <div className="py-16"></div>
          <div className="flex flex-row justify-center items-center">
            <img className="w-1/2 relative -mr-8" src={letterSample} alt="" />
            <div className="w-1/2 bg-white p-16 relative -ml-8">
              <h2 className="leading-tight text-primary text-4xl font-pd font-bold font-italic italic">
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

      {/* Features */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto">
          <div className="-ml-12 flex flex-row">
            <h1 className="ml-12 w-2/5 leading-tight text-primary text-4xl font-pd font-bold font-italic italic">
              Online letter posting has never been this easy!
            </h1>
            <div className="w-3/5 ml-12 flex flex-row flex-wrap">
              <div className="w-1/2 mb-10">
                <div className="bg-light-yellow rounded-full w-16 h-16 flex justify-center item-center">
                  <img src={feat1} alt="" />
                </div>
                <h3 className="font-bold text-black text-lg mt-4">
                  International Shipping
                </h3>
                <p className="text-lg">Letters go places.</p>
              </div>

              <div className="w-1/2 mb-10">
                <div className="bg-light-yellow rounded-full w-16 h-16 flex justify-center item-center">
                  <img src={feat2} alt="" />
                </div>
                <h3 className="text-lg font-bold text-black mt-4">
                  Easy Refund
                </h3>
                <p className="text-lg">100% refund for failed deliveries.</p>
              </div>

              <div className="w-1/2 mb-10">
                <div className="bg-light-yellow rounded-full w-16 h-16 flex justify-center item-center">
                  <img src={feat3} alt="" />
                </div>

                <h3 className="font-bold text-black text-lg mt-4">
                  Privacy by design
                </h3>
                <p className="text-lg">Automated printing and packaging.</p>
              </div>

              <div className="w-1/2 mb-10">
                <div className="bg-light-yellow rounded-full w-16 h-16 flex justify-center item-center">
                  <img src={feat4} alt="" />
                </div>
                <h3 className="font-bold text-black text-lg mt-4">Tracking</h3>
                <p className="text-lg">Follow your letters at every step.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto divider-grey-24 w-full"></div>

      {/* FAQs */}
      <section className="mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="leading-tight text-primary text-4xl font-pd font-bold font-italic italic">
            FAQs
          </h2>
          <div className="mt-12">
            {faqData &&
              faqData.map((faq) => {
                return (
                  <div className="mb-10">
                    <h5 className="font-bold text-xl">{faq.q}</h5>
                    <p className="mt-2">{faq.a}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 py-24 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="leading-tight text-white text-4xl font-pd font-bold font-italic italic">
            Why should you send letters at all?
          </h2>
          <p className="text-base mt-8 text-white">
            In the summer of 2019, we wrote letters to some of our family
            members and friends and sent them via post. The reactions we got
            were priceless, so we thought, everyone should experience this! But
            there got to be an easy way to mail letters. And we couldn’t find an
            alternative that is private and convenient for sending personal
            letters. So we made Letterflix (for you).
          </p>
          <a
            href=""
            className="inline-block mt-10 font-lora text-lg italic font-bold bg-white text-primary px-8 py-2 btn-shadow-yellow "
          >
            Draft Your letter
          </a>
        </div>
      </section>

      {/* Instagram */}
      <section className="mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-row flex-wrap">
            <img className="w-1/3 px-4 mb-8" src={insta1} alt="" />
            <img className="w-1/3 px-4 mb-8" src={insta2} alt="" />
            <img className="w-1/3 px-4 mb-8" src={insta3} alt="" />
            <img className="w-1/3 px-4 mb-8" src={insta4} alt="" />
            <img className="w-1/3 px-4 mb-8" src={insta5} alt="" />
            <img className="w-1/3 px-4 mb-8" src={insta6} alt="" />
          </div>
          <div className="text-center">
            <a
              href=""
              className="inline-block mt-8 font-lora text-lg italic font-bold bg-primary text-white px-8 py-2 btn-shadow-yellow "
            >
              Follow on Instagram
            </a>
            <p className="text-xl font-bold mt-6">
              Tiny letters and fresh memes :)
            </p>
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="bg-light-yellow mt-24 py-16">
        <div className="max-w-3xl mx-auto text-lg">
          <h2 className="leading-tight text-primary text-4xl font-pd font-bold font-italic italic">
            Before you leave,
          </h2>
          <p className="mt-8 font-bold">Letterto.xyz is a secret</p>
          <p>
            Share it with your most trusted friend. Because that’s what we do
            with the secrets.
          </p>
          <a className="inline-block uppercase italic font-bold flex flex-row items-center text-primary mt-8" href="">
            Share the secret
            <img className="ml-3" src={shareIcon} alt="" />
          </a>
        </div>
      </section>
    
      {/* Footer */}
      <Footer />
    </div>
  );
}
