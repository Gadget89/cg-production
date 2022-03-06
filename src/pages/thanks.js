import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const thanks = () => (
  <Layout>
    <Seo title="Success" />
    <h1>Thanks!</h1>
    <p>We got your submission!</p>
    <a href="/">Go back home</a>
  </Layout>
)

export default thanks