import React from 'react';
import styled, { css } from 'styled-components';

const MyButton = styled.div`
  color: green;
  text-decoration: underline;

  ${props => props.red && css`
    color: red;  
  `}

  ${props => props.blue && css`
    color: blue;  
  `}
`

export default MyButton;