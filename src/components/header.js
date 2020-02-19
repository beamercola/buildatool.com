import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="flex items-center justify-between container py-4">
    <h1 className="font-semibold text-3xl">build a tool</h1>
    <div className="uppercase font-medium">
      <Link className="mx-4" to="/about">
        About
      </Link>
      <Link className="mx-4" to="/faq">
        FAQ
      </Link>
      <Link className="mx-4" to="/pricing">
        Pricing
      </Link>
    </div>
  </header>
)

export default Header
