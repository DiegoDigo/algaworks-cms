import styled from 'styled-components';
import { transparentize } from 'polished';

const COLORS = {
    red: 'var(--red-color)',
    primary: 'var(--primary-color)',
    foreground: 'var(--foreground-color)',
    white: 'var(--white-color)'
}

const THEME = {
    danger: {
        bg: COLORS.red,
        color: COLORS.white,
        onHover: `
            box-shadow: 0 3px 6px var(--red-color-rgba);
        `,
        desabled: {
            color: COLORS.red,
            bg: transparentize(0.75, '#F84735')
        }
    },
    primary: {
        bg: COLORS.primary,
        color: COLORS.white,
        onHover: `
        box-shadow: 0 3px 6px var(--primary-color-rgba);
    `,
        desabled: {
            color: COLORS.white,
            bg: transparentize(0.44, '#0099FF')
        }
    },
    text: {
        bg: 'transparent',
        color: COLORS.foreground,
        onHover: `
       border-color: var(--foreground-color);
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
