import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./connect.css"

const ConnectPage = () => (
  <Layout>
    <Seo title="Let's Talk" />
    <h2 style={{
      margin: '-41px 44px',
      position: 'inherit'
    }}>CONNECT</h2>
    <div style={{marginTop: "3rem"}}>
      <p className="center"> In order to make your website dreams come true, we need to turn your abstract idea for a website into some cohesive words and sentences.  Once we can figure out what the heck you want, we’ll do our best to deliver the best options for you!</p>
      <p className="center">Let's get started, please fill out this application.  We’ll look things over and respond quickly to let you know if we can be of service.</p>
      <form className="center"  name="contact" method="POST" data-netlify="true" action="/thanks">
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
          <input className="inputSpace" placeholder="Website" type="text" id="website" name="website"/><br></br>
        </label> 
        <label for="description">
          <input className="inputSpace" placeholder="Project description" type="text" id="description" name="description"/><br></br>
        </label>
        <ul style={{marginTop: "1rem"}}>
          <li>
            <input type="checkbox" id="branding" name="branding" value="More information on branding"/>
            <label for="branding"> I would like more information on branding, marketing and design</label><br></br>
          </li>
          <li>
            <input type="checkbox" id="dev" name="website" value="More information on a new website"/>
            <label for="dev"> I would like more information on a new website</label><br></br>
          </li>
        </ul>
        <label for="submit">
        <input className="inputSpace submit" type="submit" value="SUBMIT"/>
        </label>
      </form> 
    </div>
  </Layout>
)

export default ConnectPage