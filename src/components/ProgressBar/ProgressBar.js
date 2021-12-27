/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizeVariables = {
  small: {
    height: "8px",
    borderRadius: "4px",
    padding: "0"
  },
  medium: {
    height: "12px",
    borderRadius: "4px",
    padding: "0"
  },
  large: {
    height: "24px",
    borderRadius: "8px",
    padding: "4px"
  }
};

const ProgressBar = ({ value, size }) => {
  const vars = sizeVariables[size];

  if (!vars) throw new Error(`Invalid 'size' prop for ProgressBar: ${size}`);

  return (
    <Wrapper aria-valuenow={value} style={{
      "--padding": vars.padding,
      "--borderRadius": vars.borderRadius
    }}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressWrapper>
        <ProgressIndicator style={{
          "--height": vars.height,
          "--width": `${value}%`
        }} />
      </ProgressWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs({
  role: "progressbar",
  "aria-valuemin": 0,
  "aria-valuemax": 100,
})`
background-color: ${COLORS.transparentGray15};
border-radius: var(--borderRadius);
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
padding: var(--padding);
`;

const ProgressWrapper = styled.div`
border-radius: 4px;
overflow: hidden;
`;

const ProgressIndicator = styled.div`
height: var(--height);
width: var(--width);
background-color: ${COLORS.primary};
`;

export default ProgressBar;
