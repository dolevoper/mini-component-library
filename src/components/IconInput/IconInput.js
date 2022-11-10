import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const vars = {
  small: {
    "--font-size": `${14 / 16}rem`,
    "--border-width": "1px",
    "--padding-left": "24px",
    "--height": `${24 / 16}rem`,
    "--icon-top": "4px"
  },
  large: {
    "--font-size": `${18 / 16}rem`,
    "--border-width": "2px",
    "--padding-left": "36px",
    "--height": `${36 / 16}rem`,
    "--icon-top": "6px"
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper style={vars[size]}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconContainer><Icon id={icon} size={size === "large" ? 24 : 16} /></IconContainer>
      <Input placeholder={placeholder} style={{ "--width": `${width}px` }} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
display: block;
position: relative;
color: ${COLORS.gray700};

&:hover {
  color: ${COLORS.black};
}
`;

const Input = styled.input`
border: none;
border-bottom: var(--border-width) solid ${COLORS.black};
outline-offset: 2px;
padding-left: var(--padding-left);
height: var(--height);
width: var(--width);
font-size: var(--font-size);
font-weight: 700;
color: inherit;

&::placeholder {
  font-weight: 400;
  color: ${COLORS.gray500};
}
`;

const IconContainer = styled.span`
position: absolute;
top: var(--icon-top);
`;

export default IconInput;
