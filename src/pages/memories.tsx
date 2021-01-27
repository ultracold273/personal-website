import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Post from '../components/Post'
import SEO from '../components/SEO'

export const result = graphql`
    query GetMemories {
        allMarkdownRemark(
            filter: {
                frontmatter: {tags: {eq: "Memories", ne: "Hidden"}}
            }, 
            sort: {
                fields: frontmatter___date, order: DESC
            }
        ) {
            nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    title
                    date(formatString: "YYYY.MM.DD")
                }
            }
        }
    }
`

const Memories = ({ data }) => {
    const nodes = data.allMarkdownRemark.nodes
    return (
        <>
            <SEO post={"旧事"} />
            <Layout>
                {nodes.map((node) => (
                    <Post node={node} />
                ))}
            </Layout>
        </>
    )
}

export default Memories