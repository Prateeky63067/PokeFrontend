import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
   <Layout title="About Us-Pokemon App">
 <div className="responsive-container-block bigContainer">
  <div className="responsive-container-block Container bottomContainer">
    <div className="ultimateImg">
      <img className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp4.svg" />
      <div className="purpleBox">
        <p className="purpleText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
        </p>
        <img className="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg" />
      </div>
    </div>
    <div className="allText bottomText">
      <p className="text-blk headingText">
        About Me
      </p>
      <p className="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
      </p>
      <a className="explore">
        View Services
      </a>
    </div>
  </div>
</div>

   </Layout>
  )
}

export default About