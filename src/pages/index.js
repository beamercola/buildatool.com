import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Quiz from "../components/Quiz"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-center p-12">
      <h1 className="text-6xl font-bold leading-none">
        Get more warm leads
        <br />
        Keep more clients.
      </h1>
      <p className="text-xl leading-snug font-medium p-6 py-8">
        From warm lead to long-term client,
        <br />
        utilizing custom tools is the way to go
      </p>
    </div>

    <div className="bg-gray-200 flex flex-col border border-gray-400 rounded-lg">
      <div className="px-4 py-2 text-gray-600 flex items-center">
        <ul className="flex mr-2">
          <li className="rounded-full h-4 w-4 bg-red-600 mr-2"></li>
          <li className="rounded-full h-4 w-4 bg-yellow-500 mr-2"></li>
          <li className="rounded-full h-4 w-4 bg-green-500 mr-2"></li>
        </ul>
        https://yourwebsite.com
      </div>
      <img
        className="h-64 object-cover"
        src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
        alt=""
      />
      <div className="text-center p-8 px-24">
        <div className="max-w-md mx-auto">
          <h3 className="text-4xl">Is Hot Yoga Right For You</h3>
          <p className="mb-8">
            Answer these few questions to learn more about our type of yoga. Who
            knows, there might be something special waiting for you at the
            end...
          </p>
          <Quiz />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
