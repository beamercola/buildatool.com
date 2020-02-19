import React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <footer className="container py-12">
        © {new Date().getFullYear()}, build a tool
      </footer>
    </>
  )
}

export default Layout
