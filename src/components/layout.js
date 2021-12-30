/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const [show, setShow] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div style={{
      margin: "0.5rem"
    }}>
      <Link to="/">
        <StaticImage 
          src="../images/logo_slim.png"
          width={30}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="Icon of magniging glass"
        />
      </Link>
      <StaticImage 
        src="../images/menu.png"
        width={30}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="Icon of magniging glass"
        onClick={() => setShow(true)}
        style={{
          position: "absolute"
        }}
      />
      <Header onClose={() => setShow(false)} show={show} />
      
      <div>
        <main className="payloadWrapper">{children}</main>
        <footer>
          © {new Date().getFullYear()}, {data.site.siteMetadata?.title || `Title`}
        </footer>
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
