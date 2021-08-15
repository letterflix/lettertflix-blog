import React, { useState, useEffect } from "react";
import { RWebShare } from "react-web-share";

import Layout from "./Layout";

import faqData from "../data/faq";

import heroImg from "../img/hero-landing.svg";
import writeIcon from "../img/write-icon.svg";
import deliveryIcon from "../img/delivery-icon.svg";
import mailboxIcon from "../img/mailbox-icon.svg";
import letterSample from "../img/letter-sample.webp";
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

export const getPrice = (currency) => {
  switch (currency) {
    case 'INR':
      return { currency, amount: 99.00, symbol: '₹' }
    case 'USD':
      return { currency, amount: 2.99, symbol: '$' }
    case 'GBP':
      return { currency, amount: 2.99, symbol: '£' }
    case 'CHF':
      return { currency, amount: 2.99, symbol: 'fr.' }
    case 'EUR':
      return { currency, amount: 2.99, symbol: '€' }
    default:
      return { currency: 'USD', amount: 2.99, symbol: '$' }
  }
}

const detectUser = () => {

  var detectedUser = localStorage.getItem('detected-user');
  if (detectedUser) {
    return JSON.parse(detectedUser)
  } else {
    return fetch('https://ipapi.co/json/')
      .then(response => response.json())
  }
}

export default function Home() {

  let [price, setPrice] = useState();

  useEffect(()=>{
    // do stuff here...
    detectUser().then(res => {
      let price = getPrice(res.currency)
      setPrice(price)
    })
}, [])


function getFomattedPrice(price) {
  if(price.currency == 'EUR')
    return `${price.amount}${price.symbol}`
  else 
    return `${price.symbol}${price.amount}`
}

  return (
    <Layout className="font-lora" hideBLogLink={true} isLanding={true}>
      <div className="font-lora font-pd antialiased text-gray-80 landing">
        <section className="bg-white">
          <p className="p-10 sm:p-12 md:p-16 lg:p-20"></p>
          <div className="max-w-4xl mx-auto flex flex-row px-4 sm:px-8 md:px-10 lg:px-0">
            <div className="lg:mr-16">
              <h1 className="text-primary text-4xl lg:text-5xl font-pd font-bold font-italic italic">
                Send letters online
              </h1>
              <p className="text-lg mt-1">
                Secure, private, and cute online letter posting service. At
                <span className="font-bold">{price && ` ${getFomattedPrice(price)} ` }</span>
                only.
              </p>
              <a
                href="https://app.letterflix.com"
                className="inline-block mt-8 font-lora text-lg italic font-bold bg-primary text-white px-8 py-2 btn-shadow-yellow "
              >
                Send a Letter
              </a>
            </div>
            <img className="hidden lg:block" src={heroImg} alt="Typewriter Illustration of girls writing letters" />
          </div>
          <p className="p-12 sm:p-12 md:p-16 lg:p-20"></p>
        </section>

        {/* How it works */}
        <section className="bg-light-yellow">
          <div className="py-6 sm:py-8 md:py-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-10 lg:px-0">
            <div className="flex flex-row -ml-4 sm:-ml-6 md:-ml-8 flex-wrap">
              <div className="w-1/2 sm:w-1/3 pl-4 sm:pl-6 md:pl-8 mb-8 sm:mb-0">
                <div className="h-20 w-20 rounded-full bg-primary flex justify-center items-center">
                  <img src={writeIcon} alt="You write a letter" />
                </div>
                <h3 className="text-xl font-bold mt-4">You write</h3>
                <p>
                  Write your letter, enter the receiver’s address, and click
                  send. Your work is done here!
                </p>
              </div>
              <div className="w-1/2 sm:w-1/3 pl-4 sm:pl-6 md:pl-8 mb-8 sm:mb-0">
                <div className="h-20 w-20 rounded-full bg-primary flex justify-center items-center">
                  <img src={deliveryIcon} alt="We securely print and package letters" />
                </div>
                <h3 className="text-xl font-bold mt-4">We do the work</h3>
                <p>
                  Secure printing, packaging, and shipping. It’s almost like
                  magic.
                </p>
              </div>
              <div className="w-1/2 sm:w-1/3 pl-4 sm:pl-6 md:pl-8 mb-8 sm:mb-0">
                <div className="h-20 w-20 rounded-full bg-primary flex justify-center items-center">
                  <img src={mailboxIcon} alt="We deliver letters at home" />
                </div>
                <h3 className="text-xl font-bold mt-4">They receive</h3>
                <p>
                  and jump with joy! Now you annoy them till they reply with a
                  letter :)
                </p>
              </div>
            </div>
          </div>
          <div className="py-4 sm:py-6 md:py-8 lg:py-10"></div>
          <div className="max-w-6xl mx-auto">
            <div className="hidden lg:block divider-grey-24 w-full"></div>
            <div className="hidden md:block py-8 sm:py-10 md:py-12 lg:py-16"></div>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <img
                className="w-1/1 lg:w-1/2 relative lg:-mr-8"
                src={letterSample}
                alt="Letterflix Sample Letter with Specs on the side"
              />
              <div className="w-1/1 lg:w-1/2 bg-white p-8 sm:p-10 md:p-12 lg:p-16 relative lg:-ml-8">
                <h2 className="leading-tight text-primary text-3xl md:text-4xl font-pd font-bold font-italic italic">
                  letters are private, permanent, and special
                </h2>
                <p className="mt-6 text-base md:text-lg">
                  Letterflix is private and simple by design. Your letters are
                  printed by automated printing and packaging system at our
                  Printcenter. So that no one gets access to your words and the
                  nostalgia of paper and envelope remains.
                </p>
                <p className="mt-4 text-base md:text-lg">
                  We didn’t reimagine letters, just made it easy for anyone to
                  send letters from wherever they are.
                </p>
                <a
                  href="https://app.letterflix.com"
                  className="inline-block mt-8 font-lora text-base md:text-lg italic font-bold bg-primary text-white px-8 py-2 btn-shadow-yellow "
                >
                  Try Now
                </a>
              </div>
            </div>
            <div className="hidden lg:block lg:py-16"></div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-10 xl:px-0">
            <div className="-ml-12 flex flex-col md:flex-row">
              <h1 className="ml-12 w-1/1 md:w-2/5 leading-tight text-primary text-3xl md:text-4xl font-pd font-bold font-italic italic">
                Online letter posting has never been this easy!
              </h1>
              <div className="w-1/1 md:w-3/5 ml-12 mt-8 md:mt-0">
                <div className="-ml-8 flex flex-row flex-wrap">
                  <div className="w-1/2 mb-10 pl-8">
                    <div className="bg-light-yellow rounded-full w-16 h-16 flex justify-center item-center">
                      <img src={feat1} alt="International shipping of letters" />
                    </div>
                    <h3 className="font-bold text-black text-lg mt-4">
                      International Shipping
                    </h3>
                    <p className="text-lg">Letters go places.</p>
                  </div>

                  <div className="w-1/2 mb-10 pl-8">
                    <div className="bg-light-yellow rounded-full w-16 h-16 flex justify-center item-center">
                      <img src={feat2} alt="Refund for failed deliveries" />
                    </div>
                    <h3 className="text-lg font-bold text-black mt-4">
                      Easy Refund
                    </h3>
                    <p className="text-lg">
                      100% refund for failed deliveries.
                    </p>
                  </div>

                  <div className="w-1/2 mb-10 pl-8">
                    <div className="bg-light-yellow rounded-full w-16 h-16 flex justify-center item-center">
                      <img src={feat3} alt="Privacy of your letters is ensured" />
                    </div>

                    <h3 className="font-bold text-black text-lg mt-4">
                      Privacy by design
                    </h3>
                    <p className="text-lg">Automated printing and packaging.</p>
                  </div>

                  <div className="w-1/2 mb-10 pl-8">
                    <div className="bg-light-yellow rounded-full w-16 h-16 flex justify-center item-center">
                      <img src={feat4} alt="Track your letters" />
                    </div>
                    <h3 className="font-bold text-black text-lg mt-4">
                      Tracking
                    </h3>
                    <p className="text-lg">
                      Follow your letters at every step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hidden lg:block max-w-5xl mx-auto divider-grey-24 w-full"></div>

        {/* FAQs */}
        <section className="mt-0 lg:mt-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 md:px-10 lg:px-0">
            <h2 className="leading-tight text-primary text-3xl md:text-4xl font-pd font-bold font-italic italic">
              FAQs
            </h2>
            <div className="mt-12">
              {faqData &&
                faqData.map((faq, id) => {
                  return (
                    <div key={id} className="mb-10">
                      <h5 className="font-bold text-xl">{faq.q}</h5>
                      <p className="mt-2">{faq.a}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 sm:mt-20 lg:mt-24 py-16 sm:py-20 md:py-24 bg-primary">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-8 md:px-10 lg:px-0">
            <h2 className="leading-tight text-white text-3xl md:text-4xl font-pd font-bold font-italic italic">
              Why should you send letters at all?
            </h2>
            <p className="text-base mt-8 text-white">
              In the summer of 2019, we wrote letters to some of our family
              members and friends and sent them via post. The reactions we got
              were priceless, so we thought, everyone should experience this!
              But there got to be an easy way to mail letters. And we couldn’t
              find an alternative that is private and convenient for sending
              personal letters. So we made Letterflix (for you).
            </p>
            <a
              href="https://app.letterflix.com"
              className="inline-block mt-10 font-lora text-lg italic font-bold bg-white text-primary px-8 py-2 btn-shadow-yellow "
            >
              Draft Your letter
            </a>
          </div>
        </section>

        {/* Instagram */}
        <section className="mt-16 md:mt-20 lg:mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-10 lg:px-0">
            <h4 className="text-xl font-bold text-center">
              Tiny letters and fresh memes :)
            </h4>
            <div className="flex flex-col items-center sm:flex-row flex-wrap mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <img
                className="w-1/1 sm:w-1/2 lg:w-1/3 sm:px-4 mb-8"
                src={insta1}
                alt="Love letter memes - Letterflix Instagram"
              />
              <img
                className="w-1/1 sm:w-1/2 lg:w-1/3 sm:px-4 mb-8"
                src={insta2}
                alt="Writer memes - Letterflix Instagram"
              />
              <img
                className="w-1/1 sm:w-1/2 lg:w-1/3 sm:px-4 mb-8"
                src={insta3}
                alt="Medieval Art Memes - Letterflix Instagram"
              />
              <img
                className="w-1/1 sm:w-1/2 lg:w-1/3 sm:px-4 mb-8"
                src={insta4}
                alt="Tiny Letter - Letterflix Instagram"
              />
              <img
                className="w-1/1 sm:w-1/2 lg:w-1/3 sm:px-4 mb-8"
                src={insta5}
                alt="Tweet about love letters - Letterflix Instagram"
              />
              <img
                className="w-1/1 sm:w-1/2 lg:w-1/3 sm:px-4 mb-8"
                src={insta6}
                alt="Funny Medieval Art - Letterflix Instagram"
              />
            </div>
            <div className="text-center">
              <a
                target="__new"
                href="https://instagram.com/letterflix_"
                className="inline-block mt-4 md:mt-6 font-lora text-lg italic font-bold bg-primary text-white px-8 py-2 btn-shadow-yellow "
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Share */}
        <section className="bg-light-yellow mt-16 sm:mt-20 lg:mt-24 py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-10 lg:px-0">
          <div className="max-w-3xl mx-auto text-base md:text-lg">
            <h2 className="leading-tight text-primary text-3xl md:text-4xl font-pd font-bold font-italic italic">
              Before you leave,
            </h2>
            <p className="mt-4 md:mt-8 font-bold">Letterflix.com is a secret</p>
            <p>
              Share it with your most trusted friend. Because that’s what we do
              with the secrets.
            </p>
            <RWebShare
              className="text-lora"
              data={{
                text: "Send letters, send happiness! Try Letterflix :)",
                url: "https://letterflix.com",
                title: "Send letters online - Letterflix.com",
              }}
            >
              <button
                className="inline-block uppercase italic font-bold flex flex-row items-center text-primary mt-4 md:mt-8"
                href=""
              >
                Share the secret
                <img className="ml-3" src={shareIcon} alt="Share Letterflix with your friends" />
              </button>
            </RWebShare>
          </div>
        </section>
      </div>
    </Layout>
  );
}
