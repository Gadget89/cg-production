import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel, { CarouselItem } from "../components/carousel"
import Cube from '../components/cube'


const DevelopPage = ( heading, subHeading, heroImg ) => (
  <Layout>
    <Seo title="develop" />
    <h2 style={{
      margin: '-34px 30px',
      position: 'inherit'
    }}>DEVELOP</h2>
    <Carousel>
      <CarouselItem 
        heading="Modern Websites" 
        subHeading="Fast websites are made with modern technologies!"
        heroImg="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640731006/amelie-mourichon-sv8oOQaUb-o-unsplash.jpg">
          <h2  className="sub-heading">{heading}</h2>
          <p className="sub-heading">{subHeading}</p>
          <button>Learn More</button>
          <img src={heroImg} alt="Alt" />
      </CarouselItem>
      <CarouselItem 
        heading="RESPONSIVE DESIGN" 
        subHeading="Awesome design has to look great on any screen!"
        heroImg="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640731006/jj-ying-WmnsGyaFnCQ-unsplash.jpg">
          <h2  className="sub-heading">{heading}</h2>
          <p className="sub-heading">{subHeading}</p>
          <img src={heroImg} alt="Alt" />
      </CarouselItem>
      <CarouselItem 
        heading="Service" 
        subHeading="We would love to work with you!"
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
        heading="BEYOND THE CODE"
        subHeading="Take a look at the technologies we love to use!"
        bttnText="Check it out"
        anchor="/design"
        img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
        img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg" 
        img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
      />
      <Cube 
        heading="HAND CRAFTED WEBSITES"
        subHeading="We belive every website should start at the drawing board!"
        bttnText="Learn more"
        anchor="/design"
        img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
        img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg" 
        img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
      />
      <Cube 
        heading="Time to shine!"
        subHeading="Ready to upgrade your website, we can help!"
        bttnText="Apply now"
        anchor="/design"
        img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
        img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg" 
        img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1638569229/CP1_roybal.jpg"
      />
    </div>
  </Layout>
)

export default DevelopPage