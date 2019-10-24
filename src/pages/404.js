import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main">
      <h1>Page not found.</h1>
      <Link to="/" className="button next">Return home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
