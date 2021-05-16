import React from 'react'
import { Helmet } from "react-helmet";

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import heroImg from '../../img/hero-img.png'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout className="bg-light-yellow">
        <Helmet>
          <title>Letterflix - Blog</title>
        </Helmet>
        <div>
          <div className="p-8 sm:p-10 md:p-16"></div>
          <section className="hero">
            <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center">
              <div className="relative">
                <div className="h-16 sm:h-24 lg:h-32 w-16 sm:w-24 lg:w-32 bg-white rounded-full absolute deco-hero"></div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary relative z-10">
                  Some love from us
                </h1>
              </div>

              <img className="w-2/3 sm:w-auto" src={heroImg} alt="Receiving letter illustration" />
            </div>
          </section>
          <section className="section mt-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-10 lg:px-0">
              <BlogRoll />
            </div>
          </section>
        </div>
        <div className="p-6"></div>
      </Layout>
    );
  }
}
