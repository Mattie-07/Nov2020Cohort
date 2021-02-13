import React from "react";
import {Button} from 'react-bootstrap'
import styled,{keyframes} from 'styled-components';

const FullWidthButton = styled(Button)`

  widtth:100%,
  height:100px,
  color: white,
  font-size: 40px

`





const BootstrapButton = () => {
  return <>
    <FullWidthButton variant = "Warning">warning </FullWidthButton>
  </>;
};

export default BootstrapButton;
