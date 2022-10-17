import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel, { CarouselItem } from "../components/carousel"
import Cube from '../components/cube'


const DevelopPage = ( heading, subHeading, heroImg, anchor ) => (
  <Layout>
    <Seo title="develop" />
    <h2 style={{
      margin: '-41px 44px',
      position: 'inherit'
    }}>DEVELOP</h2>
    <Carousel>
      <CarouselItem 
        heading="Modern Websites" 
        subHeading="Fast websites are made with modern technologies! Embrace the future of the web today! Learn about the tech stack we love to use!"
        anchor="/"
        cta="Learn More"
        heroImg="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645483754/hoodh-ahmed-6mzjJDqYU0g-unsplash.jpg">
          <h2  className="sub-heading">{heading}</h2>
          <p className="sub-heading">{subHeading}</p>
          <a to={anchor}>I'm in bruh</a>
          <img src={heroImg} alt="Alt" />
      </CarouselItem>
      <CarouselItem 
        heading="RESPONSIVE DESIGN" 
        subHeading="Awesome design has to look great on any screen!"
        anchor="/"
        cta="No doubt"
        heroImg="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645483764/ekmeds-photos-DjLIn5mSptw-unsplash.jpg">
          <h2  className="sub-heading">{heading}</h2>
          <p className="sub-heading">{subHeading}</p>
          <img src={heroImg} alt="Alt" />
      </CarouselItem>
      <CarouselItem 
        heading="LET'S TALK UX" 
        subHeading="User centered design should be at the center of all projects."
        anchor="/services"
        cta="Wut"
        heroImg="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640731004/med-badr-chemmaoui-ZSPBhokqDMc-unsplash.jpg">
          <h2  className="sub-heading">{heading}</h2>
          <p className="sub-heading">{subHeading}</p>
          <img src={heroImg} alt="Alt" />
      </CarouselItem>
    </Carousel>
    <div 
      style={{
        width: "fit-content",
        margin: "0 auto"
      }}
    >
      <Cube 
        heading="BLOG"
        subHeading="Take a look at the technologies we love to use!"
        bttnText="CHECK IT OUT"
        anchor="/design"
        img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
        img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg" 
        img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
      />
      <Cube 
        heading="WEB SERVICES"
        subHeading="We belive every website should start at the drawing board!"
        bttnText="PRICING"
        anchor="/design"
        img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
        img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg" 
        img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
      />
      <Cube 
        heading="CONNECT"
        subHeading="Ready to upgrade your website, we can help!"
        bttnText="LET'S TALK"
        anchor="/design"
        img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
        img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg" 
        img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
      />
    </div>
  </Layout>
)

export default DevelopPage