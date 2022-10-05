// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Components
const IndexPage = () => {
  return (
	<Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
       <StaticImage
        alt="Jinx the cat scared of a egg"
        src="../images/why.jpg"
      />
	</Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

// Export
export default IndexPage
