import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/global.css";
// import './all.sass'
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children, className, isLanding }) => {
  const { title, description, tags, siteUrl } = useSiteMetadata();
  return (
    <div className={`${className ? className : ""}`}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#674B7C" />
        <meta name="description" content={description} />
        <meta
          name="image"
          content={`${withPrefix(siteUrl)}/img/og_image.jpg`}
        />

        <meta itemprop="name" content={title} />
        <meta itemprop="description" content={description} />
        <meta name="keywords" content={tags} />
        <meta
          itemprop="image"
          content={`${withPrefix(siteUrl)}/img/og_image.jpg`}
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${withPrefix(siteUrl)}/img/og_image.jpg`}
        />
        <meta property="og:site_name" content="letterflix" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="Letterflix" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content={`${withPrefix(siteUrl)}/img/og_image.jpg`}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Lora:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@1,700&display=swap"
          rel="stylesheet"
        ></link>

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-173455410-1"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-173455410-1');`}
        </script>
        <script type='text/javascript'>
          {`  window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', '00776aae33fc9e49ba048b927a131a5622044c70');`}
        </script>
      </Helmet>
      <Navbar isLanding={isLanding} />
      <div className="antialiased">{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
