import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <ul>
      <li>
        <h1 style={{ margin: 0 }}>
        <Link to="/">
          <StaticImage
            src="../images/logo_slim.png"
            width={25}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
          />
        </Link>
        </h1>
      </li>
      <li>
        <input placeholder="Search" type="text"></input>
        <Link to="/">
          <StaticImage
            src="../images/search_icon.png"
            width={25}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
          />
        </Link>
      </li>
      <li>
        <Link to="/">
          <StaticImage
            src="../images/menu_icon.png"
            width={25}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
          />
        </Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
