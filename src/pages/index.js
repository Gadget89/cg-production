import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cube from '../components/cube'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div id="centerMe">
    <Cube 
      heading="DESIGN"
      subHeading="All this stuff."
      bttnText="Check it out"
      anchor="/design"
      img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569253/cg/CP1_roybal.jpg"
      img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569253/cg/CP1_roybal.jpg" 
    />
    <Cube 
      heading="DEVELOP"
      subHeading="The magic happens."
      bttnText="Learn more"
      anchor="/develop"
      img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569364/cg/final.jpg"
      img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569364/cg/final.jpg"
    />
    <Cube 
      heading="CONNECT"
      subHeading="Another sub heading."
      bttnText="Let's chat"
      anchor="/connect"
      img1="http://placekitten.com/g/400/400"
      img2="http://placekitten.com/g/400/400"
    />
    </div>
  </Layout>
)

export default IndexPage
