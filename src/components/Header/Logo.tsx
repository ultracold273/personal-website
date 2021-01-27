import React from 'react'
import styled from '@emotion/styled'

import { theme } from '../../../_config.json'

const Title = styled.h1`
  display: inline-block;
  color: ${theme.color};
  font-size: 20px;
  margin-bottom: 16px;
  margin-left: 50px;
  text-transform: uppercase;
`;

const Logo = () => {
    return (
        <Title>Lingxiao</Title>
    )
}

export default Logo