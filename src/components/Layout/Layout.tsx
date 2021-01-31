import React, { useState, useCallback, useEffect } from 'react'
import styled from '@emotion/styled'

import Header from '../Header'

type ContainerProps = {
    width: number
}

const Container = styled.div<ContainerProps>`
    margin: ${ props => {
        const horizonMargin = ((props.width - 500) / 80 + 10).toString()
        return "2% " + horizonMargin + "% 5% " + horizonMargin + "%;"
    }}
`

const Main = styled.main`
    min-height: 100px;
    padding-bottom: 30px;
    overflow: hidden;
    margin-top: 50px;
`
const Layout = (props) => {
    // Outside useEffect, we are not allowed to use `document`
    // as we do not know whether it is defined.
    // See https://www.gatsbyjs.com/docs/debugging-html-builds/
    const [width, setWidth] = useState(1000)
    
    const onResize = useCallback(() => {
        const newWidth = document.documentElement.clientWidth
        setWidth(newWidth)
        console.log("window width: " + newWidth)
    }, [])

    useEffect(() => {
        setWidth(document.documentElement.clientWidth)
        window.addEventListener('resize', onResize)
        return () => { window.removeEventListener('resize', onResize) }
    }, [])

    return (
        <Main>
            <Header />
            <Container width={width}>
                {props.children}
            </Container>
        </Main>
    )
}

export default Layout