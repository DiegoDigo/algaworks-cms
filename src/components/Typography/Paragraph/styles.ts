import styled from 'styled-components';

export const StyledParagraph = styled.p<{ size: 'default' | 'small' }>`
  font-size: ${p => p.size === 'default' ? 24 : 14}px;
  line-height: ${p => p.size === 'default' ? 25 : 20}px;
  font-weight: 500;
  color: #274060;
`;
