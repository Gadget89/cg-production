import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./services.css"

const Services = () => (
  <Layout>
    <Seo title="services" />
    <h2 style={{
        margin: '-41px 44px',
        position: 'absolute'
      }}>Services</h2>
    <article>
      <ul>
        <h2>Brand Identity Design</h2>
        <li>
          <h3>
            Strategy
          </h3>
        </li>
        <ul>
          <li>
            UX
          </li>
          <li>
            User Research
          </li>
          <li>
            Identity System
          </li>
        </ul>
        <li>
          <h3>
            Design
          </h3>
          <ul>
            <li>
              Brandmarks
            </li>
            <li>
              Wireframe
            </li>
            <li>
              Mockups
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <h2>Web Services</h2>
        <li>
          <h3>
            Design
          </h3>
          <ul>
            <li>
              UI
            </li>
            <li>
              Wireframe
            </li>
            <li>
              Mockups
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Development
          </h3>
          <ul>
            <li>
              Architecture
            </li>
            <li>
              Content Strategy
            </li>
            <li>
              Site Production
            </li>
            <li>
              Maintenance
            </li>
          </ul>
        </li>
      </ul>
    </article>
    <a className="anchor" href="/connect">Start a project</a>
  </Layout>
)

export default Services
