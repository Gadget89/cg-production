import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
import "./page-styles.css"
import Carousel, { CarouselItem } from "../components/carousel"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DesignPage = ( heading, subHeading, heroImg ) => (
  <Layout>
    <Seo title="design" />
    <h2 style={{
      margin: '-34px 30px',
      position: 'inherit'
    }}>DESIGN</h2>
    <Carousel>
      <CarouselItem 
        heading="Brand identity" 
        subHeading="Use the power of design to shape how people of Earth think of your company.  Feel confident knowing you are building on your brand’s heritage going into the future! Streamline your branding across physical and digital products."
        heroImg="https://res.cloudinary.com/dmcxpmuqw/image/upload/c_scale,w_647/v1638569229/CP1_roybal.jpg">
          <h2  className="sub-heading">{heading}</h2>
          <p className="sub-heading">{subHeading}</p>
          <img src={heroImg} alt="Alt" />
      </CarouselItem>
      <CarouselItem 
        heading="Content Marketing" 
        subHeading="Launch campaigns and measure success.  Use insights into customer behavior to increase sales.  It all starts with a plan, let us help you take your business to the next level!"
        heroImg="https://res.cloudinary.com/dmcxpmuqw/image/upload/c_scale,w_647/v1638569229/CP1_roybal.jpg">
          <h2  className="sub-heading">{heading}</h2>
          <p className="sub-heading">{subHeading}</p>
          <img src={heroImg} alt="Alt" />
      </CarouselItem>
      <CarouselItem 
        heading="Service" 
        subHeading="The cat jumped over the moon."
        heroImg="https://res.cloudinary.com/dmcxpmuqw/image/upload/c_scale,w_647/v1638569229/CP1_roybal.jpg">
          <h2  className="sub-heading">{heading}</h2>
          <p className="sub-heading">{subHeading}</p>
          <img src={heroImg} alt="Alt" />
      </CarouselItem>
    </Carousel>
  </Layout>
)

export default DesignPage