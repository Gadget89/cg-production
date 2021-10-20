import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DevelopPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the design development page</h1>
    <p>Welcome to page 4</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DevelopPage