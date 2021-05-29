import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import config from '../../../_config.json'

const Title = styled.h1`
  display: inline-block;
  color: ${config.theme.color};
  font-size: 20px;
  margin-bottom: 16px;
  margin-left: 50px;
  text-transform: uppercase;
`;

const Logo = () => {
    return (
        <Link to="/" key="index">
          <Title>Lingxiao</Title>
        </Link>
    )
}

export default Logo