import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
// import Cube from '../components/cube'


const DevelopPage = () => (
  <Layout>
    <Seo title="develop" />
    <h2 style={{
      margin: '-34px 30px',
      position: 'inherit'
    }}>DEVELOP</h2>
    <StaticImage 
      src="../images/reflect.jpg"
      width={1080}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="Icon of magniging glass"
      className="hero"
    />
    <h3>Handcrafted Websites</h3>
    <p>
      Fast sites use modern web technologies.  Combined with responsive web design, your website can stand apart!
    </p>
    <h3>CONTENT MARKETING</h3>
    <p>
      Any plan is better than no plan.
    </p>
    <h3>UX</h3>
  </Layout>
)

export default DevelopPage