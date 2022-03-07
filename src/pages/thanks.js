import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const thanks = () => (
  <Layout>
    <Seo title="Success" />
    <h2 style={{
        margin: '-41px 44px',
        position: 'absolute'
      }}>Thanks!</h2>
    <p style={{marginLeft: '44px'}}>We got your submission!</p>
    <a style={{marginLeft: '44px'}}href="/">Go back home</a>
  </Layout>
)

export default thanks