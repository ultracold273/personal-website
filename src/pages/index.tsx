import React from "react"
import styled from '@emotion/styled'
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import config from '../../_config.json';

const Caption = styled.div`
  display: flex;
  color: ${config.theme.color};
  font-size: 18px;
  font-style: italic;
  margin: 7px auto;
  align-items: center;
  text-align: center;
`;

export default function Home() {
    return (
        <>
            <SEO post={"Lingxiao"} />
            <Layout>
                <StaticImage 
                    src="../../content/assets/cover/west_lake.jpg" 
                    alt="West Lake in Hangzhou"
                    placeholder="blurred" 
                />
                <Caption>West Lake, Hangzhou</Caption>
            </Layout>
        </>
    )
}
