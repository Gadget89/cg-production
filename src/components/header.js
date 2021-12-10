import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
            <Link to="/design">DESIGN</Link>
          </li>
          <li>
            <Link to="/develop">DEVELOP</Link>
          </li>
          <li>
            <Link to="/connect">CONNECT</Link>
          </li>
        </ul>
      </div>
      <div>
        <StaticImage 
      src="../images/gatsby-astronaut.png"
      width={50}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="Icon of magniging glass"
      onClick={props.onClose}
      className="button"
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
