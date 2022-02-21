import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./services.css"

const Services = () => (
  <Layout>
    <Seo title="Services" />
    <article>
      <h2 style={{
        margin: '-29vh 30px',
        position: 'absolute'
      }}>Services</h2>
      <ul className="gradient-overlay">
        <h2>Brand Identity Design</h2>
        <li>
          Strategy
        </li>
        <li>
          Research
        </li>
        <li>
          Identity System
        </li>
      </ul>
      <img className="img-float align-me" src="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640731006/jj-ying-WmnsGyaFnCQ-unsplash.jpg" alt="image" />
      <ul className="gradient-overlay">
        <h2>Web Services</h2>
        <li>
          Design
        </li>
        <li>
          Development
        </li>
      </ul>
      <img className="img-float" src="https://res.cloudinary.com/dmcxpmuqw/image/upload/v1640731004/med-badr-chemmaoui-ZSPBhokqDMc-unsplash.jpg" alt="image" />
    </article>
  </Layout>
)

export default Services
