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
    />
    <Cube 
      heading="DEVELOP"
      subHeading="The magic happens."
      bttnText="Learn more"
      anchor="/develop"
    />
    <Cube 
      heading="CONNECT"
      subHeading="Another sub heading."
      bttnText="Let's chat"
      anchor="/connect"
    />
    </div>
  </Layout>
)

export default IndexPage
