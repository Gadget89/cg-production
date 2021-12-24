import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
import "./page-styles.css"
import Carousel, { CarouselItem } from "../components/carousel"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DesignPage = () => (
  <Layout>
    <Seo title="design" />
    <h2 style={{
      margin: '-34px 30px',
      position: 'inherit'
    }}>DESIGN</h2>
    {/* <StaticImage 
      src="../images/reflect.jpg"
      width={1080}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="Icon of magniging glass"
      className="hero"
    /> */}
    <Carousel>
      <CarouselItem>Item 1</CarouselItem>
      <CarouselItem>Item 2</CarouselItem>
      <CarouselItem>Item 3</CarouselItem>
    </Carousel>
  </Layout>
)

export default DesignPage