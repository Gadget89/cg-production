import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
import "./page-styles.css"
import Carousel, { CarouselItem } from "../components/carousel"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cube from '../components/cube'

const DesignPage = ( heading, subHeading, heroImg ) => (
  <Layout>
    <Seo title="design" />
    <h2 style={{
      margin: '-41px 44px',
      position: 'inherit'
    }}>DESIGN</h2>
    <Carousel>
      <CarouselItem 
        heading="Brand identity" 
        subHeading="Use the power of design to shape how people of Earth think of your company.  Feel confident knowing you are building on your brand’s heritage going into the future! Streamline your branding across physical and digital products."
        anchor="/"
        cta="I'm in bruh"
        heroImg="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645419128/autumn-mott-rodeheaver-gCduzLmwFYM-unsplash.jpg">
          <h2  className="sub-heading">{heading}</h2>
          <p className="sub-heading">{subHeading}</p>
          <img src={heroImg} alt="Alt" />
      </CarouselItem>
      <CarouselItem 
        heading="Content Marketing" 
        subHeading="Launch campaigns and measure success.  Use insights into customer behavior to increase sales.  It all starts with a plan, let us help you take your business to the next level!"
        anchor="/"
        cta="I'm in bruh"
        heroImg="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645482251/will-turner-GTPT_fNFQiE-unsplash.jpg">
          <h2  className="sub-heading">{heading}</h2>
          <p className="sub-heading">{subHeading}</p>
          <img src={heroImg} alt="Alt" />
      </CarouselItem>
      <CarouselItem 
        heading="Service" 
        subHeading="The cat jumped over the moon."
        anchor="/services"
        cta="I'm in bruh"
        heroImg="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645482263/zetong-li-NAP14GEjvh8-unsplash.jpg">
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
        heading="GETTING STARTED"
        subHeading="Find your bearings and get inspired!"
        bttnText="Learn More"
        anchor="/design"
        img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645419153/jane-palash-6nmG1NDbZYY-unsplash.jpg"
        img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645419161/jane-palash-6nmG1NDbZYY-unsplashbw.jpg" 
        img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645419161/jane-palash-6nmG1NDbZYY-unsplashbw.jpg"
      />
      <Cube 
        heading="PLANNING"
        subHeading="Let's put those big ideas to work."
        bttnText="I'm in"
        anchor="/design"
        img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645419168/jerry-zechariah-6tMF2PEqjHg-unsplash.jpg"
        img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645419223/jerry-zechariah-6tMF2PEqjHg-unsplashbw.jpg" 
        img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645419223/jerry-zechariah-6tMF2PEqjHg-unsplashbw.jpg"
      />
      <Cube 
        heading="REIMAGINE"
        subHeading="Ready for the next level, us too!"
        bttnText="Check it out"
        anchor="/services"
        img1="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645419260/sun-studio-creative-qUvRm5fY-Kw-unsplash.jpg"
        img2="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645419223/jerry-zechariah-6tMF2PEqjHg-unsplashbw.jpg" 
        img3="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1645419223/jerry-zechariah-6tMF2PEqjHg-unsplashbw.jpg"
      />
    </div>
  </Layout>
)

export default DesignPage