import * as React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ post }) => {
  return (
    <Helmet>
      <title>{post}</title>
    </Helmet>
  )
}

export default SEO;