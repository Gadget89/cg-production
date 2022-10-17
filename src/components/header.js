import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import "./header.css"

const Header = props => {
  if (!props.show) {
    return null
  }
  return (
    <header className="nav" >
    <div className="nav-content" onClick={e => e.stopPropagation()}>
      <div className="nav-body">
        <ul>
          <li>
            <h2 className="align">
              <Link className="link" to="/design">DESIGN</Link>
            </h2>
          </li>
          <ul>
            <li className="align">
              <Link className="link" to="/design">BLOG</Link>
            </li>
            <li className="align">
              <Link className="link" to="/services">SERVICES</Link>
            </li> 
          </ul>
          <li>
            <h2 className="align">
              <Link className="link" to="/develop">DEVELOP</Link>
            </h2>
          </li>
          <ul>
            <li className="align">
              <Link className="link" to="/design">BLOG</Link>
            </li>
            <li className="align">
              <Link className="link" to="/design">PORTFOLIO</Link>
            </li>
            <li className="align">
              <Link className="link" to="/design">SERVICES</Link>
            </li>
          </ul>
          <li>
            <h2 className="align">
              <Link className="link" to="/connect">CONNECT</Link>
            </h2>
          </li>
          <ul>
            <li className="align">
              <Link className="link" to="/design">ABOUT</Link>
            </li>
            <li className="align">
              <Link className="link" to="/design">INQUIRY</Link>
            </li>
          </ul>
        </ul>
      </div>
      <div className="navIcon">
        <img 
          src="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640914898/close.png" 
          alt="Alt text" 
          onClick={props.onClose}
        />
      </div>
    </div>
  </header>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
