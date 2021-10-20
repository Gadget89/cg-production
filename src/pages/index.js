import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cube from '../components/cube'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Cube 
      heading="DESIGN"
      subHeading="All this stuff."
      bttnText="Check it out"
    />
    <Cube 
      heading="DEVELOP"
      subHeading="The magic happens."
      bttnText="Learn more"
    />
    <Cube 
      heading="CONNECT"
      subHeading="Another sub heading."
      bttnText="Let's chat"
    />
  </Layout>
)

export default IndexPage
