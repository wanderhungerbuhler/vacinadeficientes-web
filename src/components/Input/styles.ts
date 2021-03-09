import styled, { css } from 'styled-components';

import Tooltip from '../../components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 10px;
  outline: none;
  font-size: 1em;
  font-weight: normal;
  border: 1px solid #F0F0F5;
  border-radius: 7px;
  background: #F0F0F5;
  color: #6c6c80;
  margin-top: 7px;
  margin-bottom: 15px;
  transition: border-color .3s;

  ${(props) =>
    props.isErrored && css`
      border-color: #c53030;
      color: #c53030;
  `}

  ${(props) =>
    props.isFocused && css`
      color: #008ae0;
      border-color: #008ae0;
  `}

  &:hover { border-color: #008ae0; }

  input {
    flex: 1;
    height: 50px;
    border: 0;
    background: transparent;
    color: #6c6c80;
  }
  svg { margin-right: 10px; }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 7px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
