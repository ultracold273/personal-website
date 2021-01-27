import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { theme, menu } from '../../../_config.json'

const Nav = styled.nav`
    float: right;
    font-size: 16px;
    margin-right: 40px;
`

const List = styled.ul`
    list-style: none;
`

const Item = styled.li`
    display: inline;
    
    & + & {
        margin-left: 15px
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${theme.color};

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: ${theme.color};
    }
`

const Navigation = () => {
    return (
        <Nav>
            <List>
                {(menu || []).map(({ name, url }) => (
                    <Item key={name}>
                        <StyledLink to={url} key={name}>
                            {name}
                        </StyledLink>
                    </Item>
                ))}
            </List>
        </Nav>
    )
}

export default Navigation
