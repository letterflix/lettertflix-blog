import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import heroImg from '../../img/hero-img.png'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout className="bg-light-yellow">
        <div>
          <div className="p-16"></div>
          <section className="hero">
            <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center">
              <div className="relative">
                <div className="h-32 w-32 bg-white rounded-full absolute deco-hero"></div>
                <h1 className="text-6xl text-primary relative z-10">
                  Some love from us
                </h1>
              </div>

              <img src={heroImg} alt="" />
            </div>
          </section>
          <section className="section mt-12">
            <div className="max-w-4xl mx-auto">
              <BlogRoll />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
