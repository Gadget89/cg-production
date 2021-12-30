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
                  <Link to={ anchor }>
                    <h3 className="secondary-header">{ heading }</h3>
                    <img className="cube-img" src={img1} alt={subHeading} />
                  </Link>
                </div>
                <div className="back photo-desc">
                  <Link
                    to={ anchor }
                    style={{
                      border: 'none',
                      borderImage: 'none',
                      borderImageSlice: 'none'
                    }}
                  >
                    <h3 className="secondary-header">{ heading }</h3>
                    <p
                      style={{
                        margin: '62px 10px 30px',
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
