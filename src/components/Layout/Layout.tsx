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
    const [width, setWidth] = useState(document.documentElement.clientWidth)
    
    const onResize = useCallback(() => {
        const newWidth = document.documentElement.clientWidth
        setWidth(newWidth)
        console.log("window width: " + newWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => { window.removeEventListener('resize', onResize)}
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