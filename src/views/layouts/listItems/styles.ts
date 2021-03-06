import styled, { css } from 'styled-components';

interface ContainerProps {
  isAtivado: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #fff;
  svg {
    font-size: 20px;
    min-width: 40px;
  }
  ${props =>
    props.isAtivado &&
    css`
      background: #0036b0;
      color: #fff;
      svg {
        color: #fff;
        font-size: 20px;
      }
    `}
`;
