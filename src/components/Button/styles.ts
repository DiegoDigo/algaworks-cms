import styled from 'styled-components';
import { transparentize } from 'polished';

const COLORS = {
    red: '#F84735',
    primary: '#0099FF',
    foreground: '#274060',
    white: '#FFFFFF'
}

const THEME = {
    danger: {
        bg: COLORS.red,
        color: COLORS.white,
        onHover: `
            box-shadow: 0 3px 6px rgba(248, 71, 53,.2);
        `,
        desabled: {
            color: COLORS.red,
            bg: transparentize(0.75, COLORS.red)
        }
    },
    primary: {
        bg: COLORS.primary,
        color: COLORS.white,
        onHover: `
        box-shadow: 0 3px 6px rgba(0, 153, 255,.2);
    `,
        desabled: {
            color: COLORS.white,
            bg: transparentize(0.44, COLORS.primary)
        }
    },
    text: {
        bg: 'transparent',
        color: COLORS.foreground,
        onHover: `
       border-color: #274060;
    `,
        desabled: {
            color: COLORS.foreground,
            bg: transparentize(0.44, '#508AC9')
        }
    }
}

export const Wrapper = styled.button<{ variant: 'danger' | 'text' | 'primary', }>`
  padding: 6px 8px 4px;
  border: 1px solid ${p => THEME[p.variant].bg};
  color: ${p => THEME[p.variant].color};
  background-color: ${p => THEME[p.variant].bg};
  
  &:hover,
  &:focus {
    ${p => THEME[p.variant].onHover};
  }

  &:disabled {
      background-color: ${p => THEME[p.variant].desabled.bg};
      color: ${p => THEME[p.variant].desabled.color};
      pointer-events: none;   
      border-color: transparent;
  }

`;
