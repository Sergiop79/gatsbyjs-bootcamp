import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipiscing elit malesuada massa
        potenti at, sodales tempor purus rhoncus. Massa eget sociis suscipit
        tempor curabitur ut aliquam morbi, quisque risus volutpat vitae arcu
        vulputate leo varius, in dictum dis vestibulum himenaeos magna a. Platea
        donec sollicitudin tempus penatibus eros luctus sapien dictumst,
        imperdiet ad ornare nam gravida pharetra diam, aenean fusce viverra
        purus felis suspendisse risus.
      </p>
      <p>
        Cubilia velit eleifend phasellus interdum aenean nam augue posuere
        inceptos neque sapien lacus, class curabitur conubia viverra orci sed
        sociosqu scelerisque quis nibh semper. Himenaeos non mi nisl consequat
        lobortis ultrices vulputate interdum facilisi varius, massa quam
        venenatis laoreet cras quis cum eleifend. Netus sociosqu conubia
        porttitor bibendum varius facilisis purus vivamus mattis potenti pretium
        mauris posuere platea ornare senectus, ad curae luctus augue nibh taciti
        malesuada eget ac rutrum id class mollis dis.
      </p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
