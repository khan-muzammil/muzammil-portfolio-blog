import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>About me</h2>
            <p>Hi, I’m Muzammil Khan, a full stack developer based in Aurangabad, Maharashtra.
            I aim to write down everything I know and everything I learn along the way.
            </p>
            <p>I spend my free time trying to perfect what I do and while I’ll never be perfect, I do my best to come close.</p>

        
        <div class="work section second" id="experiences">
            <h1>Work Experience</h1>
            <ul class="work-list">
              <li>May 2020 - Present</li>
              <li><a href="https://attainu.com/">AttainU</a></li>
              <li>Mentor</li>
            </ul>
        </div>

        <div class="work section second" id="achievements">
            <h1>Education</h1>
            <ul class="work-list">
              <li>Bachelor Of Engineering(Information Technology)</li>
              <li>Savitribai Phule Pune University</li>
              <li>2013 - 2017</li>
            </ul>
        </div>

        <div class="work section second" id="skills">
            <h1>Technical Skills</h1>
            <ul class="work-list">
              <li>HTML/ CSS | Javascript | Express | Nodejs | MERN | RESTful APIs </li>
            </ul>
            <ul class="work-list">
              <li>Reactjs | Redux | Gatsby | Nextjs</li>
            </ul>
            <ul class="work-list">
              <li> MongoDB | PostgreSQL</li>
            </ul>
        </div>

        <div class="work section second" id="achievements">
            <h1>Connect with me</h1>
            <ul class="work-list">
              <li>
                <a href="https://twitter.com/Muzammil_7"> Twitter</a> &emsp;
                <a href="https://www.linkedin.com/in/muzammil-khan-/"> LinkedIn </a> &emsp;
                <a href="https://github.com/muzammil-khan-vst-au4"> Github </a> 
              </li>
            </ul>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
