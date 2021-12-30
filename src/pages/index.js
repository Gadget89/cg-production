import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cube from '../components/cube'

const IndexPage = () => (
  <Layout>
    <Seo title="welcome" />
    <div id="centerMe">
    <Cube 
      heading="DESIGN"
      subHeading="All this stuff."
      bttnText="Check it out"
      anchor="/design"
      img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640731005/fakurian-design-bMSA5-tLFao-unsplash.jpg"
      img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640731005/fakurian-design-bMSA5-tLFao-unsplash.jpg" 
      img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640731005/fakurian-design-bMSA5-tLFao-unsplash.jpg"
    />
    <Cube 
      heading="DEVELOP"
      subHeading="The magic happens."
      bttnText="Learn more"
      anchor="/develop"
      img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640806075/donald-giannatti-4qk3nQI3WHY-unsplash.jpg"
      img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640806075/donald-giannatti-4qk3nQI3WHY-unsplash.jpg"
      img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640806075/donald-giannatti-4qk3nQI3WHY-unsplash.jpg"
    />
    <Cube 
      heading="CONNECT"
      subHeading="Another sub heading."
      bttnText="Let's chat"
      anchor="/connect"
      img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640731006/scott-webb-sk59I1qRfEM-unsplash.jpg"
      img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640731006/scott-webb-sk59I1qRfEM-unsplash.jpg"
      img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640731006/scott-webb-sk59I1qRfEM-unsplash.jpg"
    />
    </div>
  </Layout>
)

export default IndexPage
