import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'

export default function Home() {
    return (
        <Layout>
            <StaticImage 
                src="../../content/assets/cover/west_lake.jpg" 
                alt="West Lake in Hangzhou"
                placeholder="blurred" 
            />
        </Layout>
    )
}
