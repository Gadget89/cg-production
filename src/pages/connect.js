import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./connect.css"

const ConnectPage = () => (
  <Layout>
    <Seo title="Connect" />
    <h2 className="heroHeading">Let's talk</h2>
    <StaticImage 
      src="../images/reflect.jpg"
      width={1080}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="Icon of magniging glass"
      className="hero"
    />
    <p className="center">Tell us about your dream and let's build something amazing together! Don't be shy, we are ready to handcraft a stunning website for your business! Fill out the form below and we'll be in touch to let you know if our services are right for your business needs.</p>
    <form className="center" action="/">
      <label for="name">
        <input className="inputSpace" placeholder="Name" type="text" id="name" name="name"/><br></br>
      </label>
      <label for="email">
        <input className="inputSpace" placeholder="Email" type="email" id="email" name="email"/><br></br>
      </label> 
      <label for="company">
        <input className="inputSpace" placeholder="Company" type="text" id="company" name="company"/><br></br>
      </label> 
      <label for="phone">
        <input className="inputSpace" placeholder="Phone" type="phone" id="phone" name="phone"/><br></br>
      </label> 
      <label for="budget">
        <input className="inputSpace" placeholder="Project budget" type="text" id="budget" name="budget"/><br></br>
      </label> 
      <label for="description">
        <input className="inputSpace" placeholder="Project description" type="text" id="description" name="description"/><br></br>
      </label>
      <label for="submit">
        <input className="inputSpace submit" type="submit" value="Submit"/>
      </label>
    </form> 
  </Layout>
)

export default ConnectPage