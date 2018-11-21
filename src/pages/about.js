import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const About = ({ data }) => (
  <Layout>
    <h1>About Us - {data.site.siteMetadata.title}</h1>
    <p>
    Tumeric wayfarers hella portland meh mlkshk cardigan kale chips. Hell of organic mumblecore marfa green juice man braid leggings 8-bit mustache disrupt locavore +1 gastropub. Kale chips intelligentsia hot chicken, fam drinking vinegar selfies roof party hammock tbh microdosing typewriter. Glossier man braid keytar meh chillwave wayfarers meggings.
    </p>
  </Layout>
);

export default About;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`;
