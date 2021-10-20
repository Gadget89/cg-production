import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ConnectPage = () => (
  <Layout>
    <Seo title="Page 5" />
    <h1>Hi from the connect landing page</h1>
    <p>Welcome to page 5</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ConnectPage