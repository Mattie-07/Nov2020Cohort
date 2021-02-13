import React from "react";
import styled,{keyframes} from 'styled-components';

const move = keyframes`
  form{
    transform:translateX(0);
  }
  to{
    transform:translateX(100%);
  }
  `;


const Heading1a = styled.h1` 
    animation:${move} 2s ease infinite;
    color: fuchsia;
`

const Heading1b = styled.h1`
    text-align:center;
    color:green;
`

const Basic = () => {
  return <>
    <div>
      <Heading1a> Hey!</Heading1a>
      <Heading1b> Hello!</Heading1b>
    </div>
  
  </>;
};

export default Basic;
