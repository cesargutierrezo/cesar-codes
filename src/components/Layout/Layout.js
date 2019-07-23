/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./Layout.css"
import { Header } from "../Header/Header"
import { Sidebar } from "../Sidebar/Sidebar"

export const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [sidebarOpen, toggleSidebar] = useState(false)

  return (
    <>
      <Header onToggle={toggleSidebar} />
      <Sidebar open={sidebarOpen} onToggle={toggleSidebar} />
      <main className="content">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
