import styled, { css } from 'styled-components';

const SvgCreator= styled.div`
  ${({width, height, url}) => css`
    background: url('${url}') no-repeat;
    width: ${width}px;
    height: ${height}px;
  `}
`;

export default SvgCreator;
