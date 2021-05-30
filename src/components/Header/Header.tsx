import React from 'react'
import styled from '@emotion/styled'

import Navigation from './Navigation'
import Logo from './Logo'

const Wrapper = styled.header`
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    z-index: 1;
`

const Header = () => {
    return (
        <Wrapper>
            <Logo />
            <Navigation />
        </Wrapper>
    )
}

export default Header