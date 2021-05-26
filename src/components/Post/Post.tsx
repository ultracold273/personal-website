import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import config from '../../../_config.json'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${config.theme.color};

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: ${config.theme.color};
    }
`

const Container = styled.header`
    border: 1px solid #ddd
`

const Title = styled.div`
    padding: 15px 20px;
    cursor: pointer;
`

const Time = styled.time`
    font-size: 10pt;
    color: #555;
`

const Name = styled.h2`
    margin: 0px;
`

const Post = ({ node }) => {
    return (
        <Container>
            <StyledLink to={`/posts`.concat(node.fields.slug)}>
                <Title>
                    <Time>{node.frontmatter.date}</Time>
                    <Name>{node.frontmatter.title}</Name>
                </Title>
            </StyledLink>
        </Container>
    )
}

export default Post