import styled, { css } from 'styled-components';

const COLORS = {
  primary: {
    valueColor: '#0099FF',
    labelColor: '#274060'
  },
  default: {
    valueColor: '#274060',
    labelColor: '#274060'
  }
}

type Props = {
  color: 'primary' | 'default'
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;


export const Wrapper = styled.div``;

export const Description = styled.span`
    color: '#274060';
    font-size: 12px;
    text-transform: lowercase;
`;

export const Currency = styled.span<Props>`
  color: ${(p: Props) => COLORS[p.color].valueColor};
  font-size: 18px;
  
`;

export const Value = styled.span<Props>`
  color: ${p => COLORS[p.color].valueColor};
  font-size: 18px;
  font-weight: 800;
`;