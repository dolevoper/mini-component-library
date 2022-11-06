import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const chevronSize = 24;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NatvieSelect value={value} onChange={onChange}>
        {children}
      </NatvieSelect>
      <Selection>
        {displayedValue}
        <ChevronWrapper style={{ "--size": `${chevronSize}px` }}>
          <Icon id="chevron-down" strokeWidth={1} size={chevronSize} />
        </ChevronWrapper>
      </Selection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
position: relative;
width: max-content;
`;

const NatvieSelect = styled.select`
position: absolute;
inset: 0;
opacity: 0;
`;

const Selection = styled.div`
padding: 12px 16px;
padding-right: calc(16px + 12px + 24px);
background-color: ${COLORS.transparentGray15};
border-radius: 8px;
color: ${COLORS.gray700};
font-size: 1rem;

${NatvieSelect}:focus + & {
  outline: 1px dotted #212121;
  outline: 5px auto -webkit-focus-ring-color;
}

${NatvieSelect}:hover + & {
  color: ${COLORS.black};
}
`;

const ChevronWrapper = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 10px;
height: var(--size);
width: var(--size);
margin: auto;
pointer-events: none;
`;

export default Select;
