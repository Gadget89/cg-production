import * as React from "react"
// import { Link } from "gatsby"
import Cube from '../components/cube'

import Layout from "../components/layout"
import Seo from "../components/seo"

const DesignPage = () => (
  <Layout>
    <Seo title="design" />
    <h2 style={{
      margin: '-34px 34px',
      position: 'inherit'
    }}>DESIGN</h2>
    <div id="centerMe">
    <Cube 
      heading="BRAND IDENTITY"
      subHeading="Amazing by design."
      bttnText="Learn more"
      anchor="/design"
      img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569253/cg/CP1_roybal.jpg"
      img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569253/cg/CP1_roybal.jpg" 
      img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638754289/cg/final_bw.jpg"
    />
    <Cube 
      heading="CONTENT MARKETING"
      subHeading="Is the world ready for you?"
      bttnText="Tell me more"
      anchor="/develop"
      img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638757243/cg/final-3.jpg"
      img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638757243/cg/final-3.jpg"
      img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638754289/cg/final_bw.jpg"
    />
    <Cube 
      heading="SERVICES"
      subHeading="Tell us about your dream website!"
      bttnText="Let's chat"
      anchor="/connect"
      img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638757243/cg/final-3.jpg"
      img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638756430/cg/final-2mx.jpg"
      img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638754289/cg/final_bw.jpg"
    />
    </div>
  </Layout>
)

export default DesignPage