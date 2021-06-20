import React from 'react'
import styled from '@emotion/styled'
import { graphql } from "gatsby";

import config from "../../_config.json";
import Layout from '../components/Layout';
import Markdown from '../components/Markdown'
import SEO from '../components/SEO';

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                title
            }
        }
        allFile(filter: {extension: {in: ["png", "jpg", "jpeg", "bmp", "tiff"]}}) {
            edges {
                node {
                    internal {
                        contentDigest
                    }
                    name
                    publicURL
                    relativePath
                }
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            html
            rawMarkdownBody
            frontmatter {
                title
                tags
                date(formatString: "YYYY.MM.DD")
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`

// const Container = styled.div`
//     margin: 5% 10% 2% 10%
// `

const Title = styled.h1`
    margin: 0px;
    padding-bottom: 20px;
    color: ${config.theme.postColor}
`;

const PostPage = ({ data }) => {
    const post = data.markdownRemark
    const isMath = post.frontmatter.tags.includes(config.specialTags.math);
    const images = data.allFile.edges
    return (
        <>
            <SEO post={ post.frontmatter.title } />
            <Layout>
                <Title>{post.frontmatter.title}</Title>
                <Markdown source={post.rawMarkdownBody} math={isMath} images={images}/>
            </Layout>
        </>
    )
}

export default PostPage;