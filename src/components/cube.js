import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import "./cube.css"

const Cube = ({ heading, subHeading, bttnText, anchor, img1, img2, img3 }) => (
<div className="content">
    <div className="cube-container">
              <div className="photo-cube">
                <div className="front photo-desc">
                    <h3 className="secondary-header">{ heading }</h3>
                    <img className="cube-img" src={img1} alt={subHeading} />
                </div>
                <div className="back photo-desc">
                  <Link
                    to={ anchor }
                    className="anchor-wrapper"
                  >
                    <h3 className="secondary-header">{ heading }</h3>
                    <p className="payload-text">
                      {subHeading}
                    </p>

                    <button className="call-to-action">
                      {bttnText}
                    </button>
                  </Link>
                </div>
                <div className="left">
                <img className="cube-img" src={img2} alt={subHeading} />
                </div>
                <div className="right">
                <img className="cube-img" src={img3} alt={subHeading} />           
          </div>
              </div>
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
