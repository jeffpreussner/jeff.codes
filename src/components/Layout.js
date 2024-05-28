import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./all.scss";
import cx from "classnames";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { checkPropTypes } from "prop-types";

const TemplateWrapper = ({ nav, children }) => {
  const [theme, setTheme] = useState("dark");
  const { title, description } = useSiteMetadata();

  return (
    <div className={cx("site", { "site--light": theme === "light" })}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />

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
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
      </Helmet>
      <Navbar links={nav} />
      <div className="site__conent">{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
