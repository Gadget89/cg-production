import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./cube.css"

const Cube = ({ heading, subHeading, bttnText }) => (
<div className="cube-container">
              <div className="photo-cube">
                <div className="front photo-desc">
                  <Link to="/">
                    <h3 className="secondary-header">{ heading }</h3>
                    <StaticImage 
                        src="../images/gatsby-astronaut.png"
                        width={220}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="Icon of magniging glass"
                    />
                  </Link>
                </div>
                <div className="back photo-desc">
                  <Link
                    to="/"
                    style={{
                      border: 'none',
                      borderImage: 'none',
                      borderImageSlice: 'none'
                    }}
                  >
                    <h3 className="secondary-header">{ heading }</h3>
                    <p
                      style={{
                        margin: '42px 10px 33px',
                        minHeight: '88px',
                        lineHeight: '1.25',
                        color: 'white'
                      }}
                    >
                      {subHeading}
                    </p>

                    <button className="call-to-action">
                      {bttnText}
                    </button>
                  </Link>
                </div>
                <div className="left">
                <StaticImage
            src="../images/gatsby-astronaut.png"
            width={220}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
          />                </div>
                <div className="right">
                <StaticImage
            src="../images/gatsby-astronaut.png"
            width={220}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
          />                </div>
              </div>
            </div>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Cube
